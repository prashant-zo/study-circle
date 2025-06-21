import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaCalendar, FaComments } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

export default function GroupCard({ group, onJoin, onOpenChat }) {
  const { user } = useAuth();
  
  // Check if user is a member by comparing IDs
  const isMember = user && group.members.some(member => 
    typeof member === 'object' ? member._id === user.id : member === user.id
  );
  const isFull = group.members.length >= group.maxMembers;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold text-primary-800">{group.name}</h2>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-primary-600">
          <FaCode className="mr-2" />
          <span>{group.focus}</span>
        </div>
        
        <div className="flex items-center text-primary-600">
          <FaUsers className="mr-2" />
          <span>{group.members.length}/{group.maxMembers} members</span>
        </div>
        
        <div className="flex items-center text-primary-600">
          <FaCalendar className="mr-2" />
          <span>{group.meetingTime}</span>
        </div>
      </div>
      
      <div className="mt-4">
        {user && (
          isMember ? (
            <button
              onClick={() => onOpenChat(group)}
              className="flex items-center justify-center w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <FaComments className="mr-2" /> Open Chat
            </button>
          ) : (
            <button
              onClick={() => onJoin(group._id)}
              className={`w-full py-2 rounded-lg transition-colors ${
                isFull
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
              disabled={isFull}
            >
              {isFull ? 'Group Full' : 'Join Group'}
            </button>
          )
        )}
      </div>
    </motion.div>
  );
}