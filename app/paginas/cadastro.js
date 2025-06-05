import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import api from '../../src/axios/api';
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

const navigation = useNavigation();

const telaLogin= () => {
    navigation.navigate("index")
}

  //validando cadastro
  const handleCadastro = async () => {
    if (!usuario || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await api.post('/usuario', {
        usuario,
        senha
      });

      if (response.status === 201 || response.status === 200) {
        console.log("Sucesso', 'Cadastro realizado com sucesso!");
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        telaLogin();
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um problema com o cadastro.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário de Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={setUsuario}
        value={usuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        onChangeText={setConfirmarSenha}
        value={confirmarSenha}
      />
      
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontFamily:"Cochin",
    fontSize: 30,
    fontWeight: "bold",
    color: "#795548"
  },
  input: {
    height: 45,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff"
  },
  botao: {
    alignItems: "center",
    backgroundColor: "#795548",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 20
  },
  botaoTexto: {
    fontFamily: "Cochin",
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
