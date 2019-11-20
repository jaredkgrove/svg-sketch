# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_24_200605) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "circles", force: :cascade do |t|
    t.decimal "cx"
    t.decimal "cy"
    t.decimal "r"
    t.string "stroke"
    t.string "fill"
    t.string "stroke_width"
  end

  create_table "elements", force: :cascade do |t|
    t.integer "sketch_id"
    t.string "elementable_type"
    t.integer "elementable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["elementable_type", "elementable_id"], name: "index_elements_on_elementable_type_and_elementable_id"
  end

  create_table "lines", force: :cascade do |t|
    t.decimal "x1"
    t.decimal "y1"
    t.decimal "x2"
    t.decimal "y2"
    t.string "stroke"
    t.string "stroke_width"
  end

  create_table "polylines", force: :cascade do |t|
    t.string "points"
    t.string "stroke"
    t.string "stroke_width"
  end

  create_table "rectangles", force: :cascade do |t|
    t.decimal "x"
    t.decimal "y"
    t.decimal "rx"
    t.decimal "ry"
    t.decimal "width"
    t.decimal "height"
    t.string "stroke"
    t.string "fill"
    t.string "stroke_width"
  end

  create_table "sketches", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
