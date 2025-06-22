import { createContext } from 'react';
import type { ZonesContextType } from './ZonesContext.types';

export const ZonesContext = createContext<ZonesContextType | undefined>(undefined);

