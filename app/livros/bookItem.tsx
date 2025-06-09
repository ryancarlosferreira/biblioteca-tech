import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Book } from "./bookList";
import { Feather } from "@expo/vector-icons"
import api from "@/src/axios/api";

export function BookItem({ name, image, description }: Book) {

  //adcionando livro no banco de dados
  const reservar = async () => {
    try {
      const response = await api.post("/livro", {
        titulo: name,
        autor: description
      })

      if (response.status === 201 || response.status === 200) {
        Alert.alert("Sucesso", "Livro adicionado com sucesso.");
      } else {
        Alert.alert("Erro", "Não foi possível adicionar o livro.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Houve um problema ao adiconar.");
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBook} onPress={reservar}>
        <Feather name="book" size={20} color="white" />
      </TouchableOpacity>
      <Image style={{ width: 120, height: 170 }} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={5} style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
  iconBook: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "brown",
    padding: 10,
    borderRadius: 20,
  },

});