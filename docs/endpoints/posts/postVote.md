# /\_postVote

## POST

Votes a post up or down and returns the [Post](/types#post) object. If already voted, then changes the vote.

Request must have the following JSON body:

```ts
type Request = {
  postId: string;
  up: boolean; // true for upvotes, false for downvotes
};
```
