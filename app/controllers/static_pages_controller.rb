class StaticPagesController < ApplicationController
  def home
    @static_pages = StaticPage.all
  end
end