import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './components/BottomTabNav';
import styles from './styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}
