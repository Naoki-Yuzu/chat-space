json.(@message, :content, :image)
json.created_at @message.created_at.strftime("%Y/%m/%d(#{%w(Sun Mon Tue Wed Thu Fri Sat)[@message.created_at.wday]}) %H:%M:%S")
json.user_name @message.user.name
json.id @message.id