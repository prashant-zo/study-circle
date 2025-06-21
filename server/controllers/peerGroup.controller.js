import PeerGroup from '../models/peerGroup.model.js';
import { NotFoundError, BadRequestError } from '../utils/errors.js';

export const getAllPeerGroups = async (req, res, next) => {
  try {
    const peerGroups = await PeerGroup.find()
      .populate('leader', 'name email')
      .populate('members', 'name email');
    res.json(peerGroups);
  } catch (error) {
    next(error);
  }
};

export const createPeerGroup = async (req, res, next) => {
  try {
    const peerGroup = await PeerGroup.create({
      ...req.body,
      leader: req.user.id,
      members: [req.user.id]
    });
    res.status(201).json(peerGroup);
  } catch (error) {
    next(error);
  }
};

export const getPeerGroupById = async (req, res, next) => {
  try {
    const peerGroup = await PeerGroup.findById(req.params.id)
      .populate('leader', 'name email')
      .populate('members', 'name email');
    
    if (!peerGroup) {
      throw new NotFoundError('Peer group not found');
    }
    
    res.json(peerGroup);
  } catch (error) {
    next(error);
  }
};

export const joinPeerGroup = async (req, res, next) => {
  try {
    const peerGroup = await PeerGroup.findById(req.params.id);
    
    if (!peerGroup) {
      throw new NotFoundError('Peer group not found');
    }
    
    if (peerGroup.members.includes(req.user.id)) {
      throw new BadRequestError('Already a member of this group');
    }
    
    if (peerGroup.members.length >= peerGroup.maxMembers) {
      throw new BadRequestError('Group is full');
    }
    
    peerGroup.members.push(req.user.id);
    await peerGroup.save();
    
    res.json(peerGroup);
  } catch (error) {
    next(error);
  }
};

export const leavePeerGroup = async (req, res, next) => {
  try {
    const peerGroup = await PeerGroup.findById(req.params.id);
    
    if (!peerGroup) {
      throw new NotFoundError('Peer group not found');
    }
    
    if (!peerGroup.members.includes(req.user.id)) {
      throw new BadRequestError('Not a member of this group');
    }
    
    if (peerGroup.leader.toString() === req.user.id) {
      throw new BadRequestError('Group leader cannot leave. Transfer leadership first.');
    }
    
    peerGroup.members = peerGroup.members.filter(
      member => member.toString() !== req.user.id
    );
    await peerGroup.save();
    
    res.json({ message: 'Left peer group successfully' });
  } catch (error) {
    next(error);
  }
};