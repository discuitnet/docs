# 400 - Bad Request

- `already_logged_in` - You are already logged in

  The user is already logged in. You do not need to send another login request.

- `comment-max-depth-reached` - Cannot reply because match depth is reached.

  You are attempting to reply past the maximum comment depth.

- `comment-reply-to-deleted` - Cannot reply to a deleted comment.

  You are attempting to send a reply to a deleted comment.

- `bad_event` - Bad event.

  The event being sent is incorrect.

- `file_size_exceeded` - Max file size exceeded.

  The file being uploaded is bigger than the maximum file size accepted by the server.

- `invalid_action` - Unsupported action.

  The user action being sent is incorrect.

- `invalid-community-name` - Community name invalid.

  The community name being sent is incorrect. Check the [Community type](/types#community) to ensure you have the correct name.

- `invalid_cursor` - Invalid feed pagination cursor.

  The feed pagination cursor being sent is incorrect.

- `invalid_filter` - Invalid feed filter.

  The feed filter being sent is incorrect.

- `invalid_http_method` - Unsupported HTTP method.

  The HTTP method by which the request was sent is incorrect. Check the documentation for the [endpoint](/endpoints) to ensure that you have the correct HTTP method.

- `invalid_id` - Invalid ID.

  The ID being sent is incorrect.

- `invalid_image_id` - Invalid image ID.

  The image ID being sent is incorrect.

- `invalid_json` - Invalid JSON body.

  The JSON body being sent is incorrect. Check the documentation for the [endpoint](/endpoints) you're sending to, as well as the [type](/types) for the data you're sending.

- `invalid_mute_type` - Invalid mute type.

  The mute type being sent is incorrect. Check the [Mute type](/types#mute) to ensure that you have the correct type.

- `invalid_page` - Invalid page.

  The page request being sent is incorrect.

- `invalid-password` - Password empty / Password too short.

  The password being sent is empty/too short.

- `invalid_post_type` - Invalid post type.

  The post type being sent is incorrect. Check the [Post type](/types#post) to ensure that you have the correct type.

- `invalid-url` - Invalid URL.

  The URL request is incorrect.

- `invalid-set` - Invalid community set options.

  The community set option being sent is incorrect.

- `invalid-sort` - Invalid community/feed sort.

  The community/feed sort option being sent is incorrect.

- `post/title-too-short` - Title too short.

  The title of the post is too short. Check the [Post type](/types#post) to ensure that you have the correct title length.

- `post-type/unsupported` - Unsupported post type.

  The post type being sent is not supported. Check the [Post type](/types#post) to ensure that you have the correct type.

- `unsupported_action` - Unsupported (admin) action.

  The admin/user action being sent is not supported.

- `user/invalid-group` - Invalid user group.

  The user group being sent is incorrect. Check the [types](/types) to ensure that you have the correct user group for the data you're sending.
