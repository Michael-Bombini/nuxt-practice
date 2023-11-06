// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  // components: [
  //   {
  //     path: "~/components/ui",
  //     // this is required else Nuxt will autoImport `.ts` file
  //     extensions: [".vue"],
  //     // prefix for your components, eg: UiButton
  //     prefix: "Ui",
  //   },
  // ],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@sidebase/nuxt-auth",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
