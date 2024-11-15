import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useBusqueda } from '../hooks/useBusqueda';
import { useMenu } from '../contextos/ContextoMenu';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TarjetaPlato from '../componentes/TarjetaPlato';

const PantallaBusqueda = ({ navigation }) => {
  const { resultadosBusqueda, cargando, buscarPlatos } = useBusqueda();
  const { agregarPlatoAlMenu } = useMenu();
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const manejarBusqueda = (texto) => {
    setTerminoBusqueda(texto);
    buscarPlatos(texto);
  };

  const handleAgregarPlato = (plato) => {
    agregarPlatoAlMenu({
      id: plato.id,
      titulo: plato.titulo,
      imagen: plato.imagen,
      precio: plato.precio,
      puntuacionSalud: plato.puntuacionSalud,
      vegano: plato.vegano,
    });
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Buscar Platos</Text>
      
      <BarraBusqueda
        valor={terminoBusqueda}
        onCambio={manejarBusqueda}
        placeholder="Buscar recetas..."
      />

      {cargando && <Text style={estilos.textoVacio}>Cargando...</Text>}

      {resultadosBusqueda.length === 0 && terminoBusqueda.length >= 3 && (
        <Text style={estilos.textoVacio}>No se encontraron resultados</Text>
      )}

      <FlatList
        data={resultadosBusqueda}
        keyExtractor={(plato) => plato.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPlato 
            plato={item}
            onAgregar={() => handleAgregarPlato(item)}
            onVerDetalles={() => navigation.navigate('PantallaDetallePlato', { plato: item })}
          />
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  textoVacio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontSize: 16,
  },
});

export default PantallaBusqueda;
