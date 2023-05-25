import { Text, View } from 'react-native'
import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event name</Text>

      <Text style={styles.description}>Friday, May 23rd, 2023.</Text>
    </View>
  )
}
