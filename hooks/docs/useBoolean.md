# `useBoolean`

A simple abstraction to play with a boolean, don't repeat yourself.

Related hooks:

- useToggle()

## Usage

```jsx
import { useBoolean } from '@chainexpressbill/hooks';

// Usage
export default function Component() {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  // Just an example to use "setValue"
  const customToggle = () => setValue((x: boolean) => !x);

  return (
    <>
      <p>
        Value is <code>{value.toString()}</code>
      </p>
      <button onClick={setTrue}>set true</button>
      <button onClick={setFalse}>set false</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={customToggle}>custom toggle</button>
    </>
  );
}
```
