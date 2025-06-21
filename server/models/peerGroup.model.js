import mongoose from 'mongoose';

const peerGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  focus: {
    type: String,
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  meetingTime: String,
  maxMembers: {
    type: Number,
    default: 8
  }
}, {
  timestamps: true
});

export default mongoose.model('PeerGroup', peerGroupSchema);