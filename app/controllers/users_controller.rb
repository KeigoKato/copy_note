class UsersController < ApplicationController

  before_action :authenticate_user!, only: :show

  def show
    @user = User.find(params[:id])
    @notes = @user.notes.order("created_at DESC")
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    if current_user.id == user.id
      user.update(edit_user)
      redirect_to user_path(current_user)
      binding.pry
    end
  end

  private
  def edit_user
    params.require(:user).permit(:nickname, :profile)
  end

end
