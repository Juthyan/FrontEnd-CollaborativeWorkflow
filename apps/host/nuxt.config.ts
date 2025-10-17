// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: '.',
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // CSS global
  css: ['./assets/css/tailwind.css'],

  // Configuration PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Modules éventuels à ajouter plus tard
  modules: [],
})