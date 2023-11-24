import { reactive } from "vue";

import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";
import * as fireFirestore from "firebase/firestore";
import * as fireStorage from "firebase/storage";

const config = useRuntimeConfig();
fireApp.initializeApp(config.public.firebase);

export default (options = {}) => {
  const auth = fireAuth.getAuth();
  const fireFirestoreDB = fireFirestore.getFirestore();

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
      async save(collection, data = {}) {
        data = { uid: null, name: "", ...data };
        const ref = fireFirestore.collection(fireFirestoreDB, collection);

        if (!data.uid) {
          const created = await fireFirestore.addDoc(ref, data);
          data.uid = created.id;
        }

        await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data);
        return data;
      },
      async find(collection, value, by = "uid") {
        const docRef = fireFirestore.doc(fireFirestoreDB, collection, value);
        const docSnap = await fireFirestore.getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : false;
      },
      async search(collection, params = {}) {},
      async delete(collection, uid) {},
    },

    storage: {
      busy: false,
      error: false,
    },

    events: [],
    on(event, callback) {
      this.events.push({ event, callback });
    },
    dispatch(eventId) {
      this.events.map(({ event, callback }) => {
        if (event != eventId) return;
        callback();
      });
    },
  });

  fireAuth.onAuthStateChanged(auth, (user) => {
    r.ready = true;

    if (!user) {
      r.user = false;
      r.dispatch("onAuthStateChanged");
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

    r.dispatch("onAuthStateChanged");
  });
  return r;
};
