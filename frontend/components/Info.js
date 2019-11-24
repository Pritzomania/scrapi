import React, { useContext } from 'react';
import { formatDistance } from 'date-fns';
import { FollowersContext } from './FollowersContext';

export default function Info() {
  const { followers } = useContext(FollowersContext);
  console.log(followers);
  return (
    <div>
      {followers.length &&
        followers.map(({ count, time }) => (
          <div key={count} className="item">
            <span>{count}</span>
            👉
            <span>{formatDistance(time, new Date(), { addSuffix: true })}</span>
          </div>
        ))}
    </div>
  );
}
