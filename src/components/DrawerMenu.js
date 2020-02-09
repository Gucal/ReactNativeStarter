import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerMenu extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-home" size={25} /><Text style={styles.menuItemText}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-contact" size={25} /><Text style={styles.menuItemText}>Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-attach" size={25} /><Text style={styles.menuItemText}>About</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Details')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-book" size={25} /><Text style={styles.menuItemText}>Details</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}></View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  clickable: {
    marginHorizontal: 15,
  },
  bottom: {
    flex: 4,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItemText: {
    marginHorizontal: 10,
  },
});
