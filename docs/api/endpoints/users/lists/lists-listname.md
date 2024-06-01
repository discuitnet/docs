# /users/\{username\}/lists/\{listname\}

**Alternative endpoint: `/lists/{listId}`**

## GET

Returns a [List](/api/types#list) object, or a 404 error.

```ts
type Response = List | APIError;
```

## PUT

Updates a list.

Requests must have the following JSON body (note that any of the fields of the JSON body could be missing, in which case, that field of the List would remain unchanged):

```ts
type Request = {
  name: string;
  displayName: string;
  description: string | null;
  public: boolean;
  sort: "addedDsc" | "addedAsc" | "createdDsc" | "createdAsc";
};
```

## DELETE

Deletes the list and returns it.
