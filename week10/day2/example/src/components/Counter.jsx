import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, Letter} from '../store/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
      <button onClick={()=> dispatch(Letter())}>Letter</button>
    </div>
  );
};

export default Counter;