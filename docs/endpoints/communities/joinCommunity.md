# /\_joinCommunity

## POST

Make the authenticated user join or leave a community.

Requests must have the following JSON body:

```ts
type Request = {
  communityId: string;
  leave: boolean; // false by default
};
```

Returns a [Community](/types#community) object.
