/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bluee: "#071e34",
        color: "#aa6f73",
        color1: "eea990",
        color2: "a39193",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
      backgroundImage: {
        cricket:
          "url('C:\\Users\\VINUTHA R\\Desktop\\4th sem\\iplpred\\my-app\\src\\Assets\\cricket.jpg')",
        crickett:
          "url('C:\\Users\\VINUTHA R\\Desktop\\4th sem\\iplpred\\my-app\\src\\Assets\\cricket4.jpg')",
        blueimg:
          "url('C:\\Users\\VINUTHA R\\Desktop\\4th sem\\iplpred\\my-app\\src\\Assets\\blue.jpg')",
        blueeimg:
          "url('C:\\Users\\VINUTHA R\\Desktop\\4th sem\\iplpred\\my-app\\src\\Assets\\bluee.jpg')",
        crickettt:
          "url('C:\\Users\\VINUTHA R\\Desktop\\4th sem\\iplpred\\my-app\\src\\Assets\\crickettt.jpg')",
        cric: "url('C:\\Users\\VINUTHA R\\Desktop\\4th sem\\iplpred\\my-app\\src\\Assets\\aksh-yadav-bY4cqxp7vos-unsplash.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
