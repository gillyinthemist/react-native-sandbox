import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Home() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Let's GO</Text>
    </TouchableOpacity>
  );
}
