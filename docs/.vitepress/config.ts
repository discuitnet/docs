import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discuit Documentation",
  description: "The documentation for Discuit",
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
    siteTitle: "Discuit Docs",
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
        text: "Self-hosting",
        link: "/self-hosting",
      },
      {
        text: "API",
        items: [
          {
            text: "Getting started",
            link: "/api/getting-started",
          },
          {
            text: "Authentication",
            link: "/api/authentication",
          },
          {
            text: "Types",
            link: "/api/types",
          },
          {
            text: "Endpoints",
            collapsed: true,
            link: "/api/endpoints/",
            items: [
              { text: "/_initial", link: "/api/endpoints/initial" },
              {
                text: "/push_subscriptions",
                link: "/api/endpoints/pushSubscriptions",
              },
              {
                text: "Authentication",
                collapsed: true,
                items: [
                  {
                    text: "/_login",
                    link: "/api/endpoints/authentication/login",
                  },
                  {
                    text: "/_signup",
                    link: "/api/endpoints/authentication/signup",
                  },
                ],
              },
              {
                text: "Communities",
                collapsed: true,
                items: [
                  {
                    text: "/_joinCommunity",
                    link: "/api/endpoints/communities/joinCommunity",
                  },
                  {
                    text: "/communities",
                    link: "/api/endpoints/communities/communities",
                  },
                  {
                    text: "/communities/{communityId}",
                    link: "/api/endpoints/communities/communities-communityId",
                  },
                  {
                    text: "Mods",
                    collapsed: true,
                    items: [
                      {
                        text: "/communities/.../mods",
                        link: "/api/endpoints/communities/mods/mods",
                      },
                      {
                        text: "/communities/.../mods/{mod}",
                        link: "/api/endpoints/communities/mods/mods-mod",
                      },
                    ],
                  },
                  {
                    text: "Rules",
                    collapsed: true,
                    items: [
                      {
                        text: "/communities/.../rules",
                        link: "/api/endpoints/communities/rules/rules",
                      },
                      {
                        text: "/communities/.../rules/{ruleId}",
                        link: "/api/endpoints/communities/rules/rules-ruleId",
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
                    link: "/api/endpoints/notifications/notifications",
                  },
                  {
                    text: "/notifications/{notificationId}",
                    link: "/api/endpoints/notifications/notifications-notificationId",
                  },
                ],
              },
              {
                text: "Posts",
                collapsed: true,
                items: [
                  { text: "/_postVote", link: "/api/endpoints/posts/postVote" },
                  { text: "/posts", link: "/api/endpoints/posts/posts" },
                  {
                    text: "/posts/{postId}",
                    link: "/api/endpoints/posts/posts-postId",
                  },
                  {
                    text: "Comments",
                    collapsed: true,
                    items: [
                      {
                        text: "/_commentVote",
                        link: "/api/endpoints/posts/comments/commentVote",
                      },
                      {
                        text: "/posts/{postId}/comments",
                        link: "/api/endpoints/posts/comments/comments",
                      },
                      {
                        text: "/posts/.../.../{commentId}",
                        link: "/api/endpoints/posts/comments/comments-commentId",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Users",
                collapsed: true,
                items: [
                  { text: "/_settings", link: "/api/endpoints/users/settings" },
                  { text: "/_user", link: "/api/endpoints/users/user" },
                  {
                    text: "/users/{username}",
                    link: "/api/endpoints/users/users-username",
                  },
                  {
                    text: "/users/{username}/feed",
                    link: "/api/endpoints/users/users-username-feed	",
                  },
                ],
              },
            ],
          },
          {
            text: "Errors",
            collapsed: true,
            link: "/api/errors/",
            items: [
              {
                text: "400 - Bad request",
                link: "/api/errors/400-bad-request",
              },
              {
                text: "404 - Not found",
                link: "/api/errors/404-not-found",
              },
              {
                text: "429 - Too many requests",
                link: "/api/errors/429-too-many-requests",
              },
              {
                text: "500 - Internal server error",
                link: "/api/errors/500-internal-server-error",
              },
            ],
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
