import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "../components/Modal";



export default function PortalModal({ modalObj }) {
    return ReactDOM.createPortal(<Modal modalObj={modalObj} />, document.getElementById('portal-modal'));
};