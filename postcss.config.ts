import purgecss from '@fullhuman/postcss-purgecss'

export default {
  plugins: [
    purgecss({
      content: ['./src/**/*.html', './src/**/*.tsx'],
      safelist: ['body', 'svg'],
    }),
  ],
}
