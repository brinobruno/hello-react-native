import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native'

import { styles } from './styles'
import { EventCard } from '../../components/EventCard'

interface IEvent {
  id: string
  name: string
}

type Events = IEvent[]

const EmptyListComponent = () => (
  <Text style={styles.emptyList}>You do not have any events created yet.</Text>
)

export function Home() {
  const [eventsList, setEventsList] = useState<Events>([])

  const [newEvent, setNewEvent] = useState<IEvent>({ id: '', name: '' })

  function handleAddEvent() {
    setEventsList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), name: newEvent.name },
    ])

    Alert.alert('Success!', 'Event added')

    setNewEvent({ id: '', name: '' })
  }

  function handleRemoveEvent(id: string, name: string) {
    Alert.alert('Remove event', `Do you wish to remove: ${name}?`, [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          setEventsList((prevState) =>
            prevState.filter((event) => event.id !== id),
          )
        },
      },
    ])
  }

  const renderItem = ({ item }: { item: IEvent }) => (
    <EventCard
      key={item.id}
      id={item.id}
      name={item.name}
      onRemove={() => handleRemoveEvent(item.id, item.name)}
    />
  )

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

        <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={eventsList}
        keyExtractor={(participant) => participant.id}
        renderItem={renderItem}
        ListEmptyComponent={EmptyListComponent}
      />
    </View>
  )
}
