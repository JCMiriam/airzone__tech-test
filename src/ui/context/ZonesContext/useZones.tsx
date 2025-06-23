import { useContext } from 'react';
import { ZonesContext } from './ZonesContext';

export const useZones = () => {
  const context = useContext(ZonesContext);
  if (!context) throw new Error('useZones must be used within ZonesProvider');
  return context;
};
