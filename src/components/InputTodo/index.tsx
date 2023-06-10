import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'

import PlusIco from '../../asstes/plusIco.svg'
import React, { useState } from 'react'
import { styles } from './styles'
import { EmptyList } from '../EmptyList/index'
import { Todo } from '../Todo'

type TodoProps = {
  todo: string
  time: string
}

export function InputTodo() {
  const [todoList, setTodoList] = useState<TodoProps[]>([])
  const [text, setText] = useState('')
  const [completedTodo, setCompletedTodo] = useState<string[]>([])

  function handleTodo() {
    if (text === '') {
      return Alert.alert('Campo Vazio', 'Adicione uma tarefa primeiro')
    }
    const newTodo = {
      todo: text,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      result: true,
    }

    setTodoList((prevState) => [...prevState, newTodo])
    setText('')
  }

  function handleTodoRemove(time: string) {
    setTodoList((prevState) => prevState.filter((todo) => todo.time !== time))
  }

  function handleCompleteTodo(time: string) {
    setCompletedTodo((prevState) => [...prevState, time])
  }

  return (
    <View style={styles.container}>
      {/* {Input Text} */}
      <View style={styles.input}>
        <TextInput
          style={styles.TextInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity style={styles.styleButton} onPress={handleTodo}>
          <PlusIco />
        </TouchableOpacity>
      </View>

      {/* {Todo List} */}

      <View style={styles.todoList}>
        <View style={styles.headerTodoList}>
          <View style={styles.containerTodo}>
            <Text style={styles.fontBoldBlue}>Criadas</Text>
            <View style={styles.containerTodoCompleted}>
              <Text style={styles.fontBold}>{todoList.length}</Text>
            </View>
          </View>

          <View style={styles.containerTodo}>
            <Text style={styles.fontBoldPurple}>Concluidas</Text>
            <View style={styles.containerTodoCompleted}>
              <Text style={styles.fontBold}>{completedTodo.length}</Text>
            </View>
          </View>
        </View>
        <FlatList
          style={{ maxHeight: 400 }}
          data={todoList}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Todo
              key={item.time}
              textTodo={item.todo}
              onRemove={() => handleTodoRemove(item.time)}
              onCheck={() => handleCompleteTodo(item.time)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  )
}
