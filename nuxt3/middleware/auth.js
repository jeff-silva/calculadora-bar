import useFirebaseStore from "@/stores/useFirebaseStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path == "/auth") return;
  const f = useFirebaseStore();

  const logged = await new Promise((resolve, reject) => {
    if (f.ready) {
      return resolve(f.user);
    }

    f.event.on("onAuthStateChanged", () => {
      resolve(f.user);
    });
  });

  if (!logged) {
    const route = useRoute();
    return navigateTo(`/auth?redirect=${route.fullPath}`);
  }
});
