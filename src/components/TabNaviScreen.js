import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from './news/screens/Homepage'
import DetailScreen from './news/screens/DetailScreen'
import Signup from './user/screens/Signup'
import { run } from 'jest'
import Explore from './news/screens/Explore'
import Bookmark from './news/screens/Bookmark'


const TabNaviScreen = (props) => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const screenOptions = ({route}) =>({
    headerShown:false,
    tabBarIcon:({focused,color,size})=>{
      let rn = route.name;
      if(focused){
        if(rn === 'Home'){
          return <Image style={{tintColor:'#1877F2'}} source={require('../assets/HomeIcon.png')}/>
        }else if(rn === 'Explore'){
          return <Image style={{tintColor:'#1877F2'}} source={require('../assets/ExploreIcon.png')}/>
        }else if(rn == 'Bookmark'){
          return <Image style={{tintColor:'#1877F2'}} source={require('../assets/BookmarkIcon.png')}/>
        }
      }
      else{
        if(rn === 'Home'){
          return <Image style={{tintColor:'black'}} source={require('../assets/HomeIcon.png')}/>
        }else if(rn === 'Explore'){
          return <Image style={{tintColor:'black'}}source={require('../assets/ExploreIcon.png')}/>
        }else if(rn === 'Bookmark'){
          return <Image style={{tintColor:'black'}}source={require('../assets/BookmarkIcon.png')}/>
        }
      }
    },
    tabBarLabel:({focused,color,size})=>{
      let rn = route.name;
      if(focused){
        if(rn === 'Home'){
          return <Text style={{color:'#1877F2', fontSize:15}}>Home</Text>
        }else if(rn === 'Explore'){
          return <Text style={{color:'#1877F2', fontSize:15}}>Explore</Text>
        }else if(rn === 'Bookmark'){
          return <Text style={{color:'#1877F2', fontSize:15}}>Bookmark</Text>
        }
      }
      else{
        if(rn === 'Home'){
          return <Text style={{color:'black', fontSize:15}}>Home</Text>
        }else if(rn === 'Explore'){
          return <Text style={{color:'black', fontSize:15}}>Explore</Text>
        }else if(rn === 'Bookmark'){
          return <Text style={{color:'black', fontSize:15}}>Bookmark</Text>
        }
      }
    }
  })
  return (
      <Tab.Navigator
      screenOptions={screenOptions}>
        <Stack.Screen component={Homepage} name='Home'/>
        <Stack.Screen component={Explore} name='Explore'/>
        <Stack.Screen component={Bookmark} name='Bookmark'/>
      </Tab.Navigator>
  )
}

export default TabNaviScreen

const styles = StyleSheet.create({})