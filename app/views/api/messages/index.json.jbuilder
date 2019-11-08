json.array! @messages do |message|
  json.content message.content
  json.image message.image
  json.created_at message.created_at.strftime("%Y/%m/%d(#{%w(Sun Mon Tue Wed Thu Fri Sat)[message.created_at.wday]}) %H:%M:%S")
  json.user_name message.user.name
  json.id message.id
  json.group_id message.group_id
end