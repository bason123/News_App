/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import OnboardingScreen from './src/components/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNaviScreen from './src/components/StackNaviScreen';
import TabNaviScreen from './src/components/TabNaviScreen';
import Forgotpassword2 from './src/components/Forgotpassword2';
import ManHinh8 from './src/components/Test3';
import AppNavigation from './src/components/navigations/AppNavigation';
import { UserProvider } from './src/components/user/UserContext';
import DetailScreenNewArticles from './src/components/news/screens/DetailScreenNewArticles';
import Test6 from './src/components/Test6';
import EditProfile from './src/components/news/screens/EditProfile';
import Profile from './src/components/news/screens/Profile';
import NewsDetailScreen from './src/components/news/screens/NewsDetailScreen';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
      {/* <NewsDetailScreen/> */}
    </SafeAreaView>
    
  );
}
