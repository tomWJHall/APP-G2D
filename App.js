import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Tasks from './tasks';
import Calendar from './calendar';
import Dash from './dash';
import Moodle from './moodle';


const App = () => {
  var pages = [<Tasks/>, <Calendar/>, <Dash/>, <Moodle/>];

  var [page, updatePage] = useState(0);

  return(
    <View style={styles.container}>
      
      {pages[page]}

      <View style={styles.nav}>
          <TouchableOpacity style={styles.navicon} onPress={() => {console.log("Tasks"); updatePage(page = 0)}}><Image style={styles.icons} source={require('./icons/tasks.png')}/></TouchableOpacity>
          <TouchableOpacity style={styles.navicon} onPress={() => {console.log("Calendar"); updatePage(page = 1)}}><Image style={styles.icons} source={require('./icons/calendar.png')}/></TouchableOpacity>
          <TouchableOpacity style={styles.navicon} onPress={() => {console.log("Dashboard"); updatePage(page = 2)}}><Image style={styles.icons} source={require('./icons/dash.png')}/></TouchableOpacity>
          <TouchableOpacity style={styles.navicon} onPress={() => {console.log("Moodle"); updatePage(page = 3)}}><Text style={styles.moodleicon}>m</Text></TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '15%',
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
  mainView:{
    height: '73%',
    width: '100%',
  },
  nav: {
    backgroundColor: '#66d',
    width: '100%',
    height: '12%',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    shadowColor: '#88d',
    shadowOffset: {
      height: '-3px',
    },
    shadowRadius: '5px',
    shadowOpacity: '10%',
    paddingTop: '5%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingLeft: '5%',
    paddingRight: '8%',
  },
  navicon: {
    width: '15%',
    height: '80%',
    shadowColor: '#bbb',
    shadowOpacity: '100%',
    shadowRadius: '2px',
    backgroundColor: '#eee',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: '80%',
    height: '80%',
  },
  moodleicon: {
    color: '#f83',
    marginTop: '-12%',
    marginBottom: '20%',
    fontSize: '40px',
    fontWeight: '700',
    fontFamily: 'Arial',
    shadowColor: '#d81',
    shadowOffset: {
      width: '2px',
      height: '2px',
    },
    shadowOpacity: '100%',
    shadowRadius: '0%',
  },
});

export default App;