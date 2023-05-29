import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface IParticipantProps {
  id: string
  name: string
  onRemove: () => void
}

export function Participant({ id, name, onRemove }: IParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
