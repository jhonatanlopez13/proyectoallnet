import React from 'react';
import './style.css';
import { MDBTable, MDBTableBody,MDBBtn,MDBIcon} from 'mdb-react-ui-kit';


const Cita = ({cita, eliminarCita,editarCita}) => ( 
   <div>
      <MDBTable responsive>
      
      <MDBTableBody>
        <tr>
        <td>{cita.accionitade}</td>
          <td>{cita.porcentajeparticipacion}</td>
          <td>{cita.identificacion}</td>
          <td>{cita.primerApellido}{cita.segundoApellido}{cita.primernombre}{cita.segundonombre}</td>
          <td>{cita.email}</td>
          
          <td>  
        
            <MDBBtn  outline color='danger' onClick={()=>eliminarCita(cita.id)}> <i class="fas fa-snowplow"> Eliminar</i>  </MDBBtn> 
          </td>
          <td>  
        
            <MDBBtn  outline color='danger' onClick={()=>editarCita(cita.id)}><MDBIcon fas icon="pencil-alt" />EDITAR</MDBBtn> 
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

   </div>
);

 
export default Cita;