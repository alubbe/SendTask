class Task < ActiveRecord::Base
  attr_accessible :completed, :completedat, :createdat, :todo
end
