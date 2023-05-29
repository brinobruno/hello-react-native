import { StatusBar } from 'react-native'

import { Event } from './src/screens/Event'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Event />
    </>
  )
}
