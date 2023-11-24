import useFirebaseStore from "@/stores/useFirebaseStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const f = useFirebaseStore();

  f.event.on("onAuthStateChanged", () => {
    // console.log(f.user);
    // console.log({ from, to, f });
    if (!f.user && to.path !== "/auth") {
      return navigateTo("/auth");
    }
  });
});
