// vite.config.js
import { svelte } from "file:///mnt/c/Users/wlodz/projects/volt/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import routify from "file:///mnt/c/Users/wlodz/projects/volt/node_modules/@roxi/routify/lib/extra/vite-plugin/vite-plugin.js";
import { defineConfig } from "file:///mnt/c/Users/wlodz/projects/volt/node_modules/vite/dist/node/index.js";
import { mdsvex } from "file:///mnt/c/Users/wlodz/projects/volt/node_modules/mdsvex/dist/main.cjs.js";
import { resolve } from "path";
import postCssNesting from "file:///mnt/c/Users/wlodz/projects/volt/node_modules/postcss-nesting/dist/index.mjs";
var production = process.env.NODE_ENV === "production";
var vite_config_default = defineConfig({
  clearScreen: false,
  resolve: { alias: { "@": resolve("src") } },
  test: {
    environment: "jsdom",
    globals: true,
    server: {
      deps: { inline: ["@roxi/routify"] }
    }
  },
  plugins: [
    routify({ ssr: { enable: production } }),
    svelte({
      compilerOptions: {
        dev: !production,
        hydratable: !!process.env.ROUTIFY_SSR_ENABLE
      },
      extensions: [".md", ".svelte"],
      preprocess: [mdsvex({ extension: "md" })]
    })
  ],
  css: { postcss: { plugins: [postCssNesting()] } },
  server: { port: 1337 }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvd2xvZHovcHJvamVjdHMvdm9sdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL3dsb2R6L3Byb2plY3RzL3ZvbHQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL3dsb2R6L3Byb2plY3RzL3ZvbHQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGUgfSBmcm9tICdAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlJ1xuaW1wb3J0IHJvdXRpZnkgZnJvbSAnQHJveGkvcm91dGlmeS92aXRlLXBsdWdpbidcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBtZHN2ZXggfSBmcm9tICdtZHN2ZXgnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBwb3N0Q3NzTmVzdGluZyBmcm9tICdwb3N0Y3NzLW5lc3RpbmcnXG5cbmNvbnN0IHByb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICAgIHJlc29sdmU6IHsgYWxpYXM6IHsgJ0AnOiByZXNvbHZlKCdzcmMnKSB9IH0sXG4gICAgXG4gICAgdGVzdDoge1xuICAgICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBkZXBzOiB7IGlubGluZTogW1wiQHJveGkvcm91dGlmeVwiXSB9LFxuICAgICAgICB9ICAgICAgICAgIFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICByb3V0aWZ5KHsgc3NyOiB7IGVuYWJsZTogcHJvZHVjdGlvbiB9IH0pLFxuICAgICAgICBzdmVsdGUoe1xuICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZGV2OiAhcHJvZHVjdGlvbixcbiAgICAgICAgICAgICAgICBoeWRyYXRhYmxlOiAhIXByb2Nlc3MuZW52LlJPVVRJRllfU1NSX0VOQUJMRSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbJy5tZCcsICcuc3ZlbHRlJ10sXG4gICAgICAgICAgICBwcmVwcm9jZXNzOiBbbWRzdmV4KHsgZXh0ZW5zaW9uOiAnbWQnIH0pXSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjc3M6IHsgcG9zdGNzczogeyBwbHVnaW5zOiBbcG9zdENzc05lc3RpbmcoKV0gfSB9LFxuXG4gICAgc2VydmVyOiB7IHBvcnQ6IDEzMzcgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsY0FBYztBQUN6UyxPQUFPLGFBQWE7QUFDcEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxjQUFjO0FBQ3ZCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG9CQUFvQjtBQUUzQixJQUFNLGFBQWEsUUFBUSxJQUFJLGFBQWE7QUFFNUMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsYUFBYTtBQUFBLEVBQ2IsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUUxQyxNQUFNO0FBQUEsSUFDRixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsTUFDSixNQUFNLEVBQUUsUUFBUSxDQUFDLGVBQWUsRUFBRTtBQUFBLElBQ3RDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLFdBQVcsRUFBRSxDQUFDO0FBQUEsSUFDdkMsT0FBTztBQUFBLE1BQ0gsaUJBQWlCO0FBQUEsUUFDYixLQUFLLENBQUM7QUFBQSxRQUNOLFlBQVksQ0FBQyxDQUFDLFFBQVEsSUFBSTtBQUFBLE1BQzlCO0FBQUEsTUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTO0FBQUEsTUFDN0IsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFDNUMsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUU7QUFBQSxFQUVoRCxRQUFRLEVBQUUsTUFBTSxLQUFLO0FBQ3pCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
