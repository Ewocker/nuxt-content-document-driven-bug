import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "article"
declare module "/Users/ylin/Desktop/Dropbox/Project/Nuxt/document-driven/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}