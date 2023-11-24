import { reactive } from "vue";

import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";
import * as fireFirestore from "firebase/firestore";
import * as fireStorage from "firebase/storage";

const config = useRuntimeConfig();
fireApp.initializeApp(config.public.firebase);

export default (options = {}) => {
  const auth = fireAuth.getAuth();

  const strategies = {
    login: {
      async email(data) {
        return await fireAuth.signInWithEmailAndPassword(auth, data.email, data.password);
      },
    },
    register: {
      async email(data) {
        return await fireAuth.createUserWithEmailAndPassword(auth, data.email, data.password);
      },
    },
  };

  const r = reactive({
    ready: false,
    user: false,

    app: {},

    auth: {
      busy: false,
      error: false,
      async register(data = {}, strategy = "email") {
        data = { email: "", password: "", ...data };
        this.busy = true;
        try {
          if (typeof strategies["register"][strategy] != "undefined") {
            await strategies["register"][strategy](data);
          }
        } catch (err) {
          this.error = this.exception(err);
        }
        this.busy = false;
      },
      async login(data = {}, strategy = "email") {
        data = { email: "", password: "", ...data };
        this.busy = true;
        try {
          if (typeof strategies["login"][strategy] != "undefined") {
            await strategies["login"][strategy](data);
          }
        } catch (err) {
          this.error = this.exception(err);
        }
        this.busy = false;
      },
      async logout() {
        return await fireAuth.signOut(auth);
      },
      async exception(err) {
        return { code: "", message: "", customData: {}, name: false, ...err };
      },
    },

    firestore: {
      busy: false,
      error: false,
      async create() {},
      async update() {},
      async save() {},
      async find() {},
      async search() {},
      async delete() {},
    },

    storage: {
      busy: false,
      error: false,
    },
  });

  fireAuth.onAuthStateChanged(auth, (user) => {
    r.ready = true;

    if (!user) {
      r.user = false;
      return;
    }

    r.user = {
      uid: user.uid,
      name: (user.providerData[0] ? user.providerData[0]["displayName"] : null) || user.email,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.providerData[0] ? user.providerData[0]["phoneNumber"] : "",
      photoURL: user.providerData[0] ? user.providerData[0]["photoURL"] : "",
    };
  });

  return r;
};
