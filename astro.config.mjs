import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { defineConfig, squooshImageService } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: "https://rogram.vercel.app/",
  integrations: [tailwind(), icon()],
  image: {
    service: squooshImageService(),
  },
});
