import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Touchable, Linking } from 'react-native';

const Event = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleView}><Text style={styles.title}>{props.title}</Text></View>
        <View style={styles.dateView}><Text style={styles.date}>Deadline:   {props.date.substring(0, 2)}/{props.date.substring(2, 4)}/{props.date.substring(4, 8)}</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55f',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '5%',
    marginBottom: '6%',
    shadowColor: '#11d',
    shadowOffset: {
      width: '3px',
      height: '3px',
    },
    shadowOpacity: '10%',
    shadowRadius: '3%',
  },
  header: {
    width: '90%',
    height: '100%',
    padding: '5%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '10%',
    width: '90%',
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
  },
  title: {
    fontSize: '16px',
    color: 'white',
  },
  date: {
    fontSize: '12px',
    color: 'white',
  }
});

export default Event;