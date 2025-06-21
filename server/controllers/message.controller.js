import Message from '../models/message.model.js';
import PeerGroup from '../models/peerGroup.model.js';
import { NotFoundError, UnauthorizedError } from '../utils/errors.js';

export const getGroupMessages = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    
    const group = await PeerGroup.findById(groupId);
    if (!group) {
      throw new NotFoundError('Group not found');
    }
    
    if (!group.members.includes(req.user.id)) {
      throw new UnauthorizedError('Not a member of this group');
    }
    
    const messages = await Message.find({ group: groupId })
      .populate('sender', 'name')
      .sort({ createdAt: 1 });
      
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

export const sendMessage = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const { content } = req.body;
    
    const group = await PeerGroup.findById(groupId);
    if (!group) {
      throw new NotFoundError('Group not found');
    }
    
    if (!group.members.includes(req.user.id)) {
      throw new UnauthorizedError('Not a member of this group');
    }
    
    const message = await Message.create({
      group: groupId,
      sender: req.user.id,
      content
    });
    
    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'name');
      
    // Emit the message to all group members via Socket.IO
    req.io.to(groupId).emit('newMessage', populatedMessage);
    
    res.status(201).json(populatedMessage);
  } catch (error) {
    next(error);
  }
};