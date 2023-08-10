export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/content", "@nuxt/ui"],
  content: {
    documentDriven: true,
  },
});
