# `useCopyToClipboard`

This React hook provides a copy method to save a string in the clipboard and the copied value (default: null).

If anything doesn't work, it prints a warning in the console and the value will be null.

## Usage

```jsx
import { useCopyToClipboard } from '@chainexpressbill/hooks';

// Usage
export default function Component() {
  const [value, copy] = useCopyToClipboard();
  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => copy('A')}>A</button>
        <button onClick={() => copy('B')}>B</button>
        <button onClick={() => copy('C')}>C</button>
      </div>
      <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
    </>
  );
}
```
