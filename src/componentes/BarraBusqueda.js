import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const BarraBusqueda = ({ valor, onCambio, placeholder }) => {
  return (
    <View style={estilos.contenedor}>
      <TextInput
        style={estilos.input}
        placeholder={placeholder}
        value={valor}
        onChangeText={onCambio}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 16
  },
  input: {
    fontSize: 16
  }
});

export default BarraBusqueda;