import { useEffect, type RefObject } from 'react';

export interface IUseIntersectionObserverProps
  extends IntersectionObserverInit {
  target: RefObject<HTMLElement>;
  enabled?: boolean;
  onIntersect: any;
  offIntersect?: any;
}

function useIntersectionObserver({
  root,
  rootMargin = '0px',
  threshold = 1.0,
  target,
  enabled = false,
  onIntersect,
  offIntersect,
}: IUseIntersectionObserverProps) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const options = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect();
          // 겹치는 영역이 없을 때 실행
          else {
            if (offIntersect) offIntersect();
          }
        }),
      options,
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
}

export default useIntersectionObserver;
