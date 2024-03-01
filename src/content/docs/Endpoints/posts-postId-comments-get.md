---
title: "posts/{postId}/comments [GET]"
---

Returns a paginated list of comments. The `postId` in the URL is the `publicId` of the post.

Response:

```ts
type Response = {
  comments: Comment[] | null; // Array of Comment objects.
  next: string | null; // Pagination cursor.
};
```

#### Query parameters

| Name                | Description                                 |
| ------------------- | ------------------------------------------- |
| `parentId` (string) | If set, return `parentId`'s child comments. |
| `next` (string)     | Pagination cursor.                          |
