import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  form: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 8,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FDFCFE',
  },
  emptyList: {
    color: '#FDFCFE',
    textAlign: 'center',
  },
})
