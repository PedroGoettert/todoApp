import { View, Text } from 'react-native'
import React from 'react'
import RocketHeader from '../../asstes/RocketHeader.svg'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <RocketHeader width={40} height={40} style={styles.logoSvg} />
        <Text style={styles.textTo}>to</Text>
        <Text style={styles.textDo}>do</Text>
      </View>
    </View>
  )
}
