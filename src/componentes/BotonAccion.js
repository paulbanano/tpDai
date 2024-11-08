import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonAccion = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={estilos.boton} onPress={onPress}>
      <Text style={estilos.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  boton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginHorizontal: 4
  },
  texto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default BotonAccion;