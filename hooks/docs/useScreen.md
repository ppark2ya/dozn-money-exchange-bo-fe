# `useScreen`

Easily retrieve window.screen object with this Hook React which also works onResize.

## Usage

```jsx
import { useScreen } from '@chainexpressbill/hooks';

export default function Component() {
  const screen = useScreen();

  return (
    <div>
      The current window dimensions are:{' '}
      <code>
        {JSON.stringify({ width: screen?.width, height: screen?.height })}
      </code>
    </div>
  );
}
```
