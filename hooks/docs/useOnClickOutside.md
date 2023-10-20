# `useOnClickOutside`

React hook for listening for clicks outside of a specified element (see useRef).

This can be useful for closing a modal, a dropdown menu etc.

## Usage

```jsx
import { useRef } from 'react';
import { useOnClickOutside } from '@chainexpressbill/hooks';

export default function Component() {
  const ref = useRef(null);

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside');
  };

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside');
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <button
      ref={ref}
      onClick={handleClickInside}
      style={{ width: 200, height: 200, background: 'cyan' }}
    />
  );
}
```
