# /posts/{postId}/comments/\{commentId\}

## DELETE

Deletes a comment and returns it.

### Query parameters

| Name       | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `deleteAs` | One of `normal`, `admins`, `mods`, with `normal` being the default. |

## PUT

Updates a comment and returns the updated [Comment](/types#comment) object.

Requests may have the following JSON body:

```ts
type Request = {
  body: string; // New comment body
};
```

The query parameters `action=changeAsUser&userGroup=admins`, example, changes the "speaking as" status of a comment to that of an admin (if the authenticated user is an admin and it's the admin's comment).
