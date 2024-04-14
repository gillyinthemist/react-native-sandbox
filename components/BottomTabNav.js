import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../pages/Discover';
import HomeScreen from '../pages/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#e32f45',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
      }}
      style={styles.BottomTabNav}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Middle"
        component={HomeScreen} // Change this to your middle screen component
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}></CustomTabBarButton>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="compass" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}
