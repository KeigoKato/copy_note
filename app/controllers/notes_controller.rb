class NotesController < ApplicationController

  def index
    @articles = Note.all
    # binding.pry
  end

end
