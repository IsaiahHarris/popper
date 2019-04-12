import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Popper</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '100%'
  },
  titleContainer: {
    height: '10%',
    backgroundColor: '#484848',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    margin: 15,
    color: '#fa5a53',
    fontSize: 30
  }
});

export default Header;
