import { Circle, CheckCircle2, Trash2 } from 'lucide-react-native'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './style'

type Props = {
  textTodo: string
  onRemove: () => void
  onCheck: () => void
}

export function Todo({ textTodo, onRemove, onCheck }: Props) {
  const [check, setCheck] = useState(false)

  function handleResult() {
    onCheck()
    setCheck(true)
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
      <TouchableOpacity onPress={onRemove}>
        <Trash2 color="#808080" size={25} />
      </TouchableOpacity>
    </View>
  )
}
