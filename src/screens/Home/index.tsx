import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'

import { styles } from './styles'

interface IEvent {
  id: string
  name: string
}

type Events = IEvent[]

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
