# /\_login

## POST

Requests must have the following JSON body:

```ts
type Request = {
  username: string;
  password: string;
};
```

If the username and password matches, the [User](/types#user) object is returned. Otherwise, a 401 (unauthorized) error is returned.

If the user account is suspended, a 403 (forbidden) status is returned with an [APIError](/errors/) code `"account_suspended"`.

```ts
type Response = User | APIError;
```

If the user is authenticated and the request URL has the query parameter `action=logout`, user is logged out from the session. No request body is required for logout. In other words, to logout a user, send a POST request to `/api/_login?action=logout`.
