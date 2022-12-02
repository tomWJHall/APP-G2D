import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Event from './event';

var calendarEvent = [
  ["Dépôt des tables des matières pour les rapports \"Etat de l'art\" et les grandes lignes de la simulation", "06122022", true],
  ["Presentation practice - Tell a Photo Story. 06/12/2022", "06122022", true],
  ["Livrable final : Boîte de dépôt (date limite 15 décembre 2022)", "15122022", true],
  ["QCM Formation Managériale 2 décembre (groupe après-midi)", "02122022", true]
];

calendarEvent = calendarEvent.sort(function(a, b){return parseInt(a[1].substring(4) + a[1].substring(2, 5) + a[1].substring(0, 3)) - parseInt(b[1].substring(4) + b[1].substring(2, 5) + b[1].substring(0, 3))});

const Calendar = () => {

  var eventContentPath = "https://raw.githubusercontent.com/tomWJHall/APP-G2D/master/eventsList.txt";

  var [answer, updateAnswer] = useState("");

  var request = new XMLHttpRequest();

  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200) {
      updateAnswer(answer = JSON.parse(JSON.stringify(request.responseText)));
    }
  };
  
  
  var eventList = answer.split("\n");

  for (let i = 0; i < eventList.length; i++) {
    eventList[i] = eventList[i].split(",");
  }

  request.open('GET', eventContentPath);
  request.send();

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>APP - G2D</Text>
        <Text style={styles.subtitle}>Calendar</Text>
      </View>

      <View style={styles.mainView}>
        <ScrollView style={styles.mainScrollView}>
          {eventList.map((event) => <Event taskOrNot={calendarEvent[calendarEvent.indexOf(event)][2]} key={calendarEvent.indexOf(event)} title={calendarEvent[calendarEvent.indexOf(event)][0]} date={calendarEvent[calendarEvent.indexOf(event)][1]}/>)}
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