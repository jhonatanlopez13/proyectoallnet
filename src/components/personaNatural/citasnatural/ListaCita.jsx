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
          
              <Editar  outline  onClick={()=>{const funcion1= editarCita(cita);const funcion2=toggleShow() }}><MDBIcon icon="pencil-alt" />Editar</Editar> 
            </td>
          </tr>

          {/* editar */}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

 
export default Cita;