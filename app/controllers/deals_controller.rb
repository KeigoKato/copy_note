class DealsController < ApplicationController

  # before_action :purchase_note, only: :create
  before_action :authenticate_user!, only: :create

  def create
    @purchase = current_user.deals_of_subscriber.create(author_id: purchase_note.user_id, note_id: params[:note_id].to_i)
    redirect_to root_path
  end

  private
  def purchase_note
    @note = Note.find(params[:note_id])
  end

end
