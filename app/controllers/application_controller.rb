class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :is_signed_in?

  def sign_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def sign_out
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def is_signed_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(:session_token, session[:session_token])
  end

end
