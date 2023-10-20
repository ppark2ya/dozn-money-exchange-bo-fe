# `useHover`

React UI sensor hook that determine if the mouse element is in the hover element using Javascript Typescript instead CSS.

This way you can separate the logic from the UI.

## Usage

```jsx
// Usage
import { useRef } from 'react';
import { useHover } from '@chainexpressbill/hooks';

export default function Component() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div ref={hoverRef}>
      {`The current div is ${isHover ? `hovered` : `unhovered`}`}
    </div>
  );
}
```
