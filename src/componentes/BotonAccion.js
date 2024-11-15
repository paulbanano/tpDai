import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonAccion = ({ titulo, onPress, color = '#007bff' }) => {
  return (
    <TouchableOpacity 
      style={[estilos.boton, { backgroundColor: color }]} 
      onPress={onPress}
    >
      <Text style={estilos.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  boton: {
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
