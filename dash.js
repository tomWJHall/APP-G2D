import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

const Dash = () => {

  return(
    <View style={styles.container} keyboardShouldPersistTaps='handled'>
      <View style={styles.header}>
        <Text style={styles.title}>APP - G2D</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      <ScrollView style={styles.mainView}>
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Create this Week's Dashboard</Text>
          <View style={styles.inputBlocks}>
            <Text>Animator:</Text>
            <TextInput style={styles.roleInput} placeholder="Type name"></TextInput>
          </View>
          <View style={styles.inputBlocks}>
            <Text>Scribe:</Text>
            <TextInput style={styles.roleInput} placeholder="Type name"></TextInput>
          </View>
          <View style={styles.inputBlocks}>
            <Text>Referee:</Text>
            <TextInput style={styles.roleInput} placeholder="Type name"></TextInput>
          </View>
          <Text>Main Points of the Week</Text>
          <TextInput style={styles.weekInput} keyboardType="default"></TextInput>
          <Text>Next Week</Text>
          <TextInput style={styles.weekInput}></TextInput>
          <TouchableOpacity style={styles.submit}><Text style={styles.submitText}>Generate Dashboard</Text></TouchableOpacity>
        </View>

        <View style={{height: '100%', width: '100%'}}></View>
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
  mainView:{
    width: '100%',
    paddingLeft: "5%",
    paddingRight: "5%",
    contentInset: {
      bottom: "100%",
    }
  },
  mainCard: {
    height: "90%",
    borderRadius: "20px",
    backgroundColor: "#88f",
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
    shadowRadius: "2%",
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
  inputBlocks: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "2%",
  },
  roleInput: {
    height: '70%',
    width: "60%",
    backgroundColor: 'white',
    padding: "2%",
    borderRadius: "20%",
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
    backgroundColor: "#af2",
    borderRadius: "5px",
    padding: "2%",
    width: "75%",
    marginTop: "5%",
    marginBottom: '5%',
    },
  submitText: {
    padding: "2%",
    justifyContent: "center",
    textAlign: 'center',
  },
});

export default Dash;