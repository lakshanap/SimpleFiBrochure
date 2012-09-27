class PagesController < ApplicationController
  def home
  	# SEO title
  	@pageTitle = "Home"
  end

  def about
  	# SEO title
  	@pageTitle = "About Us"
  end

  def contact
  	# SEO title
  	@pageTitle = "Contact Us"
  end

  def employer
    # SEO title
    @pageTitle = "Employer"
  end
end
