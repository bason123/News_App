import React, {useContext, useEffect, useState} from 'react';

import UserNavigation from '../user/UserNavigation';
import NewsNavigation from '../news/NewsNavigation';

import {UserContext} from '../user/UserContext';

import {NavigationContainer} from '@react-navigation/native';

const AppNavigation = props => {
  const {user} = useContext(UserContext);
  // user: null chưa login
  
  return (
    <NavigationContainer>
      {user ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
