import React, { useState } from 'react';
import './App.css';
import ContextClass from './components/ClassContext/ContextClass';
import CounterClass from './components/CounterClass';
import { Memo } from './components/MemoHook';
import { ReducerHook } from './components/ReducerHook';
import PortalModal from './portals/Portal-Modal';
// import { Callback } from './components/CallbackHook';


function App() {

  const [modal, setModal] = useState('none');

  const openModal = () => setModal('flex');
  const closeModal = () => setModal('none');

  let modalData = { modal, openModal, closeModal };

  return (
    <>
      <ReducerHook />
      {/* <ContextClass /> */}
      {/* <CounterClass /> */}
      {/* <Memo /> */}
      <button style={{ marginTop: 15 }} onClick={openModal}>open modal</button>
      <PortalModal modalObj={modalData} />
    </>
  );
}

export default React.memo(App);
