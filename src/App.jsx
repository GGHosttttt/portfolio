import { defineComponent, onMounted, ref } from "vue";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
export default defineComponent({
  render() {
    return (
      <div>
        <NavBar />
        <router-view />
        <Footer />
      </div>
    );
  },
});
