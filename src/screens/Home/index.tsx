import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface IEvent {
  id: string
  name: string
}

type Events = IEvent[]

export function Home() {
  const [eventsList, setEventsList] = useState<Events>([])

  const [newEvent, setNewEvent] = useState<IEvent>({ id: '', name: '' })

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
