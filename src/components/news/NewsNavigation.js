import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Bookmark from './screens/Bookmark';
import DetailScreen from './screens/DetailScreen';
import Explore from './screens/Explore';
import Homepage from './screens/Homepage';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import { COLORS } from '../../constants/theme';
import ProfileSettings from './screens/ProfileSettings';
import DetailScreenNewArticles from './screens/DetailScreenNewArticles';
import Search from './screens/Search';
import News_tabview from './screens/News_tabview';
import Topics_tabview from './screens/Topics_tabview';
import Author_tabview from './screens/Author_tabview';
import TabViewSearch from './screens/TabViewSearch';
import Author_Profile from './screens/Author_Profile';


const NewsNavigation = () => {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let rn = route.name;
      if (focused) {
        if (rn === 'Home') {
          return <Image style={{ tintColor: COLORS.primary }} source={require('../../assets/HomeIcon.png')} />
        } else if (rn === 'Explore') {
          return <Image style={{ tintColor: COLORS.primary }} source={require('../../assets/ExploreIcon.png')} />
        } else if (rn === 'Bookmark') {
          return <Image style={{ tintColor: COLORS.primary }} source={require('../../assets/BookmarkIcon.png')} />
        } else if (rn === 'Profile') {
          return <Image style={{ tintColor: COLORS.primary }} source={require('../../assets/ProfileIcon.png')} />
        }
      }
      else {
        if (rn === 'Home') {
          return <Image style={{ tintColor: COLORS.title }} source={require('../../assets/HomeIcon.png')} />
        } else if (rn === 'Explore') {
          return <Image style={{ tintColor: COLORS.title }} source={require('../../assets/ExploreIcon.png')} />
        } else if (rn === 'Bookmark') {
          return <Image style={{ tintColor: COLORS.title }} source={require('../../assets/BookmarkIcon.png')} />
        } else if (rn === 'Profile') {
          return <Image style={{ tintColor: COLORS.title }} source={require('../../assets/ProfileIcon.png')} />
        }
      }
    },
    tabBarLabel: ({ focused, color, size }) => {
      let rn = route.name;
      if (focused) {
        if (rn === 'Home') {
          return <Text style={{ color: COLORS.primary, fontSize: 15 }}>Home</Text>
        } else if (rn === 'Explore') {
          return <Text style={{ color: COLORS.primary, fontSize: 15 }}>Explore</Text>
        } else if (rn === 'Bookmark') {
          return <Text style={{ color: COLORS.primary, fontSize: 15 }}>Bookmark</Text>
        } else if (rn === 'Profile') {
          return <Text style={{ color: COLORS.primary, fontSize: 15 }}>Profile</Text>
        }
      }
      else {
        if (rn === 'Home') {
          return <Text style={{ color: COLORS.title, fontSize: 15 }}>Home</Text>
        } else if (rn === 'Explore') {
          return <Text style={{ color: COLORS.title, fontSize: 15 }}>Explore</Text>
        } else if (rn === 'Bookmark') {
          return <Text style={{ color: COLORS.title, fontSize: 15 }}>Bookmark</Text>
        } else if (rn === 'Profile') {
          return <Text style={{ color: COLORS.title, fontSize: 15 }}>Profile</Text>
        }
      }
    }
  })
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName='Home'>
      <Tab.Screen component={Homepage} name='Home' />
      <Tab.Screen component={Explore} name='Explore' />
      <Tab.Screen component={Bookmark} name='Bookmark' />
      <Tab.Screen component={Profile} name='Profile' />
    </Tab.Navigator>
  )
}


const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName='NewsNavigation'>
      <Stack.Screen
        options={{ headerShown: false }}
        name='NewsNavigation'
        component={NewsNavigation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Homepage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='DetailScreen'
        component={DetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='EditProfile'
        component={EditProfile} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='ProfileSettings'
        component={ProfileSettings} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='DetailScreenNewArticles'
        component={DetailScreenNewArticles} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Search'
        component={Search} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='News_tabview'
        component={News_tabview} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Topics_tabview'
        component={Topics_tabview} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Author_tabview'
        component={Author_tabview} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='TabViewSearch'
        component={TabViewSearch} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Profile_Author'
        component={Profile} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Author_Profile'
        component={Author_Profile} />

    </Stack.Navigator>
  )
}

export default HomeStack