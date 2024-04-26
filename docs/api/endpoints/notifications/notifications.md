# /notifications

## GET

```ts
type Response = {
  count: int;
  newCount: int;
  items: Notification[];
  next: string;
};
```

## POST

You can send POST requests with query parameters `?action=resetNewCount`, `?action=markAllAsSeen` or `?action=deleteAll`. No request body is needed.

| Query parameter (`action`) | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `resetNewCount`            | Resets the count of new notifications to zero. |
| `markAllAsSeen`            | Marks all unread notifications as read.        |
| `deleteAll`                | Deletes all notifications.                     |

An additional query parameter can be set for the `markAllAsSeen` query parameter with the `type`.

| Query parameter (`type`) | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `new_comment`            | When a user gets comments on their post        |
| `comment_reply`          | When a user gets replies to their comment(s)   |
| `new_votes`              | When a user's post or comment gets upvotes     |
| `deleted_post`           | When a user's post is deleted                  |
| `mod_add`                | When the user is added as a mod to a community |
| `new_badge`              | When the user gets a new badge                 |

Example queries:

- `?action=resetNewCount`
- `?action=markAllAsSeen`
- `?action=markAllAsSeen&type=new_comment`

If the query is unsuccessful, an [APIError](/api/errors/) is returned. Otherwise, the response is of the type:

```ts
type Response = {
  success: true;
};
```
