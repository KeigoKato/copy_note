class ReviewsController < ApplicationController
  def create
    review = Review.create(create_review)
  end

  private
  def create_review
    params.require(:review).permit(:review).merge(user_id: current_user.id, note_id: params[:note_id])
  end
end