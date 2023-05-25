import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface IParticipantProps {
  name: string
}

export function Participant({ name }: IParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
