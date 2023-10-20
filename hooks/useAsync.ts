import { useEffect, type DependencyList } from 'react';

import { type FunctionReturningPromise } from './misc/types';
import useAsyncFn from './useAsyncFn';

export default function useAsync<T extends FunctionReturningPromise>(
  fn: T,
  deps: DependencyList = [],
) {
  const [state, callback] = useAsyncFn(fn, deps, {
    loading: true,
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    callback();
  }, [callback]);

  return state;
}
