import { useContext } from 'react';
import { ContextoMenu } from '../contextos/ContextoMenu';

const useMenu = () => {
  const { platos, agregarPlato, eliminarPlato, total, promedioHealthScore, playosVeganos, playosNoVeganos } = useContext(ContextoMenu);

  return {
    platos,
    agregarPlato,
    eliminarPlato,
    total,
    promedioHealthScore,
    playosVeganos,
    playosNoVeganos
  };
};

export default useMenu;