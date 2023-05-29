import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event App</Text>

      <Text style={styles.description}>Organize all your events here.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#6B6B6B"
          placeholder="Event's name"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
