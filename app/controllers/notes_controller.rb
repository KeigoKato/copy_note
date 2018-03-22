class NotesController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create]
  before_action :set_note_tags_to_gon

  def index
    # @notes = Note.order("created_at DESC").includes(:user)
    @notes = params[:tag].present? ? Note.tagged_with(params[:tag]) : note.order("created_at DESC").includes(:user)
  end

  def new
    @post = Note.new
  end

  def create
    @post = Note.create(note_params)
    binding.pry
    redirect_to root_path
  end

  def show
    @note = Note.find(params[:id])
    @reviews = @note.reviews.order("created_at DESC")
    @review = Review.new
  end

  def destroy
    note = Note.find(params[:id])
    if current_user.id == note.user_id
      note.destroy
      redirect_to root_path
    end
  end

  def edit
    @post= Note.find(params[:id])
  end

  def update
    new_post = Note.find(params[:id])
    if new_post.user_id == current_user.id
      new_post.update(note_params)
      redirect_to "/notes/#{params[:id]}", method: :show
    end
  end


  private
  def note_params
    params.require(:note).permit(:title, :body, :title_image, :value, :tag_list).merge(user_id: current_user.id)
  end

  def set_note_tags_to_gon
    gon.available_tags = Note.tags_on(:tags).pluck(:name)
  end

end
