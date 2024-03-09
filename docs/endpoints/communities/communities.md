# /communities

## GET

Returns an array of Community objects.

### Query parameters

| Name           | Description                            |
| -------------- | -------------------------------------- |
| `set` (string) | One of `all`, `default`, `subscribed`. |
| `q` (string)   | Search query.                          |

The query parameter `set=all` returns all communities available. And `default` returns the list of default communities, and `subscribed` returns the list of communities the authenticated user is a member of.

If `q=` is set, a matching set of communities is returned.
