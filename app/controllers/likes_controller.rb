class LikesController < ApplicationController
  before_action :set_note, only: [:create, :destroy]

  def create
    @like = current_user.likes.create(note_id: params[:note_id])
    @notes = note.all
  end

  def destroy
    like = current_user.likes.find_by(note_id: params[:note_id])
    like.destroy
    @notes = note.all
  end

  private

  def set_note
    @note = note.find(params[:note_id])
  end

end
