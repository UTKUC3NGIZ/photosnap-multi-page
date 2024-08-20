/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#ffffff",
        pureBlack: "#000000",
        pureWhite: "#ffffff",
        lightGrey: "#DFDFDF",
        custom: {
          peach: "#FFC593",
          mauve: "#BC7198",
          blue: "#5A77FF",
        },
      },
      gradientColorStops: (theme) => ({
        "custom-gradient-start": "#FFC593",
        "custom-gradient-middle": "#BC7198",
        "custom-gradient-end": "#5A77FF",
      }),
      fontSize: {
        "h1-h2": ["40px", { lineHeight: "48px" }],
        h2: ["24px", { lineHeight: "25px" }],
        h3: ["18px", { lineHeight: "25px" }],
        h4: ["12px", { lineHeight: "16px" }],
        body: ["15px", { lineHeight: "25px" }],
      },
    },
  },
  plugins: [],
};
