import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';

// AXIOS
import axios from 'axios';


function App() {

  // Definir el state
  const [ busquedaletra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState('');
  
  useEffect( () => {
    // Revisar si el objeto esta vacio
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      // Axios da por defecto el get
      const resultado = await axios(url);
      guardarLetra(resultado.data.lyrics);
      
    }
    consultarApiLetra();
    
  }, [busquedaletra])

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra} 
      />
    </Fragment>
  );
}

export default App;
