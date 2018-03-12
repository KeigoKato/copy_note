class ReviewsController < ApplicationController
  def create
    review = Review.new(create_review)
    review.save
    redirect_to "/notes/params[:note_id]"
  end

  private
  def create_review
    params.require(:review).params(:review).merge(user_id: current_user.id, note_id: params[:note_id])
end
