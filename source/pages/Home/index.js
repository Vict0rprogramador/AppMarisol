import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IoIosLogOut } from "react-icons/io";


export default function home() {
  return(
    <View>
    <TouchableOpacity style={styles.button}>
      <Text>Logout</Text>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: '#8B4513'
  },
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  })