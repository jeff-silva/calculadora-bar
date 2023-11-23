import { reactive } from "vue";

import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";

const config = useRuntimeConfig();
fireApp.initializeApp(config.public.firebase);

export default (options = {}) => {
  const auth = fireAuth.getAuth();

  options = {
    data: {},
    ...options,
  };

  const r = reactive({
    busy: false,
    data: options.data,

    async login(strategy = "email", data = {}) {
      this.busy = true;

      const strategies = {
        async email() {
          data = { email: "", password: "", ...data };
          const resp = await fireAuth.createUserWithEmailAndPassword(auth, data.email, data.password);
          console.log(resp);
        },
        async google() {
          const provider = new fireAuth.GoogleAuthProvider();
          // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

          provider.setCustomParameters({ prompt: "select_account" });
          try {
            await fireAuth.signInWithPopup(auth, provider); // Use 'provider' directly here
          } catch (error) {
            alert(error.message);
          }

          // const result = await fireAuth.signInWithPopup(auth, provider);
          // const credential = fireAuth.GoogleAuthProvider.credentialFromResult(result);
          // console.log({ result, credential });

          // const aaa = await fireAuth.signInWithRedirect(auth, provider);
          // console.log("aaa", aaa);
        },
      };

      if (typeof strategies[strategy] != "undefined") {
        strategies[strategy]();
      }

      this.busy = false;
    },

    logout() {
      //
    },
  });

  return r;
};
