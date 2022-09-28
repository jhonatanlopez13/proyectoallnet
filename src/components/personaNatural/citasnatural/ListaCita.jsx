import React,{useState} from 'react';
import './style.css';
import {MDBInput, MDBTable,MDBTableHead ,MDBTableBody,MDBBtn,MDBIcon ,MDBModal,MDBModalDialog, MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,  MDBModalFooter,} from 'mdb-react-ui-kit';
import Editar from '../editar/editar'





const Cita = ({cita, eliminarCita,editarCita}) =>{
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  
  return ( 
    <div>
        <MDBTable responsive>
        <MDBTableHead>
              <tr>
                <th scope='col'>accionista de:</th>
                <th scope='col'>participacion</th>
                <th scope='col'>identificacion</th>
                <th scope='col'>fecha de ingreso</th>
                <th scope='col'>Nombres</th>
                <th scope='col'>email</th>
                <th scope='col'>eliminar</th>
                <th scope='col'>editar</th>
              </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              {cita.accionitade}
            </td>
            <td>{cita.porcentajeparticipacion}</td>
            <td>{cita.identificacion}</td>
            <td>{cita.fechanacimineto}</td>
            <td>{cita.primerApellido}{cita.segundoApellido}{cita.primernombre}{cita.segundonombre}</td>
            <td>{cita.email}</td>
            
            <td>  
          
              <MDBBtn  outline color='danger' onClick={()=>eliminarCita(cita.id)}> <i class="fas fa-snowplow"> Eliminar</i>  </MDBBtn> 
            </td>
            <td>  
          
              <MDBBtn  outline  onClick={()=>{const funcion1= editarCita(cita);const funcion2=toggleShow() }}><MDBIcon icon="pencil-alt" />Editar</MDBBtn> 
            </td>
          </tr>

          {/* editar */}
        </MDBTableBody>
      </MDBTable>

{/* MODAL */}
<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                 <form
                       
                    >
                        <div className="class">
                            <label>tipo de documento </label>
                            <MDBInput 
                                type="text"
                                name="tipodoc"
                                className="u-full-width"
                                placeholder="tipo de documento"
                                value={cita.tipodoc}
                            />
                        </div>
                        <div className="class">
                            <label>identificacion</label>
                            <MDBInput 
                                type="text"
                                name="identificacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.identificacion}
                            />
                        </div>
                        <div className="class">
                            <label>Pais Expedicion identificacion </label>
                            <MDBInput 
                                type="text"
                                name="paisExpedicion"
                                className="u-full-width"
                                placeholder="Pais Expedicion identificacion"
                                value={cita.paisExpedicion}
                            />
                        </div>
                        <div className="class">
                            <label>primer apellido </label>
                            <MDBInput 
                                type="text"
                                name="primerApellido"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.primerApellido}
                            />
                        </div>
                        <div className="class">
                            <label>segundo apellido</label>
                            <MDBInput 
                                type="text"
                                name="segundoApellido"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.segundoApellido}
                            />
                        </div>
                        <div className="class">
                            <label>Primer nombre</label>
                            <MDBInput 
                                type="text"
                                name="primernombre"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.primernombre}
                            />
                        </div>
                        <div className="class">
                            <label>segundo nombre</label>
                            <MDBInput 
                                type="text"
                                name="segundonombre"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.segundonombre}
                            />
                        </div>
                        <div className="class">
                            <label>fecha de nacimiento</label>
                            <MDBInput 
                                type="date"
                                name="fechanacimineto"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.fechanacimineto}
                            />
                        </div>
                        <div className="class">
                            <label>pais de nacimineto </label>
                            <MDBInput 
                                type="text"
                                name="paisnacimiento"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.paisnacimiento}
                            />
                        </div>
                        <div className="class">
                            <label>nacionalidad</label>
                            <MDBInput 
                                type="text"
                                name="nacionalidad"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.nacionalidad}
                            />
                        </div>
                        <div className="class">
                            <label>Pais de recidencía</label>
                            <MDBInput 
                                type="text"
                                name="paisrecidencia"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.paisrecidencia}
                            />
                        </div>
                        <div className="class">
                            <label>departamento de notificacion</label>
                            <MDBInput 
                                type="text"
                                name="departamentonotificacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.departamentonotificacion}
                            />
                        </div>
                        <div className="class">
                            <label>municipio de notificacion</label>
                            <MDBInput 
                                type="text"
                                name="municipionotificacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.municipionotificacion}
                            />
                        </div>
                        <div className="class">
                            <label>Direccion de notificacion</label>
                            <MDBInput 
                                type="text"
                                name="direccionnotififacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.direccionnotififacion}
                            />
                        </div>
                        <div className="class">
                            <label>codigo postal:</label>
                            <MDBInput 
                                type="text"
                                name="codigopostal"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.codigopostal}
                            />
                        </div> <div className="class">
                            <label>email:</label>
                            <MDBInput 
                                type="text"
                                name="email"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.email}
                            />
                        </div>
                        <div className="class">
                            <label>accionita de:</label>
                            <MDBInput 
                                type="text"
                                name="accionitade"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.accionitade}
                            />
                        </div>
                       <div className="class">
                            <label>% participacion:</label>
                            <MDBInput 
                                type="text"
                                name="porcentajeparticipacion"
                                className="u-full-width"
                                placeholder="Nombre tipodoc"
                                value={cita.porcentajeparticipacion}
                            />
                        </div>
                    </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn type='submit'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

 
export default Cita;