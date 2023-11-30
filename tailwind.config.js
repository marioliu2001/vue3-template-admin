/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // 解决button按钮的样式问题(tailwind和element-ui的样式冲突)
    // function ({ addBase, theme }) {
    //   addBase({
    //     '.el-button': {
    //       'background-color': 'var(--el-button-bg-color,val(--el-color-white))'
    //     }
    //   })
    // }
  ]
}
