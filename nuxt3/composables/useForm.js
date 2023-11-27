import { reactive, onMounted } from "vue";

export default (options = {}) => {
  options = {
    data: { uid: false, name: "" },
    onSubmit: () => null,
    onError: (err) => console.error(err),
    onLoad: () => null,
    ...options,
  };

  const r = reactive({
    ready: false,
    busy: false,
    success: false,
    error: false,
    response: false,
    async submit() {
      this.busy = true;
      this.error = false;
      this.success = false;
      try {
        this.response = (await this.onSubmit()) || true;
        this.success = true;
        setInterval(() => {
          this.success = false;
        }, 3000);
      } catch (err) {
        this.error = this.onError(err) || true;
      }
      this.busy = false;
    },
    async fill(data = {}) {
      r.data = data;
    },
    ...options,
  });

  onMounted(() => {
    r.onLoad();
  });

  return r;
};
