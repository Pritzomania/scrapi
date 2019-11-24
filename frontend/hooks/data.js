import { useState, useEffect } from 'react';

export const useData = url => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const followers = await fetch(url);
      const followersData = await followers.json();
      setData(followersData);
    })();
  }, []);
  return data;
};
