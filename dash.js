import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

const Dash = () => {

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>APP - G2D</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Create this Week's Dashboard</Text>
          <TextInput></TextInput>
          <Text>Animator:</Text>
          <TextInput></TextInput>
          <Text>Scribe:</Text>
          <TextInput></TextInput>
          <Text>Referee:</Text>
          <TextInput></TextInput>
          <View>
            <Text>Main Points of the Week</Text>
            <TextInput></TextInput>
          </View>
          <Text>Next Week</Text>
          <TextInput></TextInput>
        </View>
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
    height: '73%',
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },
  mainCard: {
    width: "90%",
    borderRadius: "20px",
    backgroundColor: "#5c8",
    justifyContent: 'space-between',
    padding: '5%',
    color: "white",
  },
  cardTitle: {
    color: 'white',
    fontSize: '20px',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Dash;