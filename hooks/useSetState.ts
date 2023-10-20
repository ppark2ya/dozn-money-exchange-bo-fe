import { useCallback, useState } from 'react';

/**
 * React state hook that creates setState method which works similar to how this.setState works in class components—it merges object changes into current state.
 * @param {object} initialState
 * @returns [state, setState]
 */
const useSetState = <T extends object>(
  initialState: T = {} as T,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const [state, set] = useState<T>(initialState);
  const setState = useCallback(
    (patch: Partial<T> | ((prevState: T) => Partial<T>)) => {
      set((prevState) =>
        Object.assign(
          {},
          prevState,
          patch instanceof Function ? patch(prevState) : patch,
        ),
      );
    },
    [],
  );

  return [state, setState];
};

export default useSetState;
