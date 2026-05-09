const withNextra = require('nextra')({
  theme: 'nextra-theme-docs', // or 'nextra-theme-blog'
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  // Your existing Next.js config (reactStrictMode, etc.)
  reactStrictMode: true,
})
