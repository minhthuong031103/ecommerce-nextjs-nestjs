'use client';

import { store } from './store/store'; //store là thằng đã configure
import { Provider } from 'react-redux';

export function ReactProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
