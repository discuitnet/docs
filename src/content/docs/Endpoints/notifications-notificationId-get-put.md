---
title: "notifications/{notificationID} [GET, PUT]"
---

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
