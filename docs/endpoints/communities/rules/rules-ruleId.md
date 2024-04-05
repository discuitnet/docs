# communities/{communityId}/rules/\{ruleId}

## DELETE

Deletes a community rule and returns it.

## PUT

Updates a community rule.

Requests may have the following JSON body:

```ts
type Request = {
  rule: string | null;
  description: string | null;
  zIndex: number | null;
};
```

Returns a [CommunityRule](/types#communityrule) object.
