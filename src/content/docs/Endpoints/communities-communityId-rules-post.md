---
title: "communities/{communityId}/rules [POST]"
---

Creates a community rule.

Requests must have the following JSON body:

```ts
type Request = {
  rule: string;
  description: string;
};
```
