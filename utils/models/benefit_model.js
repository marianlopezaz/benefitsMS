import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var benefit = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active','disabled'],
    default: 'active',
    required: true
  },
  porcentual: {
    type: Number,
    required: true
  },
  discountAmount: {
    type: Number,
    required: true
  },
  remainingTime:{
      type: Date
  },
  limit:{
    type: Number,

  },
  code: {
    type: String,
  },
  cart_id:{
    type: String,
  }
});

mongoose.models = {};

var Benefit = mongoose.model('Benefit', benefit);

export default Benefit;
