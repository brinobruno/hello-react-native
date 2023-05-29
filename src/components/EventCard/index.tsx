import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface IEventProps {
  id: string
  name: string
  onRemove: () => void
}

export function EventCard({ name, onRemove }: IEventProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
