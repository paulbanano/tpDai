import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaPrincipal from './src/pantallas/PantallaPrincipal';
import PantallaBusqueda from './src/pantallas/PantallaBusqueda';
import PantallaDetallePlato from './src/pantallas/PantallaDetallePlato';
import { ProovedorMenu } from './src/contextos/ContextoMenu';

const Pila = createStackNavigator();
export default NavegadorAplicacion = () => {
  return (
    <ProovedorMenu>
      <NavigationContainer>
        <Pila.Navigator>
          <Pila.Screen name="PantallaPrincipal" component={PantallaPrincipal}/>
          <Pila.Screen name="PantallaBusqueda" component={PantallaBusqueda}/>
          <Pila.Screen name="PantallaDetallePlato" component={PantallaDetallePlato}/>
        </Pila.Navigator>
      </NavigationContainer>
    </ProovedorMenu>
  );
};