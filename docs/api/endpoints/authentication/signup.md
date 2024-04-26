# /\_signup

## POST

Requests must have the following JSON body:

```ts
type Request = {
  username: string;
  email: string;
  password: string;

  // reCAPTCHA v2 token
  captchaToken: string;
};
```

If everything goes well the JSON object of the newly created account is returned.

```ts
type Response = User | APIError;
```

Upon successful signup, the user is logged in automatically in the current session, so there's no need to call [`/api/_login`](/api/endpoints/authentication/login) again.

### Possible errors

| HTTP status code | [APIError](/api/errors/) code |
| ---------------- | ------------------------- |
| 409              | `user_exists`             |
| 409              | `email_exists`            |
| 400              | `invalid_username`        |
| 400              | `already_logged_in`       |
