import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['word-block', 'px-2 py-1.5 rounded text-center hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer'],
    [/^icon-btn-(.*)$/, ([, c], { theme }) => {
      const color = (theme as any).colors[c]
      if (color)
        return `text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-${color}`
    }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#0d9488', // teal-600
      disabled: '#4b5563', // gray-600
    },
  },
})
