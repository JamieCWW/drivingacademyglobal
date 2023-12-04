module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components2/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      // Safelist pattern for your custom width classes
      pattern: /^w-[2-7]00$/, // Matches w-200, w-300, w-400, w-500, w-600, w-700
    },
  ],
  theme: {
    extend: {
      animation: {
        "loading-spin": "spin 500ms linear infinite",
        "toast-in": "slideOut 100ms linear",
      },
      keyframes: {
        slideOut: {
          from: { transform: "translateX(-5rem)" },
          to: { transform: "translateX(0)" },
        },
        slideIn: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-5rem)" },
        },
      },
      width: {
        200: "200%",
        300: "300%",
        400: "400%",
        500: "500%",
        600: "600%",
        700: "700%",
      },
    },
    forms: (theme) => ({
      DEFAULT: {
        focusColor: theme("colors.amber.600"),
        placeholderColor: theme("colors.gray.500"),
      },
    }),
    lugins: [],
  },
};
