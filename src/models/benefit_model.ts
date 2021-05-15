import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const benefit = new Schema({
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

const Benefit = mongoose.model('benefit', benefit);

export default Benefit;