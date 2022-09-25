import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter,} from 'mdb-react-ui-kit';

const Formulario = ({crearCita,}) => {
    //modal
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
  
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        tipodoc: '',
        identificacion: '',
        paisExpedicion: '',
        primerApellido: '',
        segundoApellido: '',
        primernombre:'',
        segundonombre:'',
        fechanacimineto:'',
        paisnacimiento:'',
        nacionalidad:'',
        paisrecidencia:'',
        departamentonotificacion:'',
        municipionotificacion:'',
        direccionnotififacion:'',
        codigopostal:'',
        email:'',
        accionitade:'',
        porcentajeparticipacion:''
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { tipodoc, identificacion, paisExpedicion, primerApellido, segundoApellido,primernombre,segundonombre,fechanacimineto,paisnacimiento,nacionalidad,paisrecidencia,departamentonotificacion,municipionotificacion,direccionnotififacion,codigopostal,email,accionitade,porcentajeparticipacion } = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(tipodoc.trim() === '' || identificacion.trim() === ''  || paisExpedicion.trim() === ''  || primerApellido.trim() === ''  || segundoApellido.trim() === ''|| primernombre.trim() === ''|| segundonombre.trim() === ''|| fechanacimineto.trim() === ''|| paisnacimiento.trim() === ''|| nacionalidad.trim() === ''|| paisrecidencia.trim() === ''|| departamentonotificacion.trim() === ''|| segundoApellido.trim() === ''|| municipionotificacion.trim() === ''|| direccionnotififacion.trim() === ''|| accionitade.trim() === ''|| porcentajeparticipacion.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
            tipodoc: '',
            identificacion: '',
            paisExpedicion: '',
            primerApellido: '',
            segundoApellido: '',
            primernombre:'',
            segundonombre:'',
            fechanacimineto:'',
            paisnacimiento:'',
            nacionalidad:'',
            paisrecidencia:'',
            departamentonotificacion:'',
            municipionotificacion:'',
            direccionnotififacion:'',
            codigopostal:'',
            email:'',
            accionitade:'',
            porcentajeparticipacion:''
        })
    }

    return ( 
        <Fragment>
            <h2 > Personas Naturales</h2>

            <MDBBtn onClick={toggleShow}>Crear Beneficiario Final</MDBBtn>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>persona natural</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    
                    <MDBModalBody>
                    <form
                        onSubmit={submitCita}
                    >
                        <div className="class">
                            <label>tipo de documento </label>
                            <MDBInput 
                                type="text"
                                name="tipodoc"
                                className="u-full-width"
                                placeholder="tipo de documento"
                                onChange={actualizarState}
                                value={tipodoc}
                            />
                        </div>
                        <div className="class">
                            <label>identificacion</label>
                            <MDBInput 
                                type="text"
                                name="identificacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={identificacion}
                            />
                        </div>
                        <div className="class">
                            <label>Pais Expedicion identificacion </label>
                            <MDBInput 
                                type="text"
                                name="paisExpedicion"
                                className="u-full-width"
                                placeholder="Pais Expedicion identificacion"
                                onChange={actualizarState}
                                value={paisExpedicion}
                            />
                        </div>
                        <div className="class">
                            <label>primer apellido </label>
                            <MDBInput 
                                type="text"
                                name="primerApellido"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={primerApellido}
                            />
                        </div>
                        <div className="class">
                            <label>segundo apellido</label>
                            <MDBInput 
                                type="text"
                                name="segundoApellido"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={segundoApellido}
                            />
                        </div>
                        <div className="class">
                            <label>Primer nombre</label>
                            <MDBInput 
                                type="text"
                                name="primernombre"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={primernombre}
                            />
                        </div>
                        <div className="class">
                            <label>segundo nombre</label>
                            <MDBInput 
                                type="text"
                                name="segundonombre"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={segundonombre}
                            />
                        </div>
                        <div className="class">
                            <label>fecha de nacimiento</label>
                            <MDBInput 
                                type="date"
                                name="fechanacimineto"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={fechanacimineto}
                            />
                        </div>
                        <div className="class">
                            <label>pais de nacimineto </label>
                            <MDBInput 
                                type="text"
                                name="paisnacimiento"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={paisnacimiento}
                            />
                        </div>
                        <div className="class">
                            <label>nacionalidad</label>
                            <MDBInput 
                                type="text"
                                name="nacionalidad"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={nacionalidad}
                            />
                        </div>
                        <div className="class">
                            <label>Pais de recidencía</label>
                            <MDBInput 
                                type="text"
                                name="paisrecidencia"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={paisrecidencia}
                            />
                        </div>
                        <div className="class">
                            <label>departamento de notificacion</label>
                            <MDBInput 
                                type="text"
                                name="departamentonotificacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={departamentonotificacion}
                            />
                        </div>
                        <div className="class">
                            <label>municipio de notificacion</label>
                            <MDBInput 
                                type="text"
                                name="municipionotificacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={municipionotificacion}
                            />
                        </div>
                        <div className="class">
                            <label>Direccion de notificacion</label>
                            <MDBInput 
                                type="text"
                                name="direccionnotififacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={direccionnotififacion}
                            />
                        </div>
                        <div className="class">
                            <label>codigo postal:</label>
                            <MDBInput 
                                type="text"
                                name="codigopostal"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={codigopostal}
                            />
                        </div> <div className="class">
                            <label>email:</label>
                            <MDBInput 
                                type="text"
                                name="email"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={email}
                            />
                        </div>
                        <div className="class">
                            <label>accionita de:</label>
                            <MDBInput 
                                type="text"
                                name="accionitade"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={accionitade}
                            />
                        </div>
                       <div className="class">
                            <label>% participacion:</label>
                            <MDBInput 
                                type="text"
                                name="porcentajeparticipacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                onChange={actualizarState}
                                value={porcentajeparticipacion}
                            />
                        </div>
                    <MDBModalFooter>
                        <button
                            type="submit"
                            className="u-full-width button-primary"
                        >
                            Agregar Cita
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
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;