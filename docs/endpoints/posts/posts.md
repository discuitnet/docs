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

The `comments` and `commentsNext` values of the [Post](/types#post) object will be null when returned from this endpoint. In order to get those values, use the [`/posts/${postId}`](/endpoints/posts/posts-postId) endpoint with the `publicId` of the specific post you would like to see comments for.

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

| HTTP Status Code | [APIError](/errors/) code |
| ---------------- | ------------------------- |
| 403              | not_admin                 |
| 400              | invalid_cursor            |
| 400              | invalid_limit             |
| 400              | invalid_filter            |

## POST

Creates a [Post](/types#post) object and returns it.

Request must have the following JSON body:

```ts
type Request = {
  // Post type. Default is "text".
  type: "text" | "image" | "link";

  title: string; // Required
  body: string;
  community: string; // Name of community, required
  url: string; // Only valid for link-posts
};
```

If successful, a newly created post is returned.
