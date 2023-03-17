import React from "react";


export const Modal = ({ modalObj }) => {

    return (
        <div style={{ display: modalObj.modal, flexDirection: 'column', border: '1px solid black', borderRadius: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button style={{ border: 0 }} onClick={modalObj.closeModal}>x</button>
            </div>
            <p style={{ textAlign: 'center' }}>Modal element</p>
        </div>
    );
};