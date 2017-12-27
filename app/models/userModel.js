var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  userNumber: Number,
  firstName: String,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  userImage: String,
  location: String,
  meta: {
    mobile: Number,
    email: String,
    age: Number,
    website: String
  },
  created_at: Date, 
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
