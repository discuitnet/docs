# /users/{username}/lists

## GET

Returns an array of the user's lists. If the user is the logged in user, all the user's lists, both private and public, are returned; if not, only the user's public lists are returned.

```ts
type Response = List[] | APIError;
```

## POST

Creates a [List](/api/types#list) object and returns an array of the user's lists, including the newly created one. If the POST request is successful, the output is the same as a GET request to this endpoint.

Requests must have the following JSON body:

```ts
type Request = {
  name: string; // Required
  displayName: string;
  description: string | null;
  public: boolean;
};
```
