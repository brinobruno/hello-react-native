import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

const EmptyListComponent = () => (
  <Text>No one is at the event yet? Add participants to your list</Text>
)

export function Home() {
  const participantsList = [
    {
      id: '1',
      name: 'Bruno 1',
    },
    {
      id: '2',
      name: 'Bruno 2',
    },
    {
      id: '3',
      name: 'Bruno 3',
    },
    {
      id: '4',
      name: 'Bruno 4',
    },
    {
      id: '5',
      name: 'Bruno 5',
    },
    {
      id: '6',
      name: 'Bruno 6',
    },
    {
      id: '7',
      name: 'Bruno 7',
    },
  ]

  function handleAddParticipant() {
    Alert.alert('Success!', 'Participant added')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remove participant', `Do you wish to remove: ${name}?`, [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => Alert.alert('Participant removed.'),
      },
    ])
  }

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <Participant
      key={item.id}
      name={item.name}
      onRemove={() => handleRemoveParticipant(item.name)}
    />
  )

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

      <FlatList
        data={participantsList}
        keyExtractor={(participant) => participant.id}
        renderItem={renderItem}
        ListEmptyComponent={EmptyListComponent}
      />
    </View>
  )
}
