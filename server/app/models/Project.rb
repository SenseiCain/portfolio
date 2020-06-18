class Project < ActiveRecord::Base
    validates :title, presence: true, uniqueness: true
    validates :github, presence: true

    has_many :technologies
end