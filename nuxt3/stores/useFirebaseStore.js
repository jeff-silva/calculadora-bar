// TODO: Tratar este arquivo como um composable

import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";

import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";
import * as fireFirestore from "firebase/firestore";
import * as fireStorage from "firebase/storage";

export default defineStore("firebase", () => {
  const config = useRuntimeConfig();
  fireApp.initializeApp(config.public.firebase);
  const _auth = fireAuth.getAuth();
  const fireFirestoreDB = fireFirestore.getFirestore();

  const strategies = {
    login: {
      async email(data) {
        return await fireAuth.signInWithEmailAndPassword(_auth, data.email, data.password);
      },
    },
    register: {
      async email(data) {
        return await fireAuth.createUserWithEmailAndPassword(_auth, data.email, data.password);
      },
    },
  };

  const ready = ref(false);
  const user = ref(false);

  const auth = reactive({
    busy: false,
    success: false,
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
      this.success = false;
      this.error = false;
      try {
        if (typeof strategies["login"][strategy] != "undefined") {
          await strategies["login"][strategy](data);
          this.success = true;
          event.dispatch("loginSuccess");
        }
      } catch (err) {
        this.error = await this.exception(err);
        event.dispatch("loginError");
      }
      this.busy = false;
    },
    async logout() {
      const r = await fireAuth.signOut(_auth);
      event.dispatch("logout");
      return r;
    },
    async exception(err) {
      return { code: "", message: "", customData: {}, name: false, ...err };
    },
  });

  const firestore = reactive({
    busy: false,
    error: false,
    async find() {},
    async save() {},
    async delete() {},
    async search() {},
  });

  const storage = reactive({});

  const event = reactive({
    events: [],
    async on(name, callback) {
      this.events.push({ name, callback });
    },
    async dispatch(eventName) {
      this.events.map(({ name, callback }) => {
        if (name != eventName) return;
        callback();
      });
    },
  });

  fireAuth.onAuthStateChanged(_auth, (authUser) => {
    ready.value = true;

    if (!authUser) {
      user.value = false;
      event.dispatch("onAuthStateChanged");
      return;
    }

    user.value = {
      uid: authUser.uid,
      name: (authUser.providerData[0] ? authUser.providerData[0]["displayName"] : null) || authUser.email,
      email: authUser.email,
      emailVerified: authUser.emailVerified,
      phoneNumber: authUser.providerData[0] ? authUser.providerData[0]["phoneNumber"] : "",
      photoURL: authUser.providerData[0] ? authUser.providerData[0]["photoURL"] : "",
    };

    event.dispatch("onAuthStateChanged");
  });

  return { ready, user, auth, firestore, storage, event };

  // const r = ref({
  //   ready: false,
  //   user: false,

  //   app: {},

  //   auth: {
  //     busy: false,
  //     error: false,
  //     async register(data = {}, strategy = "email") {
  //       data = { email: "", password: "", ...data };
  //       this.busy = true;
  //       try {
  //         if (typeof strategies["register"][strategy] != "undefined") {
  //           await strategies["register"][strategy](data);
  //         }
  //       } catch (err) {
  //         this.error = this.exception(err);
  //       }
  //       this.busy = false;
  //     },
  //     async login(data = {}, strategy = "email") {
  //       data = { email: "", password: "", ...data };
  //       this.busy = true;
  //       try {
  //         if (typeof strategies["login"][strategy] != "undefined") {
  //           await strategies["login"][strategy](data);
  //         }
  //       } catch (err) {
  //         this.error = this.exception(err);
  //       }
  //       this.busy = false;
  //     },
  //     async logout() {
  //       return await fireAuth.signOut(auth);
  //     },
  //     async exception(err) {
  //       return { code: "", message: "", customData: {}, name: false, ...err };
  //     },
  //   },

  //   firestore: {
  //     busy: false,
  //     error: false,
  //     async save(collection, data = {}) {
  //       data = { uid: null, name: "", ...data };
  //       const ref = fireFirestore.collection(fireFirestoreDB, collection);

  //       if (!data.uid) {
  //         const created = await fireFirestore.addDoc(ref, data);
  //         data.uid = created.id;
  //       }

  //       await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data);
  //       return data;
  //     },
  //     async find(collection, value, by = "uid") {
  //       const docRef = fireFirestore.doc(fireFirestoreDB, collection, value);
  //       const docSnap = await fireFirestore.getDoc(docRef);
  //       return docSnap.exists() ? docSnap.data() : false;
  //     },
  //     async search(collection, query = {}) {
  //       query = {
  //         limit: 5,
  //         // orderBy: ["uid", "desc"],
  //         where: [],
  //         startAfter: false,
  //         endAt: false,
  //         ...query,
  //       };

  //       let prev = false;
  //       let next = false;

  //       const collectRef = fireFirestore.collection(fireFirestoreDB, collection);

  //       let queryArgs = [];

  //       if (query.orderBy) {
  //         queryArgs.push(fireFirestore.orderBy.apply(null, query.orderBy));
  //       }

  //       if (query.where.length > 0) {
  //         query.where.map((condition) => {
  //           queryArgs.push(fireFirestore.where.apply(null, condition));
  //         });
  //       }

  //       if (query.startAfter) {
  //         queryArgs.push(
  //           fireFirestore.startAfter(
  //             await fireFirestore.getDoc(fireFirestore.doc(fireFirestoreDB, collection, query.startAfter))
  //           )
  //         );
  //       }

  //       if (query.endAt) {
  //         queryArgs.push(
  //           fireFirestore.endAt(await fireFirestore.getDoc(fireFirestore.doc(fireFirestoreDB, collection, query.endAt)))
  //         );
  //       }

  //       if (query.limit) {
  //         queryArgs.push(fireFirestore.limit(query.limit));
  //       }

  //       const docsQuery = fireFirestore.query.apply(null, [collectRef, ...queryArgs]);
  //       const docs = await fireFirestore.getDocs(docsQuery);

  //       let data = [];
  //       docs.forEach((doc) => {
  //         data.push({ ...doc.data(), uid: doc.id });
  //       });

  //       if (data.length == query.limit) {
  //         next = JSON.parse(JSON.stringify(query));
  //         next.startAfter = data[data.length - 1]["uid"];
  //         next.endAt = false;
  //       }

  //       return { query, data, prev, next };
  //     },

  //     async delete(collection, uid) {},
  //   },

  //   storage: {
  //     busy: false,
  //     error: false,
  //   },

  //   events: [],
  //   on(event, callback) {
  //     this.events.push({ event, callback });
  //   },
  //   dispatch(eventId) {
  //     this.events.map(({ event, callback }) => {
  //       if (event != eventId) return;
  //       callback();
  //     });
  //   },
  // });

  // fireAuth.onAuthStateChanged(auth, (user) => {
  //   r.ready = true;

  //   if (!user) {
  //     r.user = false;
  //     r.dispatch("onAuthStateChanged");
  //     return;
  //   }

  //   console.log("user", user);

  //   r.user = {
  //     uid: user.uid,
  //     name: (user.providerData[0] ? user.providerData[0]["displayName"] : null) || user.email,
  //     email: user.email,
  //     emailVerified: user.emailVerified,
  //     phoneNumber: user.providerData[0] ? user.providerData[0]["phoneNumber"] : "",
  //     photoURL: user.providerData[0] ? user.providerData[0]["photoURL"] : "",
  //   };

  //   r.dispatch("onAuthStateChanged");
  // });

  // onMounted(() => {
  //   console.log(r.test);
  // });

  // return r;
});
