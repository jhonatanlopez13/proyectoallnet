import React, { Fragment, useState, useEffect } from 'react';
import FormularioJuridico from './components/personaJuridica/formulariojuridico/Formulario';
import Citajur from './components/personaJuridica/citasjuridico/ListaCita';
import Formulario from './components/personanatural/formularionatural/Formulario';
import Cita from './components/personanatural/citasnatural/ListaCita';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {MDBTable,MDBTableHead} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import Editar from  './components/personanatural/editar/editar'

function App() {

//personas juridicas
  // Citas en local storage
  let juridicasIniciales = JSON.parse(localStorage.getItem('juridicas'));
  if(!juridicasIniciales) {
    juridicasIniciales = [];
  }
  // Arreglo de juridica
  const [juridicas, guardarjuridicas] = useState(juridicasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
      let juridicasIniciales = JSON.parse(localStorage.getItem('juridicas'));

      if(juridicasIniciales) {
        localStorage.setItem('juridicas', JSON.stringify(juridicas))
      } else {
        localStorage.setItem('juridicas', JSON.stringify([]));
      }
  }, [juridicas] );

  // Función que tome las juridicas actuales y agregue la nueva
  const crearjuridica = juridico => {
    guardarjuridicas([ ...juridicas, juridico ]);
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new task!'
    })
  }

  // Función que elimina una cita por su id
  const eliminarjuridica = id => {
     const nuevasjuridicas = juridicas.filter(juridico => juridico.id !== id );
     guardarjuridicas(nuevasjuridicas);
     Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully deleted a task!'
  })
  }

  // Mensaje condicional
  const titulo = juridicas.length === 0 ? 'No hay juridicas' : ' ';

// persona natural
// ___________________________________________________________
   // Citas en local storage
   let citasIniciales = JSON.parse(localStorage.getItem('citas'));
   if(!citasIniciales) {
     citasIniciales = [];
   }
 
   // Arreglo de citas
   const [citas, guardarCitas] = useState(citasIniciales);
   const [editarcita, guardarCitaeditar] =useState(citasIniciales)

   // Use Effect para realizar ciertas operaciones cuando el state cambia
   useEffect( () => {
       let citasIniciales = JSON.parse(localStorage.getItem('citas'));
 
       if(citasIniciales) {
         localStorage.setItem('citas', JSON.stringify(citas))
       } else {
         localStorage.setItem('citas', JSON.stringify([]));
       }
   }, [citas] );
 
   // Función que tome las citas actuales y agregue la nueva
   const crearCita = cita => {
     guardarCitas([ ...citas, cita ]); 
     Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new task!'
    })
   }
 
   // Función que elimina una cita por su id
   const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id );
      guardarCitas(nuevasCitas);
      Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'You have successfully deleted a task!'
    })
   }

   //funcion que edita una cita por el id 
   const editarCita = (id,nuevasCitas) => {
   
    console.log(guardarCitas)
  }
  return (
    <Fragment>
      

      <div className="container">
      <h1>BENEFICIARIOS FINALES - ACCION SA</h1>
        <div className="row">
          <div className="one-half column">
              <FormularioJuridico 
                crearjuridica={crearjuridica}
              />
          </div>
          <div className="one-half column">
              
              <MDBTable responsive>
                <MDBTableHead>
                      <tr>
                        <th scope='col'>Beneficiarios de:</th>
                        <th scope='col'>Tipo de documento</th>
                        <th scope='col'>Documento </th>
                        <th scope='col'>Razon Social</th>
                        <th scope='col'>Representante</th>
                        <th scope='col'>eliminar</th>
                      
                      </tr>
                </MDBTableHead>
              </MDBTable>
             
              {juridicas.map(juridico => (
                <div>
                  <Citajur
                    key={juridico.id}
                    juridico={juridico}
                    eliminarjuridica={eliminarjuridica}
                  />
                </div>
               
              ))}
              <h2>{titulo}</h2>
          </div>
        </div>
      </div>


{/* personas */}
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <Formulario 
                crearCita={crearCita}
                editarCita={editarCita}
              />
          </div>
          <div className="one-half column">
              {citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  editarCita={editarCita}
                  eliminarCita={eliminarCita}
                />
              ))}
              <h2>{titulo}</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;