import { motion } from 'framer-motion';
import GroupCard from './GroupCard';

export default function GroupList({ groups, onJoin, onOpenChat }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map((group) => (
        <GroupCard
          key={group._id}
          group={group}
          onJoin={onJoin}
          onOpenChat={onOpenChat}
        />
      ))}
    </div>
  );
}