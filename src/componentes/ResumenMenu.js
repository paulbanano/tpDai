import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResumenMenu = ({ total, promedioHealthScore, playosVeganos, playosNoVeganos }) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Resumen del Menú</Text>
      <View style={estilos.fila}>
        <Text style={estilos.etiqueta}>Total:</Text>
        <Text style={estilos.valor}>{total.toFixed(2)}</Text>
      </View>
      <View style={estilos.fila}>
        <Text style={estilos.etiqueta}>Promedio HealthScore:</Text>
        <Text style={estilos.valor}>{promedioHealthScore.toFixed(2)}</Text>
      </View>
      <View style={estilos.fila}>
        <Text style={estilos.etiqueta}>Platos Veganos:</Text>
        <Text style={estilos.valor}>{playosVeganos.length}</Text>
      </View>
      <View style={estilos.fila}>
        <Text style={estilos.etiqueta}>Platos No Veganos:</Text>
        <Text style={estilos.valor}>{playosNoVeganos.length}</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 16
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  etiqueta: {
    fontSize: 16
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ResumenMenu;