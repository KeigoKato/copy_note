class ReviewsController < ApplicationController
  def create
    review = Review.new(create_review)
    if review.save
      respond_to do |format|
        # format.html
        format.json
      end
    end
  end

  private
  def create_review
    params.require(:review).permit(:review).merge(user_id: current_user.id, note_id: params[:note_id])
  end
end
