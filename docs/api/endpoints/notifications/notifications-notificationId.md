# /notifications/\{notificationId}

## DELETE

```ts
type Response = Notification;
```

## GET, PUT

```ts
// PUT
type Request = {
  action: "markAsSeen";
  seen: boolean;
  seenFrom: string;
};
```

```ts
type Response = Notification;
```
