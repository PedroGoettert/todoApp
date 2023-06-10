import { Circle, CheckCircle2, Trash2 } from 'lucide-react-native'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Alert } from 'react-native'
import { styles } from './style'

type Props = {
  textTodo: string
  onRemove: () => void
  onCheck: () => void
}

export function Todo({ textTodo, onRemove, onCheck }: Props) {
  const [check, setCheck] = useState(false)

  function checkTest() {
    onCheck()
    setCheck(true)
  }

  function handleResult() {
    Alert.alert(
      'Deseja Concluir a Tarefa?',
      'Depois de concluir, não conseguira reverter.',
      [
        {
          text: 'Sim',
          onPress: () => checkTest(),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  function removeTodo() {
    Alert.alert(
      'Deseja remover a tarefa?',
      'Depois de remover, não sera possível reverter',
      [
        {
          text: 'Sim',
          onPress: () => onRemove(),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <View style={styles.container}>
      {!check ? (
        <TouchableOpacity onPress={handleResult}>
          <Circle color="#4EA8DE" />
        </TouchableOpacity>
      ) : (
        <CheckCircle2 color="#5E60CE" />
      )}

      <View style={{ flex: 1 }}>
        <Text style={!check ? styles.styleFont : styles.styleFontCheck}>
          {textTodo}
        </Text>
      </View>
      <TouchableOpacity onPress={removeTodo}>
        <Trash2 color="#808080" size={25} />
      </TouchableOpacity>
    </View>
  )
}
