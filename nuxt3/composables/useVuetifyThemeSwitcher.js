import { reactive } from "vue";
import { useTheme } from "vuetify";
import { useStorage } from "@vueuse/core";

export default (options = {}) => {
  const theme = useTheme();

  options = {
    themes: [],
    ...options,
  };

  if (options.themes.length == 0) {
    options.themes = Object.keys(theme.computedThemes.value);
  }

  options.themes = options.themes.filter((themeName) => {
    return typeof theme.computedThemes.value[themeName] == "object";
  });

  const themeCurrentStorage = useStorage("vuetify-theme-switcher-current", options.themes[0] || "");

  const r = reactive({
    current: themeCurrentStorage.value,
    themes: options.themes,

    switch(themeName = null) {
      if (themeName === null) {
        const index = Math.max(0, r.themes.indexOf(r.current));
        const indexNext = index + 1 > r.themes.length - 1 ? 0 : index + 1;
        themeName = r.themes[indexNext];
        themeCurrentStorage.value = themeName;
      }

      r.current = themeName;
      theme.global.name.value = themeName;
    },

    icon(icons = {}) {
      return icons[r.current] || null;
    },
  });

  theme.global.name.value = r.current;
  return r;
};
