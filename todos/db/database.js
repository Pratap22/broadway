const supabase = require('@supabase/supabase-js')


const database = supabase.createClient('https://ipqlamvymplvmutisgmm.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcWxhbXZ5bXBsdm11dGlzZ21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MTk5MjIsImV4cCI6MjA1MjA5NTkyMn0.z5oOl13e-aUbp2RIL5mXFPvvhoG2lxOm34XaVDJCbY8")

module.exports = database

