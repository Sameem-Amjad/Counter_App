import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Button, Text, Alert, View,TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
function App(): JSX.Element {
  
  const increment = () => {
    if (number >= 0) {
      setnumber(number + 1);
    }
  };
  const decrement = () => {
    if (number > 0) {
      setnumber(number - 1);
    } else {
      ToastAndroid.showWithGravity("Number must be greater than 0", 0.02,-48)
    }
  };
  const [number, setnumber] = useState(0);

  return (
    
    <View style={myStyle.mainView}>
      <View style={myStyle.TextView}>
        <Text style={myStyle.text}> Counter App</Text>
      </View>
      <View style={myStyle.counterView}>
        <TouchableOpacity style={myStyle.button} onPress={decrement}>
          <Text style={myStyle.text2}>-</Text>
        </TouchableOpacity>
        <Text style={myStyle.text}> {number}</Text>
        <TouchableOpacity style={myStyle.button} onPress={increment}>
          <Text style={myStyle.text2}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const myStyle = StyleSheet.create({
  mainView: {flex: 1, flexDirection: 'column', backgroundColor: 'skyblue'},
  TextView: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {fontSize: 35, fontWeight: '800', alignSelf: 'center', color: 'white'},
  counterView: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderColor: 'white',
    width: '18%',
    backgroundColor: 'white',
  },
  text2: {
    color: 'skyblue',
    fontSize: 35,
    fontWeight: '800',
    alignSelf: 'center',
  },
});

export default App;
