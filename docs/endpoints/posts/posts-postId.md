# /posts/\{postId\}

The `postId` being used here is the `publicId` of the [Post](/types#post) object.

## DELETE

Deletes a post. Returns the deleted [Post](/types#post) object.

### Query Parameters

| Name          | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| deleteAs      | One of: `normal`, `mods`, `admins`. With `normal` being the default. |
| deleteContent | Boolean. If `true`, the body of the post is also deleted.[^1]        |

[^1]: For link-posts this is the link. For text post this is the text. For image posts these are the image(s).

## GET

Returns a [Post](/types#post) object.

If the query parameter `fetchCommunity` is set to `true`, `post.community` field is populated (otherwise it's null).

## PUT

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

### Possible errors

| HTTP Status Code | [APIError](/errors/) code |
| ---------------- | ------------------------- |
| 403              | `not_admin`               |
| 403              | `not_mod`                 |
