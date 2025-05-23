import { defineComponent, onMounted, ref } from "vue";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import Loading from "./components/global/Loading.jsx";

export default defineComponent({
  setup() {
    const loading = ref(true);

    setTimeout(() => {
      loading.value = false;
    }, 0);
    // }, 2500);
    return { loading };
  },

  render() {
    return (
      <div>
        {this.loading && <Loading />}
        <NavBar />
        <router-view />
        <Footer />
      </div>
    );
  },
});
