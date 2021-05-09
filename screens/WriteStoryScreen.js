import React from 'react';
import {Text,View,TextInput, TouchableOpacity,Alert,KeyboardAvoidingView,StyleSheet,ToastAndroid} from 'react-native';
import db from '../config';
import firebase from 'firebase';
//import MyHeader from '../components/MyHeader';

export default class WriteStoryScreen extends React.Component{

constructor(){
    super()
this.state={
    Name:'',
    Story:'',
    StoryTitle:''
}
} 

submitStory = async ()=>{
db.collection("Writer").add({
    'Name':this.state.Name,
    'StoryTitle':this.state.StoryTitle,
    'Story':this.state.Story,
    'data':  firebase.firestore.Timestamp.now().toDate()
})
//Alert.alert("Your Story has been submitted")
ToastAndroid.show("Your Story has been submitted", ToastAndroid.SHORT);
}

    render(){
        return(
            <KeyboardAvoidingView>
    <View>
   <View>
    
        </View>

     <View>
     <TextInput style={{height:40,
     width:400,
     alignItems:'center',
     justifyContent:'center',
     textAlign:'center',
     margin:10,
     marginTop:10}}
     placeholder='Story Title'
     onChangeText={(text)=>{
        this.setState({
         StoryTitle: text
        })
      }} />
     </View>

     <View>
     <TextInput style={{height:40,
     width:400,
     alignItems:'center',
     justifyContent:'center',
marginTop:10,
textAlign:'center',
margin:10,}}
     placeholder='Author'
     onChangeText={(text)=>{
        this.setState({
         Name: text
        })
      }} />
     </View>

     <View>
     <TextInput style={{height:100,
     width:600,
     alignItems:'center',
     justifyContent:'center',
     margin:10,}}
     placeholder='Write Your Story'
     onChangeText={(text)=>{
        this.setState({
         Story: text
        })
      }} />
     </View>

     <View>
         <TouchableOpacity
         onPress={this.submitStory}>
             <Text style={{
            backgroundColor:'#1bb1b7',
            width:100,
            height:30,
            fontSize:23,
            margin:10,
            alignItems:'center',
            textAlign:'center',
            justifyContent:'center',
            borderRadius:15}}>
                 Submit
             </Text>
         </TouchableOpacity>
     </View>
    </View>
    </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
});