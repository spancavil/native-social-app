import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native'
import Posts from '../components/Posts';
import { auth, firestoredb } from '../firebase/config';

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            loading: true,
        }
    }

    handleLogout(){
        auth.signOut()
        .then(()=>{
            alert('User sign out!');    
        })
    }
    
    componentDidMount(){
        firestoredb.collection("posts")
            .onSnapshot((querySnapshot) => { //En cada cambio de la collection se extrae el snapShot
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        const data = doc.data(); //Extraemos los datos del documento en cuestión
                        const arrayAux = this.state.posts.filter(post => post.createdAt !== data.createdAt) //Filtramos de nuestro estado a aquellos post que NO sea el repetido
                        const posteoRepetido = this.state.posts.find(post => post.createdAt === data.createdAt) //Encontramos el posteo repetido (si lo hubiera)
                        
                        //Si no hay posteos repetidos..
                        if (!posteoRepetido){
                            this.setState({
                                posts: this.state.posts.concat({
                                    comment: data.comment,
                                    username: data.username,
                                    likes: data.likes,
                                    createdAt: data.createdAt,
                                    photo: data.photo,
                                    comments: data.comments,
                                    id: doc.id
                                    }),
                                loading: false,
                            });
                        }

                        //Si encontramos un posteo repetido, actualizamos su array de likes
                        else {
                            posteoRepetido.likes = data.likes;
                            arrayAux.push(posteoRepetido);
                            this.setState({
                                posts: arrayAux,
                                loading: false,
                            })
                        }
                    })
            });
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style ={styles.containerInLine}>
                    <Text style ={styles.mainText}>{this.props.user.displayName}</Text>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {()=> this.handleLogout()}
                    >
                        <Text style = {styles.textButton}>
                            Sign out
                        </Text>
                    </TouchableOpacity>
                </View>
                {this.state.loading ?
                    <ActivityIndicator size='large' color='blue' style={styles.activity}/> :
                    <Posts posts = {this.state.posts}></Posts>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainText:{
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor:"#EADCA6",
        alignItems: 'center'
    },
    containerInLine: {
        width: '90%',
        flex: 1,
        paddingBottom: 30,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        padding: 10,
        width: 70,
        backgroundColor: "#6D9886",
        justifyContent: "center",
        borderRadius: 5,
        textAlign: "center",
        height: 30,
    },
    textButton: {
        fontSize: 12,
        color: "#212121",
    },
    activity:{
        position: 'absolute',
        top: 50,
    }
})