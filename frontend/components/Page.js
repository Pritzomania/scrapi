/* eslint-disable react/prop-types */
import React from 'react';
import { FollowersProvider } from './FollowersContext';
import { useData } from '../hooks/data';

export default function Page({ children }) {
  const data = useData('http://localhost:4500/followers');

  return (
    <FollowersProvider value={{ followers: data }}>
      <p>Virat Kohli's followers</p>
      {children}
    </FollowersProvider>
  );
}
