# /\_commentVote

## POST

Requests must have the following JSON body:

```ts
type Request = {
  commentId: string;
  up: boolean;
};
```

This endpoint is identical to [`/_postVote`](/api/endpoints/posts/postVote).
