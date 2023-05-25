import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event name</Text>

      <Text style={styles.description}>Friday, May 23rd, 2023.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    padding: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    color: '#a0a0a0',
    fontSize: 16,
  },
})
