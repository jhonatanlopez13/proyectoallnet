import React, { useState,useEffect } from 'react';
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter,} from 'mdb-react-ui-kit';
import './style.css'

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      setBasicModal(true);
    }, 2000);
    // clear timer if the component unmount
    return () => clearTimeout(timer);
  }, []);

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn className='botonclick' onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <i className="rotating fas fa-info"></i>
              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>  
              
              <p>Si usted es persona natural beneficiaria o adherente, favor diligenciar el formulario.</p>
              <p>
                  Si usted es persona jurídica, favor indicar el documento y razón social, y a continuación diligenciar
                  la información de sus beneficiarios finales teniendo en cuenta lo establecido en el artículo 6 de la
                  resolución 000164 de 2021.
              </p>
              <p>
                  <strong>Al continuar acepta nuestra politica de tratamiento de datos</strong> para mas información
                  consultar <a href="https://www.accion.com.co/sites/default/files/Terminos-y-condiciones%20Accion-Fiduciaria.pdf"
                              target="_blank">aquí</a>
              </p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Aceptar
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}