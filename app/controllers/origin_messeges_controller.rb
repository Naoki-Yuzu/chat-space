def create
    binding.pry
    @message = Message.new(set_message)
    if @message.save
      redirect_to group_messages_path(@group), notice: "メッセージが送信されました"
    else
      render :index, notice: "メッセージを入力してください"
    end
  end


  def set_message
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end