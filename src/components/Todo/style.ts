import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  styleFont: {
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
  },
  styleFontCheck: {
    color: '#808080',
    fontFamily: 'Inter_400Regular',
    textDecorationLine: 'line-through',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    gap: 15,
    backgroundColor: '#262626',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
})
