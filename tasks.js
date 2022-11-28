import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

const Tasks = () => {

  function readTextFile(file) {
    
    var rawFile = new XMLHttpRequest();
    rawFile.onreadystatechange = (e) => {
      if (rawFile.readyState !== 4) {
        return;
      }
    
      if (request.status === 200) {
        console.log('success', rawFile.responseText);
        var allText = rawFile.responseText;
      } else {
        console.warn('error');
      }
    };
    
    rawFile.open("GET", file, false);
    rawFile.send();

    return allText;
  }

  var taskContent = readTextFile("https://raw.githubusercontent.com/tomWJHall/APP-G2D/master/tasks.txt");

  setInterval(() => {console.log(taskContent)}, 1000);

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>APP - G2D</Text>
          <Text style={styles.subtitle}>Tasks</Text>
        </View>

        <ScrollView style={styles.mainView}>

        </ScrollView>
        
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
  },
});

export default Tasks;