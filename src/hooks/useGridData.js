import { useState, useEffect } from 'react';
import { generateMockData } from '../lib/mockData';

export const useGridData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Network Request
    const timer = setTimeout(() => {
      const mock = generateMockData(2000); // Generate 2000 rows
      setData(mock);
      setLoading(false);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
};