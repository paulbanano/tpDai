import React, { createContext, useState, useContext } from 'react';

const ContextoMenu = createContext();

export const ProovedorMenu = ({ children }) => {
  const [platosMenu, establecerPlatosMenu] = useState([]);
  const [precioTotal, establecerPrecioTotal] = useState(0);
  const [puntuacionSaludPromedio, establecerPuntuacionSaludPromedio] = useState(0);

  const agregarPlatoAlMenu = (plato) => {
    // Validaciones: máximo 4 platos, 2 veganos y 2 no veganos
    if (platosMenu.length >= 4) {
      alert('Máximo 4 platos permitidos');
      return false;
    }

    const platosVeganos = platosMenu.filter(p => p.vegano).length;
    const platosNoVeganos = platosMenu.filter(p => !p.vegano).length;

    if (plato.vegano && platosVeganos >= 2) {
      alert('Máximo 2 platos veganos');
      return false;
    }

    if (!plato.vegano && platosNoVeganos >= 2) {
      alert('Máximo 2 platos no veganos');
      return false;
    }

    const platosActualizados = [...platosMenu, plato];
    establecerPlatosMenu(platosActualizados);

    // Actualizar precio total y puntuación de salud promedio
    const precioTotalNuevo = platosActualizados.reduce((total, p) => total + p.precio, 0);
    const puntuacionSaludPromedioNueva = platosActualizados.reduce((total, p) => total + p.puntuacionSalud, 0) / platosActualizados.length;

    establecerPrecioTotal(precioTotalNuevo);
    establecerPuntuacionSaludPromedio(puntuacionSaludPromedioNueva);

    return true;
  };

  const eliminarPlatoDelMenu = (idPlato) => {
    const platosActualizados = platosMenu.filter(plato => plato.id !== idPlato);
    
    establecerPlatosMenu(platosActualizados);

    // Recalcular precio total y puntuación de salud promedio
    const precioTotalNuevo = platosActualizados.reduce((total, p) => total + p.precio, 0);
    const puntuacionSaludPromedioNueva = platosActualizados.length 
      ? platosActualizados.reduce((total, p) => total + p.puntuacionSalud, 0) / platosActualizados.length 
      : 0;

    establecerPrecioTotal(precioTotalNuevo);
    establecerPuntuacionSaludPromedio(puntuacionSaludPromedioNueva);
  };

  return (
    <ContextoMenu.Provider value={{
      platosMenu, 
      precioTotal, 
      puntuacionSaludPromedio, 
      agregarPlatoAlMenu, 
      eliminarPlatoDelMenu
    }}>
      {children}
    </ContextoMenu.Provider>
  );
};

export const useMenu = () => useContext(ContextoMenu);