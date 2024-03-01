---
title: "posts [POST]"
---

Creates a post object and returns it.

Request must have the following JSON body:

```ts
type Request = {
  // Post type. Default is "text".
  type: "text" | "image" | "link";

  title: string; // Required
  body: string;
  community: string; // Name of community, required
  url: string; // Only valid for link-posts
};
```

If successful, a newly created post is returned.
