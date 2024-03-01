---
title: "posts/{postId} [PUT]"
---

Updates a post. Must have the correct permissions.

JSON request body:

```ts
type Request = {
  title: string; // New title of post
  body: string; // New body of post (for text-posts)
};
```

Omit any of these fields, if you do not wish to change it.

Moderators and admins can lock a post. To lock a post pass in these query parameters to the PUT request: `action=lock&lockAs=mods`. `action` could be one of `lock` or `unlock`. And `lockAs` could be one of `admins` or `mods`.

Moderators and admins can change the "officially speaking" indicator by passing in `action=changeAsUser&userGroup=admins` query parameters. Here, `userGroup` could be one of `normal`, `mods`, or `admins`.

Post body or title is not updated on requests with an `action=` query parameter.

## Possible errors

| HTTP Status Code | [APIError](/errors) code |
| ---------------- | ------------------------ |
| 403              | `not_admin`              |
| 403              | `not_mod`                |
