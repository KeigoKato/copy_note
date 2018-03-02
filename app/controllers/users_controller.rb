class UsersController < ApplicationController

  before_action :authenticate_user!, only: :show

  def show
    @user = User.find(params[:id])
    @notes = User.find(params[:id]).notes.order("created_at DESC")
  end

end
