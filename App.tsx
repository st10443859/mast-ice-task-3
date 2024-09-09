import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { WorkoutDetails } from './types';

export default function App() {
  // useState hook is used to manage the state of variables that are going to change
  const [workouts, setWorkouts] = useState<WorkoutDetails[]>([]); // workout holds the array of workouts
  const [workOutName, setWorkOutName] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [exerciseType, setType] = useState<string>('');
  const [calories, setCalories] = useState<string>('');

  // array holding a predefined list of exercise types
  const ExerciseTypes = ['Cardio', 'Strength', 'Flexibility', 'Balance', 'HIIT'];

  // function adds the new workout details to the workouts array
  const handleSubmit = () => {
    if (workOutName && duration && exerciseType &&  exerciseType && calories) {
      const newWorkout: WorkoutDetails = { // creates a new workout object
        workout_Name: workOutName, // user input for the new workout added to the new object
        duration: parseInt(duration), // duration is numeric, so we need to convert
        exercise_Type: exerciseType, // selected value for exercise type from the picker
        calories: parseInt(calories), // calories is numeric, so we need to convert
      };

      setWorkouts([...workouts, newWorkout]); // updating the workouts list with the newly added workout object
      setWorkOutName('');
      setDuration('');
      setType('');
      setCalories('');
    }
  };

  const totalWorkouts = workouts.length; // holds the total amount of workouts in the list

  return (
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.trackerName}>Fitness Tracker</Text>
      </View>

      <View style={styles.listView}>
        <FlatList
          style={styles.listStyle}
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.workName}>Workout Name: {item.workout_Name}</Text>
              <Text style={styles.otherDetails}>Duration: {item.duration} min</Text>
              <Text style={styles.otherDetails}>Workout Type: {item.exercise_Type}</Text>
              <Text style={styles.otherDetails}>Calories Burnt: {item.calories}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Workout name"
          value={workOutName}
          onChangeText={setWorkOutName}
        />

        <TextInput
          style={styles.input}
          placeholder="Duration (min)"
          value={duration}
          onChangeText={setDuration}
          inputMode ="numeric"
        />

        <Picker
          selectedValue={ExerciseTypes}
          onValueChange={(itemValue) => setExerciseType(itemValue)}
          style={styles.input}
        >
          {ExerciseTypes.map((type) => (
            <Picker.Item label={type} value={type} key={type} />
          ))}
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Calories burnt"
          value={calories}
          onChangeText={setCalories}
          inputMode='numeric'
        />

        <TouchableHighlight onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: '#808505',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    width: '100%',
  },
  trackerName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#5B3E96',
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listView: {
    marginTop: -30,
    width: '100%',
    height: 500,
    borderRadius: 10,
    backgroundColor: '#ECECEC',
  },
  summaryHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#583E96',
  },
  summaryContainer: {
    backgroundColor: '#ECECEC',
    padding: 15,
    borderRadius: 10,
    marginTop: -50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  WorkoutImage:{
    width: 60,
    height: 60,
    marginLeft: 250,
    marginTop: -90,
    marginStart: 250
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#808505',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  listStyle: {
    maxHeight: 800,
  },
  itemContainer: {
    flex: 1,
    padding: 20,
    marginVertical: 5,
    marginBottom: 40,
    backgroundColor: 'white',
  },
  workName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#583696',
  },
  heading:{
    fontSize:30,
    fontWeight:"bold",
    color: "purple"
  },
  separator: {
    height:20,
  },
  otherDetails: {
    color: '#583696',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInputView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 5,
    backgroundColor: '#C8C3E3',
    padding: 15,
    marginTop: 60,
    marginBottom: 40,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: 'black',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 40, // for rounded corners
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
