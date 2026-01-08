// src/components/Button.jsx
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Click Me",
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const handleClick = (event) => {
      if (props.loading) return;
      emit("click", event);
    };

    return { handleClick };
  },
  render() {
    return (
      <button
        type="submit"
        class={[
          "primary-btn-outline cursor-pointer ",
          this.loading ? "loading disabled" : "",
        ].join(" ")}
        onClick={this.handleClick}
      >
        {this.loading && (
          <i
            class="fas fa-spinner fa-spin mr-2"
            style={{ color: "#1C398E" }}
          ></i>
        )}
        <span style={{ color: "#1C398E" }} className="font-semibold">
          {this.loading ? "waiting" : this.text}
        </span>
      </button>
    );
  },
});
