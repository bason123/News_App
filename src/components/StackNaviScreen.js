import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { UserProvider } from './user/UserContext';
import AppNavigation from './navigations/AppNavigation';
const StackNaviScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
      <UserProvider>
        <AppNavigation />
      </UserProvider> 
  );
};

export default StackNaviScreen;

const styles = StyleSheet.create({});
