class CreateNamazs < ActiveRecord::Migration[6.1]
  def change
    create_table :namazs do |t|
      t.boolean :fajr
      t.boolean :dhuhr
      t.boolean :asr
      t.boolean :maghrib
      t.boolean :isha

      t.timestamps
    end
  end
end
