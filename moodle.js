import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Touchable, Linking } from 'react-native';

const Moodle = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>APP - G2D</Text>
        <Text style={styles.subtitle}>Moodle</Text>
      </View>

      <View style={styles.mainView}>
        <TouchableOpacity style={styles.moodleCard} onPress={() => Linking.openURL("https://moodle.isep.fr")}>
          <Image source={require('./icons/moodle.png')} style={styles.moodleImage}/>
          <Text style={styles.moodleTitle}>Moodle</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: '15%',
    paddingTop: "4%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66f',
    shadowColor: '#88d',
    shadowOffset: {
      height: '10px',
    },
    shadowRadius: '5px',
    shadowOpacity: '10%',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: '26px',
    fontFamily: 'Times New Roman',
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Times New Roman',
  },
  mainView:{
    flex: 1,
    height: '73%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodleCard: {
    width: '70%',
    height: '50%',
    padding: '5%',
    backgroundColor: '#aaf',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowRadius: '5px',
    shadowOffset: {
      width: '5px',
      height: '5px',
    },
    shadowOpacity: '100%',

  },
  moodleImage: {
    width: '80%',
    height: '60%',
    marginRight: '10%',
  },
  moodleTitle: {
    color: "#fe9",
    fontSize: '40px',
    fontFamily: 'Times New Roman',
    marginTop: '10%',
  },
});

export default Moodle;