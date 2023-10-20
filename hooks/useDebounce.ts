import { useEffect, type DependencyList } from 'react';

import useTimeoutFn from './useTimeoutFn';

export type UseDebounceReturn = [() => boolean | null, () => void];

export default function useDebounce(
  fn: Function,
  ms = 0,
  deps: DependencyList = [],
): UseDebounceReturn {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms);

  useEffect(reset, deps);

  return [isReady, cancel];
}
