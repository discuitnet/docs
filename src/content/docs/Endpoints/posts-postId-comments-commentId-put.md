---
title: "posts/{postId}/comments/{commentId} [PUT]"
---

Updates a comment and returns the updated comment.

Requests may have the following JSON body:

```ts
type Request = {
  body: string; // New comment body
};
```

The query parameters `action=changeAsUser&userGroup=admins`, example, changes the "speaking as" status of a comment to that of an admin (if the authenticated user is an admin and it's the admin's comment).
