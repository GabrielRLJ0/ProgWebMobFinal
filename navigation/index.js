import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../components/screens/LoginScreen";
import SignupScreen from "../components/screens/SignupScreen";
import EmailConfirmation from "../components/screens/EmailConfirmation";
import ListaEventos from "../components/screens/ListScreen/ListScreen";
import EdicaoEvento from "../components/screens/EditScreen/EditScreen";
import CriarEvento from "../components/screens/CreateScreen/CreateScreen";
import { deletarEvento } from "../components/screens/DeleteScreen/DeleteScreen";
const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} />
                <Stack.Screen name="Lista" component={ListaEventos}/>
                <Stack.Screen name="EditarEvento" component={EdicaoEvento}/>
                <Stack.Screen name="CriarEvento" component={CriarEvento}/>
                <Stack.Screen name="DeletarEvento" component={deletarEvento} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation;