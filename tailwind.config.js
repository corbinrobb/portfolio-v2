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
      borderOpacity: ["active"],
      ringWidth: ["active"],
      boxShadow: ["hover", "active"],
    },
  },
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
};
