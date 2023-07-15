/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
// module.exports = {
//   // ...
//   plugins: [
//     // ...
//     require('@tailwindcss/aspect-ratio'),
//   ],
// }
