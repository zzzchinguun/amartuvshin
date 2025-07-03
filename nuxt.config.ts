// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  
  // Enable static site generation
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  
  // Generate static site
  ssr: false // Disable server-side rendering for GitHub Pages
})
