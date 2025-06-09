import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

//importando o axios
import api from "../src/axios/api";
import { useNavigation } from "@react-navigation/native";

export default function Login(){

  const navigation = useNavigation();

  const telaCadastro= () => {
    navigation.navigate("paginas/cadastro")
  }
  const telaHome= () => {
    navigation.navigate("paginas/home")
  }

  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  //validando o login
  const validarLogin = async () => {
    if(!usuario || !senha || usuario.trim() === "" || senha.trim() === ""){
      Alert.alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await api.get("/usuario", {
        params:{
          usuario: usuario,
          senha: senha
        }
      });

      if(response.status === 200){
        telaHome();
        console.log("Login válido");
      } else {
        Alert.alert("Usuário ou senha incorreto!");
      }

    } catch (error) {
      alert("Erro no servidor!");
      console.error("Não foi possível conectar, tente novamente mais tarde!");
      // quando eu quiser saber o código do erro 
      // console.error("Erro na requisição:", error.message, error.response?.data);
;
    }
  }

  //funções esqueci senha e fale conosco
  const esqueciSenha = () => {
    alert("Acesse o link para recuperar a senha.")
  }

  const faleConosco = () => {
    alert("Acesse o link para entrar em contato.")
  }

  //tela de login tá toda nessa view
  return (
    <View style={styles.container}>
      <Image
        source={require("../src/assets/e-book.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Biblioteca Tech</Text>

      {/* área de entradas */}
      <TextInput 
        style={styles.input}
        onChangeText={value =>setUsuario(value)}
        placeholder="Digite seu usuário"
      />
      
      <TextInput 
        style={styles.input}
        onChangeText={value =>setSenha(value)}
        placeholder="Digite sua senha"
      />

      {/* área de botões */}
      <TouchableOpacity style={styles.botaoLogin} onPress={validarLogin}>
          <Text style={styles.textoLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoCadastro} onPress={telaCadastro}>
          <Text style={styles.textoCadastro}>Cadastre-se</Text>
      </TouchableOpacity>

      {/* área de links */}
      <View styles={styles.linkContainer}>
        <TouchableOpacity onPress={esqueciSenha}>
          <Text style={styles.linkText}>Esqueci a senha!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={faleConosco}>
          <Text style={styles.linkText}>Fale conosco!</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

//parte do css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: -150,
    width: 150,
    height: 150
  },
  titulo: {
    fontFamily:"Cochin",
    fontSize: 30,
    fontWeight: "bold",
    color: "#795548"
  },
  input:{
    height: 45,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff"
  },
  textoLogin:{
    fontFamily: "Cochin",
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff"
  },
  botaoLogin:{
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
  botaoCadastro:{
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
  textoCadastro:{
    fontFamily: "Cochin",
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff"
  },
  linkContainer:{
    marginTop: 20
  },
  linkText:{
    color: "#00008B",
    fontSize: 16,
    textDecorationLine: "underline",
    marginVertical: 5,
    textAlign: "center"
  }
})