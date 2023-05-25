import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  function handleAddParticipant() {
    console.log('Participant added')
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Participant ${name} was removed.`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event name</Text>

      <Text style={styles.description}>Friday, May 23rd, 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#6B6B6B"
          placeholder="Participant's name"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Bruno Corrêa"
        onRemove={() => handleRemoveParticipant('Bruno Corrêa')}
      />
      <Participant
        name="Brino"
        onRemove={() => handleRemoveParticipant('Brino')}
      />
      <Participant
        name="Brinozada"
        onRemove={() => handleRemoveParticipant('Brinozada')}
      />
    </View>
  )
}
