# `useIntersectionObserver`

This React Hook detects visibility of a component on the viewport using the IntersectionObserver API natively present in the browser.

It can be very useful to lazy-loading of images, implementing "infinite scrolling" or starting animations for example.

Your must pass the ref element (from useRef()).

It takes optionally root, rootMargin and threshold arguments from the native IntersectionObserver API and freezeOnceVisible to only catch the first appearance too.

It returns the full IntersectionObserver's entry object.

Source:

I discovered this way of using IntersectionObserver via this post medium while playing to build a lazy-loaded collection of images.

## Usage

```tsx
import { useRef } from 'react';
import { useIntersectionObserver } from '@chainexpressbill/hooks';

const Section = () => {
  const coldchainRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: ref,
    threshold: 0.1,
    enabled: true,
    onIntersect: () => console.log('onIntersect!'),
    offIntersect: () => console.log('offIntersect!'),
  });

  return (
    <main>
      <Coldchain ref={ref} />
    </main>
  );
};
```
