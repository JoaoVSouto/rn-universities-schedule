import * as React from 'react';

type ReturnState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): ReturnState<T> {
  const [state, setState] = React.useState<T>(() => {
    const persistedState =
      typeof window !== 'undefined' ? localStorage.getItem(key) : null;

    return persistedState ? JSON.parse(persistedState) : initialState;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
