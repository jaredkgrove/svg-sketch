class AddUserIdToSketches < ActiveRecord::Migration[6.0]
  def change
    add_column :sketches, :user_id, :integer
  end
end
