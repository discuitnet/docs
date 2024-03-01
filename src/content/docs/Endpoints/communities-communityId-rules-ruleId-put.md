---
title: "communities/{communityId}/rules/{ruleId} [PUT]"
---

Updates a community rule.

Requests may have the following JSON body:

```ts
type Request = {
  rule: string | null;
  description: string | null;
  zIndex: number | null;
};
```

Returns a community rule object.
