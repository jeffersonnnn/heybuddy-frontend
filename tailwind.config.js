module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      phone: { max: "320px" },
      phone2x: { max: "480px" },
      phone3x: { max: "768px" },
      tablet: { max: "912px" },
      tablet2x: { max: "1024px" },
      desktop: { max: "1200px" },
      desktop2x: { max: "1440px" },
      desktop3x: { max: "1680px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      grey: "#cccccc",
      grey2: "#8B8A91",
      bgColor: "#1b1e26",
      red: "#FF654C",
      purple: "#8B1CEE",
      white: "#FDFBFA",
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      workSans: ["Work Sans", "sans-serif"],
      shippori: ["Shippori Mincho", "serif"],
    },
    fontSize: {
      sm: ["14px", "16px"],
      base: ["16px", "24px"],
      lg: ["24px", "40px"],
      xl: ["32px", "40px"],
      "2xl": ["48px", "56px"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
