class Article < ApplicationRecord
  validates :title, presence: true
  validates :image_url, format: {with: /\.(png|jpg|jpeg)\Z/i}
  validates :body, presence: true
end
