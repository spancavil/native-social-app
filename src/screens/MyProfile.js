import React from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { firestoredb } from '../firebase/config';
import SinglePost from '../components/SinglePost';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MyProfile extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            loading : true,
            posts: []
        }
    }

    componentDidMount(){
        firestoredb.collection('posts')
        .where('username', '==', this.props.user.displayName)
        .orderBy('createdAt', 'desc')
        .onSnapshot( docs => {
            let postsAux=[];
            docs.forEach(doc => {
                const data = doc.data();
                postsAux.push({
                    id: doc.id,
                    comment: data.comment,
                    username: data.username,
                    likes: data.likes,
                    createdAt: data.createdAt,
                    photo: data.photo,
                    comments: data.comments,
                }) 
            })
        
            this.setState({
                posts: postsAux,
                loading: false
            })
        })
    }

    removePost(id){
        let postToRemove = firestoredb.collection('posts')
        .doc(id)
        .delete()
        .then(()=> {
            console.log("Post removed!");
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        console.log(this.state)
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Username:  
                    <Text style ={styles.innerText}> {this.props.user.displayName}</Text>
                </Text>
                <Text style={styles.text}>
                    Email: 
                    <Text style ={styles.innerText}> {this.props.user.email}</Text>
                </Text>
                <Text style={styles.text}>
                    Last login: 
                    <Text style ={styles.innerText}> {this.props.user.metadata.lastSignInTime}</Text>
                </Text>
                <Text style={styles.text}>
                    Created at: 
                    <Text style ={styles.innerText}> {this.props.user.metadata.creationTime}</Text>
                </Text>
                {   this.state.loading ?
                    <ActivityIndicator size='large' color='blue'/>
                    :
                    <FlatList
                        data={this.state.posts}
                        keyExtractor={ post => post.id}
                        renderItem={ ({item})=>{
                            return (
                                <>
                                <TouchableOpacity 
                                style = {styles.removeButton}
                                onPress={()=>this.removePost(item.id)}>
                                    <Text>Remove</Text>
                                </TouchableOpacity>
                                <SinglePost {...item}/>
                                </>
                            )
                        }
                    }
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EADCA6",
        height: '100%'
    },
    text:{
        fontFamily: "monospace",
        fontWeight: "500",
        fontSize: 15,
        paddingVertical: 10,
        paddingLeft: 5,
    },
    innerText:{
        fontFamily: "serif",
        fontWeight: "300",
        fontSize: 15,
        fontStyle: "italic"
    },
    removeButton:{
        textAlign: 'center',
        padding: 4,
        width: 70,
        borderRadius: 20,
        backgroundColor: 'rgb(220, 53, 69)',
    }
})