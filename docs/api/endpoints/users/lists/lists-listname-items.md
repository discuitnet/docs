# /users/\{username\}/lists/\{listname\}/items

**Alternative endpoint: `/lists/{listId}/items`**

## GET

Returns an array of list items, each of type [ListItem](/api/types#listitem). Each list item also contains either the [Post](/api/types#post) or the [Comment](/api/types#comment) it refers to.

Response:

```ts
type Response = {
  items: ListItem[];
  next: string | null; // If null, there are no result pages after this.
};
```

### Query parameters

| Name    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| `next`  | The pagination cursor (the value from a previous response).               |
| `limit` | The max number of items in a result set.                                  |
| `sort`  | Feed sorting. One of: `addedDsc`, `addedAsc`, `createdDsc`, `createdAsc`. |

## POST

Add an item (a post or a comment) to a list.

The request must have the following JSON body:

```ts
type Request = {
  targetId: string;
  targetType: "post" | "comment";
};
```

## DELETE

If the request does not have a JSON body, then all the items in the list are deleted.

If the request has a JSON body, then it must be of the following type, and in which case only a single post or comment is deleted:

```ts
type Request = {
  targetId: string;
  targetType: "post" | "comment";
};
```
