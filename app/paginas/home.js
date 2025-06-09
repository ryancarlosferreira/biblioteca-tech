import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Importação da navegação
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { bookList } from '../livros/bookList';
import { BookItem } from '../livros/bookItem';

// Tela Home
function Catalogo() {
  return (
    <SafeAreaView>
        <FlatList
          keyExtractor={(item) => item.name}
          data={bookList}
          renderItem={({ item }) => <BookItem {...item} />}
        />
    </SafeAreaView>

  );
}

// Tela Reservas
function Reservas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
    </View>
  );
}

// Tela Configurações
function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
    </View>
  );
}

// Tab Navigator
const Tab = createBottomTabNavigator();

// Função para a navegação Tab
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "brown"
    }}>
      <Tab.Screen
        name="Catalogo"
        component={Catalogo}
        options={{ headerShown: false,
                   tabBarIcon: ({ size, color}) => <Feather name="grid" size={size} color={color}/>
         }} />

      <Tab.Screen
        name="Reservas"
        component={Reservas}
        options={{ headerShown: false,
                  tabBarIcon: ({ size, color }) => <Feather name="book" size={size} color={color}/>
         }} />
    </Tab.Navigator>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Função para a navegação Drawer
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" options={{ headerShown: false }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator} />

      <Drawer.Screen
        name="Configurações"
        component={Settings} />
    </Drawer.Navigator>
  );
}

// Componente principal da navegação
export default function App() {
  return (
    <DrawerNavigator />
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }

});