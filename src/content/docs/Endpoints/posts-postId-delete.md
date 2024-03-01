---
title: "posts/{postId} [DELETE]"
---

Deletes a post. Returns the deleted post.

## Query Parameters

| Name          | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| deleteAs      | One of: `normal`, `mods`, `admins`. With `normal` being the default. |
| deleteContent | Boolean. If `true`, the body of the post is also deleted.\*          |

\* For link-posts this is the link. For text post this is the text. For image posts these are the image(s).
