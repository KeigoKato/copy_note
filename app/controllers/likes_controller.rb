class LikesController < ApplicationController
  def create
    @like = current_user.likes.create(note_id: params[:note_id])
    @notes = Note.order("created_at DESC").includes(:user)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def destroy
    like = current_user.likes.find_by(note_id: params[:note_id])
    like.destroy
    @notes = Note.order("created_at DESC").includes(:user)
    respond_to do |format|
      format.html
      format.js
    end
  end
end
