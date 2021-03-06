class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :favorites

  validates :content, presence: true, length: { minimum: 1, maximum: 1000 }
  validates :image, presence: true

  def avg_score
    total = 0
    self.comments.select(&:id).each do |comment|
      total += comment.score
    end
    self.comments.select(&:id).length == 0 ? 0 : total / self.comments.select(&:id).length
  end
end
