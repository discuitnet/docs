# /lists/\_saved_to

## GET

Returns an array of list ids a post or a comment is saved to.

```ts
type Response = int[] | APIError;
```

### Query parameters

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| targetId | The id of the post or the comment                    |
| type     | The type of `targetId`. One of: `post` or `comment`. |
