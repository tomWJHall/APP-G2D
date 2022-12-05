import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import * as SMS from 'expo-sms';


const Tasks = () => {

  var notify = async (name, title, deadline) => {
    var date = new Date();
    var onTime = (deadline.substring(0, 2) == date.getDate()) && (deadline.substring(3, 5) == date.getMonth() + 1)  && (deadline.substring(6) == date.getFullYear());
    var yearEarly = deadline.substring(6) >= date.getFullYear();
    var monthYearEarly = yearEarly && (deadline.substring(3, 5) >= date.getMonth() + 1);
    var early = monthYearEarly && (deadline.substring(0, 2) > date.getDate());
    var punctuality = (onTime) ? "on time" : ((early) ? "early" : "late");

    var message = name.substring(0, name.length - 1) + " finished (" + punctuality + ") completing the task: " + title +".";

    console.log(message);

    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      SMS.sendSMSAsync("+33 7 81 89 83 78", message);
    } else {
      console.log("Failed to send notification to CEO");
    }
  };

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
            taskList.slice(0, -1).sort(function(a, b){return parseInt(a[2].substring(6) + a[2].substring(3, 5) + a[2].substring(0, 2)) - parseInt(b[2].substring(6) + b[2].substring(3, 5) + b[2].substring(0, 2))}).map((task) => 
            <TouchableOpacity key={task[0]} onLongPress={() => {notify(task[3].substring(2, task[3].length - 2), task[1].substring(2, task[1].length - 1), task[2].substring(2, task[2].length - 1));}} style={[styles.tasksCards, {backgroundColor: (task[3].substring(2, task[3].length - 2) === "Bastien") ? "red" : "#66f"}]}>
              <Text style={styles.taskTitle}>{task[1].substring(2, task[1].length - 1)}</Text>
              <Text style={styles.name}>{task[3].substring(2, task[3].length - 3)}</Text>
              <Text style={styles.date}>{task[2].substring(2, task[2].length - 1)}</Text>
            </TouchableOpacity>
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
    textAlign: "right",
    margin: "0.2%",
  },
});

export default Tasks;