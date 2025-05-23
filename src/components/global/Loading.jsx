import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <div
        class="loader-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgb(255,255,255)",
          zIndex: 1000,
        }}
      >
        <div class="loader text-blue-900" style={{ fontSize: "2em", fontWeight: 900 }}>
          <span>&lt;</span>
          <span>Pim Panharith</span>
          <span>/&gt;</span>
        </div>
      </div>
    );
  },
});
