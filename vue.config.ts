module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
}
