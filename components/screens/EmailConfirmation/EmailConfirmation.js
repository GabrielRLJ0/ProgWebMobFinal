import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const EmailConfirmation = () => {
  const navigation = useNavigation(); 
  const [code, setCode] = useState('');
    
    const onConfirmPressed = () =>  {
        navigation.navigate('Lista');
    }

    const onLoginPressed = () =>  {
      navigation.navigate('LoginScreen')
  }
    const onResendPressed = () =>  {
      console.warn('onResendPressed');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Nicol.png')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.root}>
            <Text style={styles.title}>Crie uma conta!</Text>

            <CustomInput
              placeholder="Coloque seu código de confirmação de email"
              value={code}
              setValue={setCode}
            />

            <CustomButton text="Confirmar" onPress={onConfirmPressed} />

            <CustomButton
              text="Voltar ao Login"
              onPress={onLoginPressed}
              type="SECONDARY"
            />

            <CustomButton
              text="Reenviar código"
              onPress={onResendPressed}
              type="TERTIARY"
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C004A'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.7
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FA942F',
    margin: 10,
    textAlign: 'center',
  },
});

export default EmailConfirmation;
