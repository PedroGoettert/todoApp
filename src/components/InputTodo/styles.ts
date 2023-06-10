import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  fontBold: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
  },
  fontBoldBlue: {
    color: '#4EA8DE',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
  },
  fontBoldPurple: {
    color: '#8284FA',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 27,
    paddingRight: 27,
    gap: 4,
    bottom: 27,
  },
  TextInput: {
    width: 270,
    backgroundColor: '#262626',
    height: 54,
    padding: 16,
    borderRadius: 6,
    color: '#F2F2F2',
  },
  styleButton: {
    backgroundColor: '#1E6F9F',
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  todoList: {
    width: 327,
    flex: 1,
    borderStyle: 'solid',
  },
  headerTodoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginBottom: 20,
  },
  containerTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  containerTodoCompleted: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
