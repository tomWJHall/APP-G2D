import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';


const Tasks = () => {

  var [answer, updateAnswer] = useState("");

  var taskContentPath = "https://raw.githubusercontent.com/tomWJHall/APP-G2D/master/tasks.txt";

  var request = new XMLHttpRequest();

  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200) {
      updateAnswer(answer = JSON.parse(JSON.stringify(request.responseText)));
    }
  };

  var taskList = answer.split("\n");

  for (let i = 0; i < taskList.length; i++) {
    taskList[i] = taskList[i].split(",");
  }

  request.open('GET', taskContentPath);
  request.send();

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>APP - G2D</Text>
          <Text style={styles.subtitle}>Tasks</Text>
        </View>

        <ScrollView style={styles.mainView}>
          {
            taskList.slice(0, -1).map((task) => 
            <View key={taskList.slice(0,-1).indexOf(task)} style={[styles.tasksCards, {backgroundColor: (task[4].substring(2, task[4].length - 2) === "DONE") ? "green" : "red"}]}>
              <Text style={styles.taskTitle}>{task[1].substring(2, task[1].length - 1)}</Text>
              <Text style={styles.date}>{task[2].substring(2, task[2].length - 1)}</Text>
              <Text style={styles.name}>{task[3].substring(2, task[3].length - 2)}</Text>
            </View>
            )
          }
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
    height: '73%',
    width: '100%',
    padding: "5%",
  },
  tasksCards: {
    padding: '5%',
    flexDirection: "column",
    borderRadius: "5%",
    marginTop: "6%",
    shadowColor: "#222",
    shadowRadius: "3px",
    shadowOpacity: '80%',
    shadowOffset: 
    {
      width: "2px",
      height: "2px",
    },
  },
  taskTitle: {
    color: "white",
    justifyContent: "flex-start",
    textAlign: "left",
    margin: "0.2%",
  },
  date: {
    color: "white",
    justifyContent: "flex-end",
    textAlign: "right",
    margin: "0.2%",
  },
  name: {
    color: "white",
    justifyContent: "flex-start",
    textAlign: "left",
    margin: "0.2%",
  },
  taskProgress: {
    color: "white",
    justifyContent: "flex-end",
    textAlign: "right",
    margin: "0.2%",
  },
});

export default Tasks;