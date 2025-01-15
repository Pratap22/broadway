const supabase = require('@supabase/supabase-js')
require("dotenv").config()

const database = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

module.exports = database

