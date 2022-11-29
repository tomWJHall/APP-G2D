import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Event from './event';

var calendarEvent = [
  ["Dépôt des tables des matières pour les rapports \"Etat de l'art\" et les grandes lignes de la simulation", "06122022", true],
  ["Livrable final : Boîte de dépôt", "1512022",  true]
];

const Calendar = () => {

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>APP - G2D</Text>
        <Text style={styles.subtitle}>Calendar</Text>
      </View>

      <View style={styles.mainView}>
        <ScrollView style={styles.mainScrollView}>
          {calendarEvent.map((event) => <Event taskOrNot={calendarEvent[calendarEvent.indexOf(event)][2]} key={calendarEvent.indexOf(event)} title={calendarEvent[calendarEvent.indexOf(event)][0]} date={calendarEvent[calendarEvent.indexOf(event)][1]}/>)}
        </ScrollView>
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
    height: '85%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainScrollView: {
    width: '100%',
    height: '100%',
    padding: '5%',
    paddingTop: '8%',
    flexDirection: 'column',
  },
});

export default Calendar;