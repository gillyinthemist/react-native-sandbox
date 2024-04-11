import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeaderNav from '../components/HomeHeaderNav';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <HomeHeaderNav />
    </SafeAreaView>
  );
}
