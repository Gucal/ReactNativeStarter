import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Counter from '../components/Counter'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
