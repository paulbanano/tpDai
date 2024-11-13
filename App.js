// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaPrincipal from './src/pantallas/PantallaPrincipal';
import PantallaBusqueda from './src/pantallas/PantallaBusqueda';
import PantallaDetallePlato from './src/pantallas/PantallaDetallePlato';
import { ProovedorMenu } from './src/contextos/ContextoMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProovedorMenu>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='PantallaPrincipal'>
          <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} />
          <Stack.Screen name="PantallaBusqueda" component={PantallaBusqueda} />
          <Stack.Screen name="PantallaDetallePlato" component={PantallaDetallePlato} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProovedorMenu>
  );
}
