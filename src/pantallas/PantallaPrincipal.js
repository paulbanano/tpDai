// src/pantallas/PantallaPrincipal.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMenu } from '../contextos/ContextoMenu';
import TarjetaPlato from '../componentes/TarjetaPlato';
import BotonAccion from '../componentes/BotonAccion';
import { useNavigation } from '@react-navigation/native';

const PantallaPrincipal = () => {
  const { platosMenu, precioTotal, puntuacionSaludPromedio, eliminarPlatoDelMenu } = useMenu();
  const navegacion = useNavigation();

  const irAPantallaBusqueda = () => {
    navegacion.navigate('PantallaBusqueda');
  };

  const irAPantallaDetalle = (plato) => {
    navegacion.navigate('PantallaDetallePlato', { plato });
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Menú del Hotel</Text>
      <View style={estilos.resumen}>
        <Text>Precio Total: ${precioTotal.toFixed(2)}</Text>
        <Text>Health Score Promedio: {puntuacionSaludPromedio.toFixed(2)}</Text>
      </View>
      <FlatList
        data={platosMenu}
        keyExtractor={(plato) => plato.id.toString()}
        renderItem={({ item }) => (
          <TarjetaPlato 
            plato={item}
            onPress={() => irAPantallaDetalle(item)}
            onEliminar={() => eliminarPlatoDelMenu(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={estilos.textoVacio}>
            No hay platos en el menú. ¡Agrega algunos!
          </Text>
        }
      />
      <BotonAccion 
        titulo="Buscar Platos" 
        onPress={irAPantallaBusqueda}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  resumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  textoVacio: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888'
  }
});

export default PantallaPrincipal;
