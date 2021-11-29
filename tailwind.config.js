const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  darkMode: "class", // or 'media' or 'class'
  plugins: [],
  theme: {
    extend: {
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "v-8": "8vh",
        "v-70": "70vh",
        "v-92": "92vh",
      },
      backgroundImage: {
        project:
          "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-1deg)",
          },
          "50%": {
            transform: "rotate(1deg)",
          },
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down-1/4s": "fade-in-down 0.2s ease-out",
        "fade-in-down-1/2s": "fade-in-down 0.5s ease-out",
        "wiggle-1s": "wiggle 0.5s ease-in-out",
        "slide-down": "slide-down 0.75s ease-out",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundOpacity: ["active"],
      textColor: ["active"],
      borderWidth: ["hover", "active"],
      borderOpacity: ["active", "hover"],
      ringWidth: ["active"],
      boxShadow: ["hover", "active"],
      opacity: ["disabled"],
      scale: ["active"],
    },
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
};
