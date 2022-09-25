import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter,} from 'mdb-react-ui-kit';

const Formulario = ({crearjuridica, }) => {
    //modal
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
  
    // Crear State de juridicas
    const [juridica, actualizarjuridica] = useState({
        tipodoc: '',
        documento: '',
        razonsocial: '',
        representanteLegal: '',
        documentorepresentantelegal: '',
        correo:'',
        beneficiario:''
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarjuridica({
            ...juridica,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { tipodoc, documento, razonsocial, representanteLegal, documentorepresentantelegal ,correo,beneficiario} = juridica;

    // Cuando el usuario presiona agregar juridica
    const submitjuridica = e => {
        e.preventDefault();

        // Validar
        if(tipodoc.trim() === '' || documento.trim() === ''  || razonsocial.trim() === ''  || representanteLegal.trim() === ''  || documentorepresentantelegal.trim() === ''  || correo.trim() === '' || beneficiario.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        juridica.id = uuid();

        // Crear la juridica
        crearjuridica(juridica);

        // Reiniciar el form
        actualizarjuridica({
            tipodoc: '',
            documento: '',
            razonsocial: '',
            representanteLegal: '',
            documentorepresentantelegal: ''
        })
    }

    return ( 
        <Fragment>
            <h2 > Personas Jurídicas</h2>

            <MDBBtn onClick={toggleShow}>Crear Persona Jurídicas</MDBBtn>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Crear Beneficiario Final</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    
                    { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }
                    <MDBModalBody>
                    <form
                        onSubmit={submitjuridica}
                    >
                        <label>tipo de documento</label>
                        <MDBInput 
                            type="text"
                            name="tipodoc"
                            className="u-full-width"
                            placeholder="Nombre tipodoc"
                            onChange={actualizarState}
                            value={tipodoc}
                        />

                        <label>documento</label>
                        <MDBInput 
                            type="text"
                            name="documento"
                            className="u-full-width"
                            placeholder="Nombre  Dueño de la tipodoc"
                            onChange={actualizarState}
                            value={documento}
                        />

                        <label>razon social</label>
                        <MDBInput 
                            type="text "
                            name="razonsocial"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={razonsocial}
                        />

                        <label>representante Legal</label>
                        <MDBInput 
                            type="text"
                            name="representanteLegal"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={representanteLegal}
                        />

                        <label>documento representante Legal</label>
                        <MDBInput 
                            type="text"
                            name="documentorepresentantelegal"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={documentorepresentantelegal}
                        />

                        <label>correo</label>
                        <MDBInput 
                            type="email"
                            name="correo"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={correo}
                        /> 
                        
                        <label>beneficiario</label>
                        <MDBInput 
                            type="text"
                            name="beneficiario"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={beneficiario}
                        />
                        <MDBModalFooter>

                        <button
                            type="submit"
                            className="u-full-width button-primary"
                        >
                            Agregar juridica
                        </button>
                    </MDBModalFooter>
                        
                    </form>
                    </MDBModalBody>

                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearjuridica: PropTypes.func.isRequired
}
 
export default Formulario;