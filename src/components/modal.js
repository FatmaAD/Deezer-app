import React, { useEffect,useRef } from "react";
import { ModalWrapper, ModalBoxSetup, ModalBg } from "../themes/modal";
import PropTypes from "prop-types";

/*
visible: boolean,
dismiss: function on click on Close.
*/
const Modal = props => {
  const ref = useRef();
  useEffect(()=>{
   const sub =  window.document.addEventListener('click',({target})=>{
    if(ref.current&&!ref.current.contains(target)){props.dismiss()}
   });
    return ()=>{
      window.removeEventListener(sub);
    };
  },[]);
  const { visible, children } = props;
  return (
    <>
      {visible ? (
        <ModalWrapper>
          <ModalBg >
            <ModalBoxSetup ref={ref} className="row justify-content-center">{children} </ModalBoxSetup>
          </ModalBg>
        </ModalWrapper>
      ) : null}
    </>
  );
};
export default Modal;

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired
};
