import { View, Text } from 'react-native'
import TodoIco from '../../asstes/TodoIco.svg'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.emptyTodoList}>
      <TodoIco style={{ marginTop: 48 }} />

      <View style={{ marginTop: 16 }}>
        <Text style={styles.textEmptyBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textEmpty}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
