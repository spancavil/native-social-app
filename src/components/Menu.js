import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import { auth } from '../firebase/config';
import CreatePost from '../screens/CreatePost';
import MyProfile from '../screens/MyProfile';

export default class Menu extends React.Component{

    constructor (props){
        super(props);
        this.state = {
          usuario: null
        }
      }
    
    componentDidMount(){
        auth.onAuthStateChanged( user => {
            if (user){
            this.setState({usuario: user})
            } else {
            console.log("No hay usuario loggeado");
            this.setState({usuario: null})
            }
        })
    }

    render(){
        
        const Drawer = createDrawerNavigator()

        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                {this.state.usuario &&
                <>
                    <Drawer.Screen name="Home">
                    { (props)=> <Home {...props} user = {this.state.usuario}/>  }
                    </Drawer.Screen>
                    <Drawer.Screen name="My Profile">
                    { props => <MyProfile {...props } user ={this.state.usuario}/> }
                    </Drawer.Screen>
                    <Drawer.Screen name="Create Post">
                    { (props)=> <CreatePost {...props} user = {this.state.usuario}/>  }
                    </Drawer.Screen>
                </>
                }
                {!this.state.usuario && 
                <>
                    <Drawer.Screen name="Login" component={Login} />
                    <Drawer.Screen name="Register" component={Register} />
                </>
                }
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}