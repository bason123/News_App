import {StyleSheet, Text, View, Image, TouchableOpacity, Switch} from 'react-native';
import React, {useContext, useState} from 'react';
import {COLORS, FONTSTYLE, FONTWEIGHT} from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../user/UserContext';

const ProfileSettings = () => {
   const navigation = useNavigation();
   const {setUser} = useContext(UserContext);
   
  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View style={styles.viewContainerSettings}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Image source={require('../../../assets/IconBackLeft.png')} />
          </TouchableOpacity>
          <View style={styles.viewSettings}>
            <Text style={styles.textSettings}>Settings</Text>
          </View>
        </View>
        <View style={styles.viewContainerNotification}>
          <View style={styles.viewNotification}>
            <Image source={require('../../../assets/Notification.png')} />
            <Text style={[styles.textSettings, {marginStart: 4}]}>
              Notification
            </Text>
          </View>
          <View style={styles.viewImageRightIcon}>
            <Image source={require('../../../assets/RightIcon.png')} />
          </View>
        </View>
        <View style={[styles.viewContainerNotification, {marginTop: 48}]}>
          <View style={styles.viewNotification}>
            <Image source={require('../../../assets/Security.png')} />
            <Text style={[styles.textSettings, {marginStart: 4}]}>
              Security
            </Text>
          </View>
          <View style={styles.viewImageRightIcon}>
            <Image source={require('../../../assets/RightIcon.png')} />
          </View>
        </View>
        <View style={[styles.viewContainerNotification, {marginTop: 48}]}>
          <View style={styles.viewNotification}>
            <Image source={require('../../../assets/Help.png')} />
            <Text style={[styles.textSettings, {marginStart: 4}]}>Help</Text>
          </View>
          <View style={styles.viewImageRightIcon}>
            <Image source={require('../../../assets/RightIcon.png')} />
          </View>
        </View>
        <View style={[styles.viewContainerNotification, {marginTop: 48}]}>
          <View style={styles.viewNotification}>
            <Image source={require('../../../assets/DarkMode.png')} />
            <Text style={[styles.textSettings, {marginStart: 4}]}>
              Dark Mode
            </Text>
          </View>
          <View style={styles.viewImageRightIcon}>
            <Image source={require('../../../assets/ButtonDark.png')} />
          </View>
        </View>
        <View style={[styles.viewContainerNotification, {marginTop: 48}]}>
          <TouchableOpacity onPress={()=>{setUser(null)}}>
          <View style={styles.viewNotification}>
            <Image source={require('../../../assets/Logout.png')} />
            <Text style={[styles.textSettings, {marginStart: 4}]}>Logout</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  viewImageRightIcon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewNotification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainerNotification: {
    flexDirection: 'row',
    marginTop: 16,
  },
  textSettings: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 24,
    color: COLORS.title,
  },
  title: {
    fontStyle: FONTSTYLE.normal,
    letterSpacing: 0.12,
  },
  viewSettings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewContainerSettings: {
    flexDirection: 'row',
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
