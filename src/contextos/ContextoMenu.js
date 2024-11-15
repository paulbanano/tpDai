import React, { createContext, useState, useContext } from 'react';

const ContextoMenu = createContext();

export const ProovedorMenu = ({ children }) => {
  const [platosMenu, establecerPlatosMenu] = useState([]);
  const [precioTotal, establecerPrecioTotal] = useState(0);
  const [puntuacionSaludPromedio, establecerPuntuacionSaludPromedio] = useState(0);

  const verificarLimitesPlatosMenu = (plato) => {
    // Verificar cantidad máxima de 4 platos
    if (platosMenu.length >= 4) {
      alert('Máximo 4 platos permitidos en el menú.');
      return false;
    }

    // Verificar máximo de 2 platos veganos
    const platosVeganos = platosMenu.filter(p => p.vegano).length;
    if (plato.vegano && platosVeganos >= 2) {
      alert('Máximo 2 platos veganos permitidos en el menú.');
      return false;
    }

    // Verificar máximo de 2 platos no veganos
    const platosNoVeganos = platosMenu.filter(p => !p.vegano).length;
    if (!plato.vegano && platosNoVeganos >= 2) {
      alert('Máximo 2 platos no veganos permitidos en el menú.');
      return false;
    }

    // Verificar que no se duplique un plato
    if (platosMenu.some(p => p.id === plato.id)) {
      alert('Ya hay un plato igual en el menú.');
      return false;
    }

    return true;
  };

  const agregarPlatoAlMenu = (plato) => {
    if (verificarLimitesPlatosMenu(plato)) {
      const platosActualizados = [...platosMenu, plato];
      establecerPlatosMenu(platosActualizados);

      // Actualizar precio total y puntuación de salud promedio
      const precioTotalNuevo = platosActualizados.reduce((total, p) => total + p.precio, 0);
      const puntuacionSaludPromedioNueva = platosActualizados.reduce((total, p) => total + p.puntuacionSalud, 0) / platosActualizados.length;

      establecerPrecioTotal(precioTotalNuevo);
      establecerPuntuacionSaludPromedio(puntuacionSaludPromedioNueva);

      return true;
    }

    return false;
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