import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Discover() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Discovering</Text>
    </TouchableOpacity>
  );
}
