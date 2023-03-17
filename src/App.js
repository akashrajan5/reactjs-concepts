import React from 'react';
import './App.css';
import ContextClass from './components/ClassContext/ContextClass';
import CounterClass from './components/CounterClass';
import { Memo } from './components/MemoHook';
// import { Callback } from './components/CallbackHook';


function App() {
  return (
    <>
      <ContextClass />
      {/* <CounterClass /> */}
      {/* <Memo /> */}
    </>
  );
}

export default React.memo(App);
