# /users/{username}/feed

## GET

Returns the feed items of a user. The result sets are cursor paginated.

Feeds of banned users can only be viewed by admins.

### Query parameters

| Name    | Description                                                 |
| ------- | ----------------------------------------------------------- |
| `next`  | The pagination cursor. If null, there's no next result set. |
| `limit` | The max number of items in a result set.                    |

### Possible errors

| HTTP status code | [APIError](/errors/) code |
| ---------------- | ------------------------- |
| 401              | `user_banned`             |
| 404              | `user_not_found`          |
| 403              | `not_admin`               |
| 400              | `invalid_cursor`          |
| 400              | `invalid_limit`           |
