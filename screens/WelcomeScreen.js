import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      FirstName: '',
      LastName: '',
      Address: '',
      Contact: '',
      ConfirmPassword: '',
      isModalVisible: 'false',
    };
  }

  userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
      this.props.navigation.navigate('WriteStoryScreen')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (username, password,confirmPassword) =>{
    if(password !== confirmPassword){
        return Alert.alert("password doesn't match\nCheck your password.")
    }else{
      firebase.auth().createUserWithEmailAndPassword(username, password)
      .then((response)=>{
        db.collection('Users').add({
          FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Contact: this.state.Contact,
            emailId: this.state.emailId,
            Address: this.state.Address,
        })
        return  Alert.alert(
             'User Added Successfully',
             '',
             [
               {text: 'OK', onPress: () => this.setState({"isVisible" : false})},
             ]
         );
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      });
    }

  }

 
  ShowModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.ModalTitle}>Registration</Text>

              <TextInput
                style={styles.FormInput}
                placeholder={'First Name'}
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({
                    FirstName: text,
                  });
                }}
              />

              <TextInput
                style={styles.FormInput}
                placeholder={'Last Name'}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    LastName: text,
                  });
                }}
              />

              <TextInput
                style={styles.FormInput}
                placeholder={'Contact'}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    Contact: text,
                  });
                }}
              />

              <TextInput
                style={styles.FormInput}
                placeholder={'Address'}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    Address: text,
                  });
                }}
              />

              <TextInput
                style={styles.FormInput}
                placeholder={'EmailId'}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />

              <TextInput
                style={styles.FormInput}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />

              <TextInput
                style={styles.FormInput}
                placeholder={'Confrim Password'}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    ConfirmPassword: text,
                  });
                }}
              />

              <View style={styles.Modalbackbutton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.ConfirmPassword
                    );
                  }}>
                  <Text style={styles.buttonText}>Resgister</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Modalbackbutton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                    this.setState({ isModalVisible: false });
                  }}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.title}>Barter System</Text>
          </View>
          {this.ShowModal()}

          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 130,
              height: 130,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="example@booksanta.com"
            placeholderTextColor="#ffff"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="#ffff"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1bb9b9',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    paddingBottom: 30,
    color: 'white',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: 'white',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#1bb1b7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    borderColor: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1ab1b1',
    margin: 20,
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    margin: 50,
  },
  FormInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1.5,
    marginTop: 10,
    padding: 20,
  },
  registerButton: {
    width: 100,
    height: 35,
    borderRadius: 20,
    borderColor: 'red',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '200',
    color: 'white',
  },
});
