# /posts

## GET

Retrieve community and site-wide posts by 'hot', 'activity', etc.

Response for normal feeds (for a request like: `/api/posts?feed=home&sort=hot`):

```ts
type Response = {
  posts: Post[]; // Array of posts
  next: string | null; // Pagination cursor (null implies end of pagination)
};
```

The `comments` and `commentsNext` values of the [Post](/api/types#post) object will be null when returned from this endpoint. In order to get those values, use the [`/posts/${postId}`](/api/endpoints/posts/posts-postId) endpoint with the `publicId` of the specific post you would like to see comments for.

If the query parameter `filter` is set and it's not `all`, the request is only allowed for moderators and admins. And these result sets are page-paginated rather than cursor-paginated.

Response for moderator feeds (for a request like `/api/posts?communityId=17692e122def73f25bd757e0&filter=deleted`):

```ts
type Response = {
  noPosts: number; // Posts count
  limit: number;
  page: number; // Current page number
  posts: Post[]; // Array of posts
};
```

### Query parameters

| Name          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `feed`        | One of: `home`, `all`, `community`.                                         |
| `filter`      | One of: `all`, `deleted`, `locked`. If not set, `all` is the default.[^1]   |
| `sort`        | One of: `latest`, `hot`, `activity`, `day`, `week`, `month`, `year`, `all`. |
| `communityId` | If this field is set, posts of this community will be returned.             |
| `next`        | The pagination cursor. If null, there's no next result set                  |
| `limit`       | The max number of items in a result set.                                    |

[^1]:
    The filter parameter is available only if the authenticated user is a
    moderator or an admin.

### Possible errors

| HTTP Status Code | [APIError](/api/errors/) code |
| ---------------- | ----------------------------- |
| 403              | not_admin                     |
| 400              | invalid_cursor                |
| 400              | invalid_limit                 |
| 400              | invalid_filter                |

## POST

Creates a [Post](/api/types#post) object and returns it.

Request must have the following JSON body:

```ts
type Request = {
  type: "text" | "image" | "link"; // Post type. Default is "text"
  title: string; // Required
  url: string; // Only valid for link-posts
  body: string;
  community: string; // Name of community, required

  // Denotes in which capacity the authenticated user is submitting this post.
  // If empty, the value is treated as "normal".
  userGroup: "normal" | "admins" | "mods" | "";

  imageId: string; // Id of an uploaded image. Valid only for image-posts. DEPRECATED (use the field below).

  // These images, in order they are listed here, are to be the images of this
  // post. This field is only valid for image-posts.
  images: ImageUpload[] | null;
};
```

Go to the [types page](/api/types#image) for a definition of the `ImageUpload` type.

If successful, a newly created post is returned.
