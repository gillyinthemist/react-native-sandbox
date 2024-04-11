import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

export default function Discover() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Discover</Text>
      </TouchableOpacity>
    </View>
  );
}
