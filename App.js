import {Text, View, TextInput, Button, Alert} from 'react-native';
import Logo from ' ./components/Logo';
import React, {useState} from 'react';

export default function App(){
  const [fullname, setFullname] = useState("Joe ");
  const [lname, setLname] = usestate("Bloggs ");
  const [dob, setDob] = useState("22 August 1990 ");

  Function buttonClicked() {
    Alert.alert("Hello" + fname + lname + dob);
  }
  return(
    <View> 
     <Logo/>
    <TextInput placeholder="Enter your firstname" onChangeText={(val)} =>
     setFname(val)}/>
     <TextInput placeholder="Enter your lastname" onChangeText={(val)} =>
       setLname(val)}/>
         <TextInput placeholder="Enter your date of birth" onChangeText={(val)} =>
         setDob(val)}/>
           
      <Text>Hello, {fname} {lname}. You were born on {dob}</Text>
      <Button title="SUBMIT" onPress={buttonClicked}/>
    </View>
  )
}




