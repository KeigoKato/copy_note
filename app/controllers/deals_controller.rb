class DealsController < ApplicationController

  before_action :purchase_note, only: :create

  def create
    @purchase = current_user.deals_of_author.create(author_id: purchase_note.user, subscriber_id: current_user.id, note_id: params[:note_id])
    @notes = Note.order("created_at DESC")
  end

  private
  def purchase_note
    @note = Note.find(params[:note_id])
  end

end
