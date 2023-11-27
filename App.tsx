import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button/button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaEventos from './components/screens/ListScreen/ListScreen';
import EdicaoEvento from './components/screens/EditScreen/EditScreen';
import CriarEvento from './components/screens/CreateScreen/CreateScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen';
import EmailConfirmation from './components/screens/EmailConfirmation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen name="Lista" component={ListaEventos}
    options={{ title: 'Eventos' }} />
    <Stack.Screen name="EdicaoEvento" component={EdicaoEvento}
    options={{ title: 'Editar Evento' }} />
     <Stack.Screen name="CriarEvento" component={CriarEvento}
    options={{ title: 'Criar Eventos' }} />
     <Stack.Screen name="LoginScreen" component={LoginScreen}
    options={{ title: 'Login' }} />
    <Stack.Screen name="SignupScreen" component={SignupScreen}
    options={{ title: 'Cadastro' }} />
    <Stack.Screen name="EmailConfirmation" component={EmailConfirmation}
    options={{ title: 'Confirmação de Email' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000000'
    },
    input: {
    borderWidth: 1,
    backgroundColor: '#8B0000',
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    } });