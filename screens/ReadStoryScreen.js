import React from 'react';
import { Text, View,FlatList,StyleSheet,TouchableOpacity, Touchable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import { set } from 'react-native-reanimated';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allStories:[],
      BookName:'',
          BookAuthor:'',
    }
  }
 
  updateSearch = (BookName) => {
    this.setState({ BookName });
  };


  SearchBook = async ()=>{
    db.collection("Books").add({
        'BookName': this.state.BookName
    })
    }

  retrieveStories=()=>{
    try {
      var allStories= []
      var stories = db.collection("Books")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
              
              allStories.push(doc.data())
              console.log('this are the stories',allStories)
          })
          this.setState({allStories})
        })
    }
    catch (error) {
      console.log(error);
    }
  };

  componentDidMount(){
    this.retrieveStories()
  }

    render(){
        return(
            <View>

<View>

        <Text style={{backgroundColor:'#1bb1b7',
        textAlign:'center',
        justifyContent:'center',
        height:40,
        fontSize:30,
        color:'white',
        fontWeight:'bold'}}>STORY HUB</Text>
        </View>

        <View>
        <TextInput style={styles.bar}  
     placeholder='Search Book'
     onChangeText={(text)=> {
     this.setState({
     BookName:text
     })
     }  
     }
/>

<TouchableOpacity style={styles.searchbar}
onPress={()=>
{
  this.SearchBook();
}}>
  <Text>SEARCH</Text>
</TouchableOpacity>

        </View>

                 <FlatList
                    data={this.state.allStories}
                    renderItem={({ item }) => (
                      <View style={styles.itemContainer}>
                        <Text>Title: {item.title}</Text>
                    <Text>Author : {item.author}</Text>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },item: {
    backgroundColor: '#1bb1b7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
   itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: '#1bb1b7',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  searchbar:{
    backgroundColor:'#1bb1b7',
    width:100,
    height:30,
    fontSize:23,
    margin:10,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    borderRadius:15
}
});