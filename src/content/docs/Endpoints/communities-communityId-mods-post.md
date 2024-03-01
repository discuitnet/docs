---
title: "communities/{communityId}/mods [POST]"
---

Make a user a moderator of a community.

The authenticated user must have the correct permissions.

Requests must have the following JSON body:

```ts
type Request = {
  username: string; // The new moderator
};
```

Returns an array of User objects.
