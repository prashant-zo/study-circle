import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import CreateGroupModal from '../components/groups/CreateGroupModal';
import GroupList from '../components/groups/GroupList';
import GroupChat from '../components/chat/GroupChat';
import Toast from '../components/ui/Toast';
import { useAuth } from '../context/AuthContext';
import { usePeerGroups } from '../hooks/usePeerGroups';

export default function PeerGroups() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [activeChat, setActiveChat] = useState(null);
  const { user } = useAuth();
  const { groups, loading, error, createGroup, joinGroup, refreshGroups } = usePeerGroups();

  // Refresh groups when component mounts or user changes
  useEffect(() => {
    if (user) {
      refreshGroups();
    }
  }, [user, refreshGroups]);

  const handleCreateGroup = async (groupData) => {
    try {
      await createGroup(groupData);
      setToast({
        message: 'Group created successfully!',
        type: 'success'
      });
      setIsModalOpen(false);
      refreshGroups(); // Refresh the groups list
    } catch (error) {
      setToast({
        message: error.message || 'Failed to create group',
        type: 'error'
      });
    }
  };

  const handleJoinGroup = async (groupId) => {
    try {
      await joinGroup(groupId);
      setToast({
        message: 'Successfully joined the group!',
        type: 'success'
      });
      refreshGroups(); // Refresh the groups list to update membership status
    } catch (error) {
      setToast({
        message: error.message || 'Failed to join group',
        type: 'error'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <p className="text-xl text-primary-600">Loading peer groups...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

      <CreateGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateGroup}
      />

      <AnimatePresence>
        {activeChat && (
          <GroupChat
            group={activeChat}
            onClose={() => setActiveChat(null)}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-800">Peer Groups</h1>
          {user && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <FaPlus className="mr-2" /> Create Group
            </button>
          )}
        </div>
        
        <GroupList
          groups={groups}
          onJoin={handleJoinGroup}
          onOpenChat={setActiveChat}
        />
      </div>
    </motion.div>
  );
}