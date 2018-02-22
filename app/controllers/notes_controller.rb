class NotesController < ApplicationController

  def index
    @notes = Note.all
  end

  def new
    @post = Note.new
  end

  def create
    @post = Note.new(note_params)
    @post.save
    binding.pry
    redirect_to root_path
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :title_image).merge(user_id: current_user.id)
  end

end
