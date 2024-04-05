import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discuit API Documentation",
  description: "The documentation for Discuit's API",
  lang: "en-US",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  markdown: {
    config(md) {
      md.use(markdownItFootnote);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.png",
    siteTitle: "Discuit API Docs",
    nav: [
      {
        text: "Documentation",
        link: "/getting-started",
      },
      {
        text: "Discuit",
        link: "https://discuit.net",
      },
    ],
    sidebar: [
      {
        text: "Getting started",
        link: "/getting-started",
      },
      {
        text: "Authentication",
        link: "/authentication",
      },
      {
        text: "Types",
        link: "/types",
      },
      {
        text: "Endpoints",
        collapsed: true,
        link: "/endpoints/",
        items: [
          { text: "/_initial", link: "/endpoints/initial" },
          { text: "/push_subscriptions", link: "/endpoints/pushSubscriptions" },
          {
            text: "Authentication",
            collapsed: true,
            items: [
              { text: "/_login", link: "/endpoints/authentication/login" },
              { text: "/_signup", link: "/endpoints/authentication/signup" },
            ],
          },
          {
            text: "Communities",
            collapsed: true,
            items: [
              {
                text: "/_joinCommunity",
                link: "/endpoints/communities/joinCommunity",
              },
              {
                text: "/communities",
                link: "/endpoints/communities/communities",
              },
              {
                text: "/communities/{communityId}",
                link: "/endpoints/communities/communities-communityId",
              },
              {
                text: "Mods",
                collapsed: true,
                items: [
                  {
                    text: "/communities/.../mods",
                    link: "/endpoints/communities/mods/mods",
                  },
                  {
                    text: "/communities/.../mods/{mod}",
                    link: "/endpoints/communities/mods/mods-mod",
                  },
                ],
              },
              {
                text: "Rules",
                collapsed: true,
                items: [
                  {
                    text: "/communities/.../rules",
                    link: "/endpoints/communities/rules/rules",
                  },
                  {
                    text: "/communities/.../rules/{ruleId}",
                    link: "/endpoints/communities/rules/rules-ruleId",
                  },
                ],
              },
            ],
          },
          {
            text: "Notifications",
            collapsed: true,
            items: [
              {
                text: "/notifications",
                link: "/endpoints/notifications/notifications",
              },
              {
                text: "/notifications/{notificationId}",
                link: "/endpoints/notifications/notifications-notificationId",
              },
            ],
          },
          {
            text: "Posts",
            collapsed: true,
            items: [
              { text: "/_postVote", link: "/endpoints/posts/postVote" },
              { text: "/posts", link: "/endpoints/posts/posts" },
              {
                text: "/posts/{postId}",
                link: "/endpoints/posts/posts-postId",
              },
              {
                text: "Comments",
                collapsed: true,
                items: [
                  {
                    text: "/_commentVote",
                    link: "/endpoints/posts/comments/commentVote",
                  },
                  {
                    text: "/posts/{postId}/comments",
                    link: "/endpoints/posts/comments/comments",
                  },
                  {
                    text: "/posts/.../.../{commentId}",
                    link: "/endpoints/posts/comments/comments-commentId",
                  },
                ],
              },
            ],
          },
          {
            text: "Users",
            collapsed: true,
            items: [
              { text: "/_settings", link: "/endpoints/users/settings" },
              { text: "/_user", link: "/endpoints/users/user" },
              {
                text: "/users/{username}",
                link: "/endpoints/users/users-username",
              },
              {
                text: "/users/{username}/feed",
                link: "/endpoints/users/users-username-feed	",
              },
            ],
          },
        ],
      },
      {
        text: "Errors",
        collapsed: true,
        link: "/errors/",
        items: [
          {
            text: "400 - Bad request",
            link: "/errors/400-bad-request",
          },
          {
            text: "404 - Not found",
            link: "/errors/404-not-found",
          },
          {
            text: "429 - Too many requests",
            link: "/errors/429-too-many-requests",
          },
          {
            text: "500 - Internal server error",
            link: "/errors/500-internal-server-error",
          },
        ],
      },
    ],

    outline: {
      level: [2, 4],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/discuitnet/docs",
        ariaLabel: "Documentation site source code",
      },
    ],

    editLink: {
      pattern: "https://github.com/discuitnet/docs/edit/main/docs/:path",
    },
    externalLinkIcon: true,
    search: {
      provider: "local",
    },
  },
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.discuit.net",
  },
});
