import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import MyCamera from '../components/MyCamera';
import { auth, firestoredb, storage } from '../firebase/config';


export default class CreatePost extends Component{

    constructor(props){
        super(props);
        this.state = {
            comment: "",
            photo: '',
            error: '',
        }
    }

    handlePost(){
        firestoredb.collection('posts').add(
            {
                comment: this.state.comment,
                username: auth.currentUser.displayName,
                createdAt: Date.now(),
                photo: this.state.photo,
                likes: [],
                comments: [],
            })
        .then(response => {
            console.log(response)
            this.setState({
                comment: "",
                photo: '',
            })
            this.props.navigation.navigate('Home')
        })
        .catch(error => {
            console.log(error);
            this.setState({
                error
            })
        })

    }

    savePhoto(photo){
        this.setState({
            photo
        })
    }
    
    render() {
        
        return (
        <>
            {!this.state.photo ?
            <MyCamera savePhoto={(photo)=> this.savePhoto(photo)}></MyCamera>
            :
            <View style = {styles.container}>
                <Text>
                    Submit!
                </Text>
                <Image
                style = {styles.preview}
                source = {{uri: this.state.photo}}
                />
                <TextInput style = {styles.input}
                    placeholder = "Your comment"
                    blurOnSubmit = {true}
                    multiline = {true}
                    numberOfLines = {3}
                    onChangeText = {text => this.setState({comment: text})}
                    value={this.state.comment}
                />
                
                {this.state.error && <Text>{this.state.error}</Text>}
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {()=> this.handlePost ()}
                >
                    <Text style = {styles.textButton}>
                        Post
                    </Text>
                </TouchableOpacity>
            </View>
        
        }
        </>
        )
    }
}

const styles = StyleSheet.create ({
container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor:"#EADCA6",
    alignItems: 'center'
},
input: {
    padding: 10,
    width: '80%',
    backgroundColor: "#212121",
    borderColor: "white",
    borderWidth: 2,
    color: "#D9CAB3",
    marginVertical: 4,
    fontFamily: 'Oswald'
},
button: {
    marginTop: 30,
    padding: 10,
    width: '40%',
    backgroundColor: "#6D9886",
    justifyContent: "center",
    borderRadius: 5,
    textAlign: "center",
    height: 80,
},
textButton: {
    fontSize: 25,
    color: "#212121",
},
preview: {
    flex: 6,
    width: "100%"
}
})