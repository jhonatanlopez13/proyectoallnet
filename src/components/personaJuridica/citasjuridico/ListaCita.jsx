import React,{useState } from 'react';
import './style.css';
import {MDBInput, MDBTable,MDBTableHead ,MDBTableBody,MDBBtn,MDBIcon ,MDBModal,MDBModalDialog, MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,  MDBModalFooter,} from 'mdb-react-ui-kit';


const Cita = ({juridico, eliminarjuridica,editarJuridico}) => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  return( 
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
          <td>  
              <MDBBtn  outline  onClick={()=>{const funcion1= editarJuridico(juridico);const funcion2=toggleShow() }}><MDBIcon icon="pencil-alt" />Editar</MDBBtn> 
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form>
                        <label>tipo de documento</label>
                        <MDBInput 
                            type="text"
                            name="tipodoc"
                            className="u-full-width"
                            placeholder="Nombre tipodoc"
                            value={juridico.tipodoc}
                        />

                        <label>documento</label>
                        <MDBInput 
                            type="text"
                            name="documento"
                            className="u-full-width"
                            placeholder="Nombre  Dueño de la tipodoc"
                            value={juridico.documento}
                        />

                        <label>razon social</label>
                        <MDBInput 
                            type="text "
                            name="razonsocial"
                            className="u-full-width"
                            value={juridico.razonsocial}
                        />

                        <label>representante Legal</label>
                        <MDBInput 
                            type="text"
                            name="representanteLegal"
                            className="u-full-width"
                            value={juridico.representanteLegal}
                        />

                        <label>documento representante Legal</label>
                        <MDBInput 
                            type="text"
                            name="documentorepresentantelegal"
                            className="u-full-width"
                            value={juridico.documentorepresentantelegal}
                        />

                        <label>correo</label>
                        <MDBInput 
                            type="email"
                            name="correo"
                            className="u-full-width"
                            value={juridico.correo}
                        /> 
                        
                        <label>beneficiario</label>
                        <MDBInput 
                            type="text"
                            name="beneficiario"
                            className="u-full-width"
                            value={juridico.beneficiario}
                        />
                        <MDBModalFooter>

                        <MDBBtn
                            type="submit"
                            className="u-full-width button-primary"
                        >
                            Agregar juridica
                        </MDBBtn>
                    </MDBModalFooter>
                        
                    </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal> 
          </td>
        </tr>
        
      </MDBTableBody>
    

    </MDBTable>
    
  );
}


 
export default Cita;