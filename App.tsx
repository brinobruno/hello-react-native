import { Text, View } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111111',
        padding: 24,
      }}
    >
      <Text
        style={{
          color: '#FDFCFE',
          fontSize: 24,
          fontWeight: '600',
        }}
      >
        Event name
      </Text>

      <Text
        style={{
          color: '#a0a0a0',
          fontSize: 16,
        }}
      >
        Friday, May 23rd, 2023.
      </Text>
    </View>
  )
}
