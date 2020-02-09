import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import CounterStore from '../store/CounterStore';
import { observer } from 'mobx-react'

@observer
export default class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNumber}>{CounterStore.count}</Text>
        <View style={styles.buttonContainer}>
          <Button title={'Arttır'}
            onPress={() => CounterStore.arttir()}
          />
          <Button
            title={'Azalt'}
            onPress={() => CounterStore.azalt()}
          />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 5,
    flexDirection: 'row',
  },
  textNumber: {
    fontSize: 40,
  }
})