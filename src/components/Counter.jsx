import { useState } from 'react';

// const Counter = (props) => {
//   const [count, setCount] = useState(props.startFrom);

//   const handleUpCount = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <p>You have clicked {count} times</p>
//       <button onClick={handleUpCount}>Click me</button>
//     </div>
//   );
// }

// export default Counter;

export default function Counter(props) {
  const [count, setCount] = useState(props.startFrom);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(props.startFrom)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
} 