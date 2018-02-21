class NotesController < ApplicationController

  def index
    @notes = Note.all
    # binding.pry
  end

  def new
  end

end
