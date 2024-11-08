import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { servicioSpoonacular } from '../servicios/ApiSpoonacular';
import { useMenu } from '../contextos/ContextoMenu';
import BotonAccion from '../componentes/BotonAccion';

const PantallaDetallePlato = ({ route, navigation }) => {
  const { plato } = route.params;
  const [detalles, setDetalles] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { agregarPlatoAlMenu } = useMenu();

  useEffect(() => {
    const cargarDetalles = async () => {
      try {
        const resultado = await servicioSpoonacular.obtenerDetallesPlato(plato.id);
        setDetalles(resultado);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar detalles:', error);
        setCargando(false);
      }
    };

    cargarDetalles();
  }, [plato.id]);

  const handleAgregarPlato = () => {
    const platoParaAgregar = {
      id: plato.id,
      titulo: plato.titulo || detalles.titulo,
      imagen: plato.imagen || detalles.imagen,
      precio: plato.precio || detalles.precio,
      puntuacionSalud: plato.puntuacionSalud || detalles.puntuacionSalud,
      vegano: plato.vegano || detalles.vegano
    };

    const agregado = agregarPlatoAlMenu(platoParaAgregar);
    if (agregado) {
      navigation.goBack();
    }
  };

  if (cargando) {
    return (
      <View style={estilos.contenedorCarga}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={estilos.contenedor}>
      <Image 
        source={{ uri: plato.imagen || detalles.imagen }} 
        style={estilos.imagen} 
      />

      <View style={estilos.contenedorTexto}>
        <Text style={estilos.titulo}>
          {plato.titulo || detalles.titulo}
        </Text>

        <View style={estilos.informacionAdicional}>
          <Text>
            Health Score: {plato.puntuacionSalud || detalles.puntuacionSalud}
          </Text>
          <Text>
            Tipo: {plato.vegano || detalles.vegano ? 'Vegano' : 'No Vegano'}
          </Text>
          <Text>
            Precio: ${plato.precio || detalles.precio}
          </Text>
        </View>

        {detalles && (
          <View>
            <Text style={estilos.seccionTitulo}>Instrucciones:</Text>
            <Text>{detalles.instrucciones}</Text>
          </View>
        )}

        <BotonAccion 
          titulo="Agregar al Menú" 
          onPress={handleAgregarPlato} 
        />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  contenedorCarga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  },
  contenedorTexto: {
    padding: 16
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  informacionAdicional: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  }
});

export default PantallaDetallePlato;