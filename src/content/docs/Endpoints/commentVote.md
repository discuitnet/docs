---
title: "_commentVote"
---

## POST

Requests must have the following JSON body:

```ts
type Request = {
  commentId: string;
  up: boolean;
};
```

This endpoint is identical to [`/api/_postVote`](/endpoints/postvote-post).
