import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participantsList = [
    'Bruno 1',
    'Bruno 2',
    'Bruno 3',
    'Bruno 4',
    'Bruno 5',
    'Bruno 6',
    'Bruno 7',
    'Bruno 8',
    'Bruno 9',
    'Bruno 10',
    'Bruno 11',
  ]

  function handleAddParticipant() {
    return Alert.alert('Success!', 'Participant added')
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

      <ScrollView>
        {participantsList.map((participant, index) => (
          <Participant
            key={index}
            name={participant}
            onRemove={() => handleRemoveParticipant(participant)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
