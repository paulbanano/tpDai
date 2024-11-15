import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TarjetaPlato = ({ plato, onPress, onAgregar, onEliminar, onVerDetalles }) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress}>
      <Image 
        source={{ uri: plato.imagen }} 
        style={estilos.imagen} 
      />
      <View style={estilos.contenedorTexto}>
        <Text style={estilos.titulo}>{plato.titulo}</Text>
        <Text style={estilos.subTitulo}>
          ${plato.precio} | Health Score: {plato.puntuacionSalud}
        </Text>
        <View style={estilos.contenedorBotones}>
          {onAgregar && (
            <TouchableOpacity onPress={onAgregar} style={estilos.boton}>
              <Icon name="add-circle" size={24} color="green" />
            </TouchableOpacity>
          )}
          {onEliminar && (
            <TouchableOpacity onPress={onEliminar} style={estilos.boton}>
              <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onVerDetalles} style={estilos.boton}>
            <Icon name="eye" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  contenedorTexto: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 14,
    color: '#666',
  },
  contenedorBotones: {
    flexDirection: 'row',
  },
  boton: {
    marginLeft: 10,
  },
});

export default TarjetaPlato;
