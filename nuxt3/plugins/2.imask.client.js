// https://imask.js.org/
import IMask from "imask";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.directive("imask", {
    input: false,
    settings: {},
    imask: false,

    presets(el, bind, vnode, prevVnode) {
      return {
        money: {
          mask(value) {
            value = (value || "").replace(/[^0-9]/g, "") / 100;
            this._value = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
              .format(value)
              .replace(" €", "");
          },
        },
        "phone-br": {
          mask: [{ mask: "(00) 0000-0000" }, { mask: "(00) 00000-0000" }],
        },
      };
    },

    fireEvent(el, eventName, data) {
      let e = document.createEvent("CustomEvent");
      e.initCustomEvent(eventName, true, true, data);
      el.dispatchEvent(e);
    },

    beforeMount(el, bind, vnode, prevVnode) {
      bind.dir.input = el.tagName == "INPUT" ? el : el.querySelector("input");

      bind.dir.settings = (() => {
        const presets = bind.dir.presets(el, bind, vnode, prevVnode);
        let settings = bind.value;

        if (typeof bind.value == "string") {
          settings = presets[bind.value] || {
            mask: bind.value,
          };
        }

        if (Array.isArray(bind.value)) {
          settings = {
            mask: bind.value.map((mask) => {
              return { mask };
            }),
          };
        }

        return settings;
      })();

      bind.dir.imask = IMask(bind.dir.input, bind.dir.settings);
    },

    updated(el, bind, vnode, prevVnode) {
      const { input, settings, imask } = bind.dir;
      imask.masked.value = input.value;
      imask.updateOptions(settings);
      imask._onChange();
      // vnode.ctx.emit("update:modelValue", "123");
    },

    unmounted(el, bind, vnode, prevVnode) {
      bind.dir.imask.destroy();
    },
  });
});
