import React from 'react';
import "./Modal.scss";

export default function Modal({ modal, setModal, imgUrl }) {

  return (
    <>
    {modal && (
        <aside className="modal">
            <div className="overlay" onClick={() => setModal(!modal)}></div>
            <div className="modal-content">
                <img src={imgUrl} alt="" />
                <button className="close" onClick={() => setModal(!modal)}>CLOSE</button>
            </div>
        </aside>
    )}
    </>
  )
}
