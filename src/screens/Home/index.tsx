import { useState } from 'react'
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

interface IParticipantItem {
  id: string
  name: string
}

const EmptyListComponent = () => (
  <Text>No one is at the event yet? Add participants to your list</Text>
)

export function Home() {
  const [participantsList, setParticipantsList] = useState([
    { id: 1, name: 'Bruno' },
  ])

  function handleAddParticipant() {
    setParticipantsList((prevState) => [
      ...prevState,
      { id: Math.random(), name: 'New Bruno' },
    ])

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

  const renderItem = ({ item }: { item: IParticipantItem }) => (
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
