import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event name</Text>

      <Text style={styles.description}>Friday, May 23rd, 2023.</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#6B6B6B"
        placeholder="Participant's name"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
