class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :detail, null: false
      t.integer :amount, null: false
      t.integer :count, null: false
      t.timestamps
    end
  end
end
