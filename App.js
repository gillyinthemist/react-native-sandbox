import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="About" c
            style={styles.logo}
            source={require('./assets/FINH.png')}
          ></Image>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let's GO</Text>
          </TouchableOpacity>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxHeight: 50,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
