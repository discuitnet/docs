# /posts/{postId}/comments

## GET

Returns a paginated list of [Comment](/types#comment) objects. The `postId` in the URL is the `publicId` of the post.

Response:

```ts
type Response = {
  comments: Comment[] | null; // Array of Comment objects.
  next: string | null; // Pagination cursor.
};
```

### Query parameters

| Name                | Description                                 |
| ------------------- | ------------------------------------------- |
| `parentId` (string) | If set, return `parentId`'s child comments. |
| `next` (string)     | Pagination cursor.                          |

## POST

Requests must have the following JSON body:

```ts
type Request = {
  parentCommentId: string | null;
  body: string;
};
```

Returns the added [Comment](/types#comment) object.

### Query parameters

| Name                 | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| `userGroup` (string) | Post comment as. One of `normal`, `admins`, `mods`, with `normal` being default. |
