json.content @message.content
json.image @message.image.url
json.group_id @message.group_id
json.user_id @message.user_id
json.user_sign_in current_user
json.created_at @message.created_at
json.user_name @message.user.name