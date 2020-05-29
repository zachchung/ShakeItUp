class Cocktail < ApplicationRecord
  has_one_attached :photo # create object.photo method

  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  # has_and_belongs_to_many :ingredients

  validates :name, presence: true, uniqueness: true
end
