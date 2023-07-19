/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '88': '22rem',
        '104': '26rem'
      }
    },
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
