import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "ADBL",
        short_name: "ADBL",
        description: "Your mobile banking style app",
        theme_color: "#0f7a6e",
        background_color: "#ffffff",
        icons: [
          {
            src: "public\icons\icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "public\icons\icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});