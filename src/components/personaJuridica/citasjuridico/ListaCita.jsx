import React from 'react';
import './style.css';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn} from 'mdb-react-ui-kit';



const Cita = ({juridico, eliminarjuridica}) => ( 
  <MDBTable responsive>
    <MDBTableBody>
      <tr>
      <td>{juridico.beneficiario}</td>
        <td>{juridico.tipodoc}</td>
        <td>{juridico.documento}</td>
        <td>{juridico.razonsocial}</td>
        <td>{juridico.representanteLegal}</td>

        <td>  
      
          <MDBBtn  outline color='danger'  onClick={()=>eliminarjuridica(juridico.id)}> eliminar  &times;</MDBBtn> 
        </td>
      </tr>
      
    </MDBTableBody>
  </MDBTable>
);

 
export default Cita;