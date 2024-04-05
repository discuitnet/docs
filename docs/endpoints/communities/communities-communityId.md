# /communities/\{communityId}

## GET

Returns a [Community](/types#community) object.

If the query parameter `byName=true` is present, `communityId` in the request URL is treated as the name of the community instead of its ID.

## PUT

Updates a community and returns it.

If the query parameter `byName=true` is present, `communityId` in the request
URL is treated as the name of the community instead of its ID.

Requests may have the following JSON body:

```ts
type Request = {
  nsfw: boolean | null;
  about: string | null;
};
```
