---
title: "posts/{postId}/comments [POST]"
---

Requests must have the following JSON body:

```ts
type Request = {
  parentCommentId: string | null;
  body: string;
};
```

Returns the added comment.

#### Query parameters

| Name                 | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| `userGroup` (string) | Post comment as. One of `normal`, `admins`, `mods`, with `normal` being default. |
