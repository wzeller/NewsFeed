class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  def reset_session_token!
    self.session_token = SecureRandom.hex
  end

  def password=(plaintext)
    @password = plaintext
    self.password_digest = BCrypt::Password.create(@password) if @password
  end

  def is_password?(plaintext)
    BCrypt::Password.new(self.password_digest).is_password?(plaintext)
  end

  private

  def ensure_session_token
    self.session_token || self.reset_session_token!
  end

end
