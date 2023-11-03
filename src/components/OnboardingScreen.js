import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZE, FONTWEIGHT} from '../constants/theme';
import Login from './user/screens/Login';
import AppNavigation from './navigations/AppNavigation';
import StackNaviScreen from './StackNaviScreen';
import { UserProvider } from './user/UserContext';

const slides = [
  {
    image: require('../assets/img1.png'),
    title: 'Lorem Ipsum is simply dummy',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    image: require('../assets/img2.png'),
    title: 'Lorem Ipsum is simply dummy',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    image: require('../assets/img3.png'),
  },
];

export default function OnboardingScreen() {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = label => {
    return (
      <View style={styles.viewButton}>
        <Text style={styles.textNext}>{label}</Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
              }}>
              <Image
                source={item.image}
                style={{width: SIZE.width, height: '59%'}}
              />
              <Text
                style={{
                  fontWeight: '700',
                  color: COLORS.title,
                  fontSize: SIZE.title,
                  marginTop: 24,
                  paddingStart: 24,
                  width: 318,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  paddingStart: 24,
                  color: COLORS.subtitle,
                  fontSize: SIZE.h4,
                  width: 318,
                }}>
                {item.subtitle}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
        }}
        showPrevButton
        renderNextButton={() => buttonLabel('Next')}
        renderPrevButton={() => buttonLabel('Back')}
        renderDoneButton={() => buttonLabel('Get Started')}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }

  return (
    <View style={{flex: 1}}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  textNext: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});
