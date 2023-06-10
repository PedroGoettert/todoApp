import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter'

import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Header } from './src/components/Header'
import { InputTodo } from './src/components/InputTodo'

export default function App() {
  const [hasLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_800ExtraBold,
  })

  if (!hasLoaded) {
    return <AppLoading />
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <InputTodo />
      <StatusBar style="light" />
    </View>
  )
}
