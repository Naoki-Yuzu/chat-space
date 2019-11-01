FactoryBot.define do

  factory :message do
    content  {"chan"}
    image    {File.open("#{Rails.root}/public/uploads/message/image/16/test_image.jpg")}
    group
    user
  end

end