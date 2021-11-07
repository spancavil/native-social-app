import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, FlatList, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EmptyHeart from '../../assets/svg/EmptyHeart';
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import { auth, firestoredb } from '../firebase/config';
import firebase from 'firebase/app';

export default class SinglePost extends Component{
    constructor (props){
        super(props);
        this.state = {
            showModal:false,
            comment:'',
            message: '',
            comments: this.props.comments,
            liked: false,
        }
    }

    handleLike(fecha){
        const usuario = auth.currentUser.displayName;
        firestoredb.collection('posts').where('createdAt', '==', fecha).limit(1).get().then(query => {
            const post = query.docs[0];
            let postToUpdate = post.data();
            const user = postToUpdate.likes.find(user=> user === usuario)
            
            if (!user) {
                postToUpdate.likes.push(usuario);
                post.ref.update(postToUpdate);
                this.setState({
                    liked: true
                })
            }
            else {
                postToUpdate.likes = postToUpdate.likes.filter(user => user !==usuario )
                post.ref.update(postToUpdate);
                this.setState({
                    liked: false
                })
            }
        });
    }

    componentDidMount(){
        const usuario = auth.currentUser.displayName;
        firestoredb.collection('posts').where('createdAt', '==', this.props.createdAt).limit(1).get().then(query => {
            const post = query.docs[0];
            let actualPost = post.data();
            const user = actualPost.likes.find(user=> user === usuario)
            if (!user) {
                return
            }
            else {
                this.setState({
                    liked: true
                })
            }
        })
    }

    //Muestra el modal
    showModal(){
        console.log('Mostrando modal')
        this.setState({
            showModal: true,
        })
    }
    
    //Cierra el modal
    closeModal(){
        console.log('Cerrando modal')
        this.setState({
            showModal: false,
        })
    }
    
    //Guarda comentarios en la colección.
    saveComment(){
        let thisDoc = firestoredb.collection('posts').doc(this.props.id);
        let thisComment = {
            author: auth.currentUser.email,
            comment: this.state.comment,
            createdAt: Date.now()
        }
        thisDoc.update(
            { comments: firebase.firestore.FieldValue.arrayUnion(thisComment)}
            //ArrayUnion https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
        )
        .then( ()=> {
            this.setState({
                message: 'Comment sent',
                comments: this.state.comments.concat(thisComment),
                comment: ''
            })
        })
        .catch(e => {
            this.setState({
                comment:'',
                message: e.message
            })
        })
    }
    render(){
        console.log(this.props);
        return(
            <View style = {styles.container}>
                <Image
                source = {{uri: this.props.photo}}
                style = {styles.photo}
                resizeMode = "cover"
                />
                <Text style={styles.comment}>{this.props.comment}</Text>
                <Text style={styles.like}>{this.props.likes.length} like</Text>
                <View style = {styles.inline}>
                    <Text style={styles.like}>{this.props.username}</Text>
                    <Text style={styles.like}>{Math.floor((Date.now() - this.props.createdAt)/(1000 * 3600))} hours ago</Text>
                </View>
                <TouchableOpacity style = {styles.inline} onPress={()=> this.handleLike(this.props.createdAt)}>
                    {!this.state.liked?
                    <>
                        <FontAwesomeIcon 
                        icon={faHeart}
                        color="red"
                        />
                        <Text style={styles.like}>like</Text>
                    </>
                    :
                    <>
                        <EmptyHeart
                        color ="red"
                        />
                        <Text style={styles.like}>unlike</Text>
                    </>
                }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.showModal()}>
                        <Text style={styles.like}>Ver comentarios</Text>
                    </TouchableOpacity>
                    {/* Modal de comentarios */}
                    {
                        this.state.showModal?
                        <Modal style={styles.modalContainer}
                            visible={this.state.showModal}
                            animationType="fade"
                            transparent={false}
                        >
                            {/* Botón de cierre del modal */}
                            <TouchableOpacity style={styles.closeModal} onPress={()=>{this.closeModal()}}>
                                <Text style={styles.modalText} >X</Text>
                            </TouchableOpacity>
    
                            {/* Flatlist para mostrar los comentarios del post */}
                            <FlatList style={styles.comments}
                                    data={this.state.comments}
                                    keyExtractor={ comment => comment.createdAt.toString()}
                                    renderItem={ ({item})=>
                                                <View>
                                                    <Text style={styles.like}>{item.author} {item.comment} {Math.floor((Date.now() - item.createdAt)/(1000 * 3600))} hours ago</Text>
                                                </View>
                                                }
                            />

                            {/* Formulario para nuevo comentario */}
                            <View style={styles.formContainer}>
                                <TextInput
                                    style={styles.multilineInput}
                                    onChangeText={(text)=>this.setState({comment: text})}
                                    placeholder='Dejá tu comentario'
                                    keyboardType='default'
                                    multiline
                                    value={this.state.comment}
                                    />
                                <TouchableOpacity style={styles.button} onPress={()=>this.saveComment()}>
                                    <Text style={styles.textButton}>Enviar comentario</Text>    
                                </TouchableOpacity>
                                {this.state.message && <Text>{this.state.message}</Text>}
                            </View>
                        </Modal>
                        :
                        null
                    }
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    photo:{
        height: 150,
    },
    container: {
        backgroundColor: "#e3ce7c",
        marginVertical: 10,
        padding: 10,
        flexDirection: 'column',
        justifyContent: "flex-start",
        width: 350
    },
    inline: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    },
    comment: {
        paddingTop: 5,
        fontSize: 14,
        fontFamily: "monospace",
        fontWeight: 400
    },
    like: {
        paddingVertical: 3,
        fontSize: 12,
        fontFamily: 'serif',
    },
    multilineInput:{
        height:50,
        paddingVertical:5,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical:10,
    },
    button:{
        backgroundColor:'#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: '#28a745'
    },
    modalContainer:{
        border: 'none',
        width: '100%'
    },
    textButton:{
        color: '#fff'
    },
    closeModal:{
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: '#dc3545',
        marginTop:2,
        marginBotom: 10,
        borderRadius: 4,
    },
    modalText:{
        fontWeight: 'bold',
        color:'#fff',
    },
    comments:{
        alignItems: 'flex-start',
    }
})