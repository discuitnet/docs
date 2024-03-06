import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.discuit.net",
  integrations: [
    starlight({
      title: "Discuit Docs",
      description: "Documentation for Discuit",
      logo: { src: "./src/assets/favicon.png", alt: "Discuit's logo" },
      editLink: { baseUrl: "https://github.com/discuitnet/docs/edit/main/" },
      sidebar: [
        {
          label: "Getting started",
          link: "/getting-started",
        },
        {
          label: "Authentication",
          link: "/authentication",
        },
        {
          label: "Errors",
          link: "/errors",
        },
        {
          label: "Endpoints",
          collapsed: true,
          autogenerate: { directory: "Endpoints" },
        },
        {
          label: "Types",
          link: "/types",
        },
      ],
      social: {
        github: "https://github.com/discuitnet/docs",
      },
      lastUpdated: true,
      favicon: "/favicon.png",
    }),
  ],
});
