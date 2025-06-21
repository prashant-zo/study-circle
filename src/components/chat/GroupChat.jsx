import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import { format } from 'date-fns';
import { useSocket } from '../../hooks/useSocket';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/api';

export default function GroupChat({ group, onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const { user } = useAuth();
  const { socket, connected } = useSocket();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (socket && group._id) {
      socket.emit('joinGroup', group._id);

      socket.on('newMessage', (message) => {
        setMessages(prev => [...prev, message]);
        scrollToBottom();
      });

      // Fetch existing messages
      const fetchMessages = async () => {
        try {
          const response = await api.get(`/messages/${group._id}`);
          setMessages(response.data);
          scrollToBottom();
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };

      fetchMessages();

      return () => {
        socket.emit('leaveGroup', group._id);
        socket.off('newMessage');
      };
    }
  }, [socket, group._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await api.post(`/messages/${group._id}`, { content: newMessage });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-0 right-4 w-96 bg-white rounded-t-lg shadow-lg"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-semibold text-primary-800">{group.name} Chat</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={message._id || index}
            className={`mb-4 ${
              message.sender._id === user.id ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block max-w-xs px-4 py-2 rounded-lg ${
                message.sender._id === user.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm font-semibold">{message.sender.name}</p>
              <p>{message.content}</p>
              <p className="text-xs opacity-75">
                {format(new Date(message.createdAt), 'HH:mm')}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <button
            type="submit"
            disabled={!connected}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50"
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </motion.div>
  );
}