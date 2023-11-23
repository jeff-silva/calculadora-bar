import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";
import * as fireFirestore from "firebase/firestore";
import * as fireStorage from "firebase/storage";

const config = useRuntimeConfig();
fireApp.initializeApp(config.public.firebase);

export default class {
  static async getData() {
    const auth = fireAuth.getAuth();
    const fireFirestoreDB = fireFirestore.getFirestore();
    return { config, auth, fireApp, fireAuth, fireFirestore, fireFirestoreDB, fireStorage };
  }

  // static async userCreate() {}

  // static async userUpdate() {}

  // static async userLogin() {}

  // static async userLogout() {}

  static async firestoreSave(collection, data = {}) {
    data = { uid: null, name: "", ...data };

    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const ref = fireFirestore.collection(fireFirestoreDB, collection);

    if (!data.uid) {
      const created = await fireFirestore.addDoc(ref, data);
      data.uid = created.id;
    }

    if (data.uid) {
      await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data);
    }

    await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data);
    return data;
  }

  static async firestoreFind(collection, find, by = "uid") {
    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const docRef = fireFirestore.doc(fireFirestoreDB, collection, find);
    const docSnap = await fireFirestore.getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : false;
  }

  static async firestoreSearch(collection, query = {}) {
    query = {
      limit: 5,
      // orderBy: ["uid", "desc"],
      // where: [],
      startAfter: false,
      endAt: false,
      ...query,
    };

    let prev = false;
    let next = false;

    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const collectRef = fireFirestore.collection(fireFirestoreDB, collection);

    let queryArgs = [];

    if (query.orderBy) {
      queryArgs.push(fireFirestore.orderBy.apply(null, query.orderBy));
    }

    // if (query.where.length > 0) {
    //   query.where.map((condition) => {
    //     queryArgs.push(fireFirestore.where.apply(null, condition));
    //   });
    // }

    if (query.startAfter) {
      queryArgs.push(
        fireFirestore.startAfter(
          await fireFirestore.getDoc(fireFirestore.doc(fireFirestoreDB, collection, query.startAfter))
        )
      );
    }

    if (query.endAt) {
      queryArgs.push(
        fireFirestore.endAt(await fireFirestore.getDoc(fireFirestore.doc(fireFirestoreDB, collection, query.endAt)))
      );
    }

    if (query.limit) {
      queryArgs.push(fireFirestore.limit(query.limit));
    }

    const docsQuery = fireFirestore.query.apply(null, [collectRef, ...queryArgs]);
    const docs = await fireFirestore.getDocs(docsQuery);

    let data = [];
    docs.forEach((doc) => {
      data.push({ ...doc.data(), uid: doc.id });
    });

    if (data.length == query.limit) {
      next = JSON.parse(JSON.stringify(query));
      next.startAfter = data[data.length - 1]["uid"];
      next.endAt = false;
    }

    return { query, data, prev, next };
  }

  static async firestoreDelete(collection, uid) {
    const { fireFirestore, fireFirestoreDB } = await this.getData();
    const itemRef = fireFirestore.doc(fireFirestoreDB, collection, uid);
    return await fireFirestore.deleteDoc(itemRef);
  }

  static async realtimeSave() {}

  static async realtimeFind() {}

  static async realtimeSearch() {}

  static async realtimeDelete() {}

  static async storageSave(data, file = null) {
    data = { uid: false, name: "", size: "", type: "", ...data };

    const { fireStorage } = await this.getData();
    const storage = fireStorage.getStorage();
    const fileRef = fireStorage.ref(storage, data.name);
    fireStorage.uploadBytes(fileRef, file);
    console.log(data, file);
  }

  static async storageFind() {}

  static async storageSearch() {}

  static async storageDelete() {}

  static async onAuthStateChanged(callback) {
    const { auth, fireAuth } = await this.getData();
    return fireAuth.onAuthStateChanged(auth, callback);
  }
}
