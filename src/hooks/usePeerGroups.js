import { useState, useEffect } from 'react';
import api from '../utils/api';
import { handleApiError } from '../utils/errorHandler';

export const usePeerGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGroups = async () => {
    try {
      const response = await api.get('/peer-groups');
      setGroups(response.data);
      setError(null);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setLoading(false);
    }
  };

  const createGroup = async (groupData) => {
    try {
      const response = await api.post('/peer-groups', groupData);
      setGroups(prevGroups => [...prevGroups, response.data]);
      return response.data;
    } catch (err) {
      throw new Error(handleApiError(err));
    }
  };

  const joinGroup = async (groupId) => {
    try {
      const response = await api.post(`/peer-groups/${groupId}/join`);
      setGroups(prevGroups =>
        prevGroups.map(group =>
          group._id === groupId ? response.data : group
        )
      );
      return response.data;
    } catch (err) {
      throw new Error(handleApiError(err));
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return {
    groups,
    loading,
    error,
    createGroup,
    joinGroup,
    refreshGroups: fetchGroups
  };
};