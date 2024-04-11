import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's GO</Text>
      </TouchableOpacity>
    </View>
  );
}
