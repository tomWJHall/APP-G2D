import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const Dash = () => {

  var [inputAnimator, updateAnimator] = useState("");
  var [inputScribe, updateScribe] = useState("");
  var [inputReferee, updateReferee] = useState("");
  var [inputWeek, updateWeek] = useState("");
  var [inputNextWeek, updateNextWeek] = useState("");

  var submit = async () => {
    console.log(inputAnimator);
    console.log(inputScribe);
    console.log(inputReferee);
    console.log(inputWeek);
    console.log(inputNextWeek);

    var textOutput = "\n\nAnimateur : " + inputAnimator + "\nScribe : " + inputScribe + "\nRéférent : " + inputReferee + "\n\n\nCette semaine : \n\n" + inputWeek + "\n\n\nLa semaine prochaine : \n\n" + inputNextWeek + "\n\n";

    console.log(textOutput);
    
    var beginDate = new Date("10/02/2022");
    var beginning = beginDate.getTime();
    var date = new Date();
    var now = date.getTime();
    var weekNum = Math.round((now - beginning)/(1000*60*60*24*7));

    console.log(weekNum);

    var filename = FileSystem.documentDirectory + "/dashboard_semaine" + JSON.stringify(weekNum) + ".txt";

    console.log(filename);
    await FileSystem.writeAsStringAsync(filename, textOutput);
    await Sharing.shareAsync(filename);
  
  };


  return(
    <View style={styles.container} keyboardShouldPersistTaps='handled'>
      <View style={styles.header}>
        <Text style={styles.title}>APP - G2D</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      <ScrollView style={styles.mainView} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Create this Week's Dashboard</Text>
          <View style={styles.inputBlocks}>
            <Text style={styles.textLabels}>Animator:</Text>
            <TextInput style={styles.roleInput} value={inputAnimator} onChangeText={updateAnimator} placeholder="Type name"></TextInput>
          </View>
          <View style={styles.inputBlocks}>
            <Text style={styles.textLabels}>Scribe:</Text>
            <TextInput style={styles.roleInput} value={inputScribe} onChangeText={updateScribe} placeholder="Type name"></TextInput>
          </View>
          <View style={styles.inputBlocks}>
            <Text style={styles.textLabels}>Referee:</Text>
            <TextInput style={styles.roleInput} value={inputReferee} onChangeText={updateReferee} placeholder="Type name"></TextInput>
          </View>
          <Text style={styles.textLabels}>Main Points of the Week</Text>
          <TextInput style={styles.weekInput} value={inputWeek} onChangeText={updateWeek} keyboardType="default" multiline={true} numberOfLines={4} placeholder="Write here..."></TextInput>
          <Text style={styles.textLabels}>Next Week</Text>
          <TextInput style={styles.weekInput} value={inputNextWeek} onChangeText={updateNextWeek} multiline={true} numberOfLines={4} placeholder="Write here..."></TextInput>
          <TouchableOpacity style={styles.submit} onPress={submit}><Text style={styles.submitText}>Generate Dashboard</Text></TouchableOpacity>
        </View>

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
  scrollContainer: {
    flexGrow: 1,
    paddingTop: "2%",
    paddingBottom: "100%",
  },
  mainView: {
    width: '100%',
    paddingLeft: "5%",
    paddingRight: "5%",
    contentInset: {
      bottom: "500%",
    }
  },
  mainCard: {
    height: "100%",
    borderRadius: "20px",
    backgroundColor: "#45d",
    justifyContent: 'space-between',
    padding: '5%',
    paddingBottom: "20%",
    color: "white",
    shadowColor: "#222",
    shadowOffset: {
      width: "2px",
      height: "2px",
    },
    shadowOpacity: '100%',
    shadowRadius: "5%",
    marginTop: '10%',
    marginBottom: "20%",
  },
  cardTitle: {
    color: 'white',
    fontSize: '20px',
    marginBottom: "5%",
    justifyContent: 'center',
    textAlign: 'center',
  },
  textLabels: {
    color: 'white',
  },
  inputBlocks: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "2%",
  },
  roleInput: {
    height: '90%',
    width: "60%",
    backgroundColor: 'white',
    padding: "2%",
    borderRadius: "3%",
  },
  weekInput: {
    margin: "2%",
    width: "100%",
    height: "20%",
    backgroundColor: 'white',
    borderRadius: "4%",
    padding: "2%",
    fontSize: "12px",
    textAlign: "justify",
  },
  submit: {
    alignSelf: 'center',
    backgroundColor: "#49f",
    borderRadius: "5px",
    padding: "2%",
    width: "75%",
    marginTop: '5%',
    marginBottom: '-12%',
    shadowColor: "#222",
    shadowOffset: {
      width: "1px",
      height: "1px",
    },
    shadowOpacity: '100%',
    shadowRadius: "2%",
  },
  submitText: {
    padding: "2%",
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
  },
});

export default Dash;
