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
  const [participantsList, setParticipantsList] = useState<IParticipantItem[]>(
    [],
  )

  const [newParticipant, setNewParticipant] = useState<IParticipantItem>({
    id: '',
    name: '',
  })

  function handleAddParticipant() {
    setParticipantsList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), name: newParticipant.name },
    ])

    Alert.alert('Success!', 'Participant added')

    setNewParticipant({ id: '', name: '' })
  }

  function handleRemoveParticipant(id: string, name: string) {
    Alert.alert('Remove participant', `Do you wish to remove: ${name}?`, [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          setParticipantsList((prevState) =>
            prevState.filter((participant) => participant.id !== id),
          )
        },
      },
    ])
  }

  const renderItem = ({ item }: { item: IParticipantItem }) => (
    <Participant
      key={item.id}
      id={item.id}
      name={item.name}
      onRemove={() => handleRemoveParticipant(item.id, item.name)}
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
          value={newParticipant.name}
          onChangeText={(text) => setNewParticipant({ id: '', name: text })}
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
