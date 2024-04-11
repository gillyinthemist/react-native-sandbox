import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Collections from './Collections';
import Content from './Content';
import { View } from 'react-native';

const HomeTab = createMaterialTopTabNavigator();

export default function HomeHeaderNav() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Collections" component={Collections} />
      <HomeTab.Screen name="Content" component={Content} />
    </HomeTab.Navigator>
  );
}
