// TODO: Remover este arquivo e todas as suas referências

import { reactive } from "vue";

import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";

const config = useRuntimeConfig();
fireApp.initializeApp(config.public.firebase);

export default (options = {}) => {
  const auth = fireAuth.getAuth();

  fireAuth.onAuthStateChanged(auth, (user) => {
    r.user = user || false;
  });

  options = {
    data: {},
    ...options,
  };

  const r = reactive({
    busy: false,
    user: false,

    async login(strategy = "email", data = {}) {
      this.busy = true;

      const strategies = {
        async email() {
          data = { email: "", password: "", ...data };
          const resp = await fireAuth.signInWithEmailAndPassword(auth, data.email, data.password);
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

    register(data = {}) {
      //
    },
  });

  return r;
};
