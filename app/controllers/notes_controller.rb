class NotesController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create]

  def index
    @notes = Note.order("created_at DESC")
  end

  def new
    @post = Note.new
  end

  def create
    @post = Note.create(note_params)
    redirect_to root_path
  end

  def show
    @note = Note.find(params[:id])
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :title_image, :value).merge(user_id: current_user.id)
  end

end
