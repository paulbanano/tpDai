import { useState } from 'react';
import { servicioSpoonacular } from '../servicios/ApiSpoonacular';

export const useBusqueda = () => {
  const [resultadosBusqueda, establecerResultadosBusqueda] = useState([]);
  const [cargando, establecerCargando] = useState(false);
  const [error, establecerError] = useState(null);

  const buscarPlatos = async (consulta) => {
    // Validar longitud de búsqueda
    if (consulta.length < 3) {
      establecerResultadosBusqueda([]);
      return;
    }

    establecerCargando(true);
    establecerError(null);

    try {
      const resultados = await servicioSpoonacular.buscarRecetas(consulta);
      establecerResultadosBusqueda(resultados);
    } catch (err) {
      establecerError(err);
      establecerResultadosBusqueda([]);
    } finally {
      establecerCargando(false);
    }
  };

  return {
    resultadosBusqueda,
    cargando,
    error,
    buscarPlatos
  };
};

