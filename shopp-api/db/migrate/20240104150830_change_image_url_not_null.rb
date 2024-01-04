class ChangeImageUrlNotNull < ActiveRecord::Migration[7.1]
  def change
    change_column_null :items, :image_url, false
  end
end
