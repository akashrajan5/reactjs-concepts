import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import { ErrorBoundaries } from './components/ErrorBoundaryComponent';
// import { Memo } from './components/MemoHook';
// import { Callback } from './components/CallbackHook';


function App() {
  return (
    <>
      <ErrorBoundaries>
        <CounterClass />
      </ErrorBoundaries>
    </>
  );
}

export default React.memo(App);
