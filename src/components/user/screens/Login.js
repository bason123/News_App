import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTWEIGHT} from '../../../constants/theme';
import CheckBox from '@react-native-community/checkbox';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import Homepage from '../../news/screens/Homepage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../UserContext';
import {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../UserHTTP';

import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


const Login = props => {
  const navigation = useNavigation();
  const [ischeckbox, setcheckbox] = useState(true);
  const {setUser} = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [iconEye, setIConEye] = useState(false);
  // const [Remember, setRemember] = useState(false);

  const handleLogin = async () => {
    if (ischeckbox) {
      await AsyncStorage.setItem('Username', email);
      await AsyncStorage.setItem('Password', password);
    } else {
      await AsyncStorage.removeItem('Username');
      await AsyncStorage.removeItem('Password');
    }

    
    try {
      const result = await login(email, password);
      // lưu thông tin vào AsyncStoraga
      await AsyncStorage.setItem('token', result.data.token);
      // lưu thông tin user vào Context
      setUser(result.data.user);

      console.log('>>>>17', result.data.user);
    } catch (error) {
      console.log('......dong 37', error);
      ToastAndroid.show('login failed', ToastAndroid.SHORT);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy giá trị username và password từ AsyncStorage
        const storedUsername = await AsyncStorage.getItem('Username');
        const storedPassword = await AsyncStorage.getItem('Password');

        // Kiểm tra xem có giá trị hay không trước khi cập nhật
        if (storedUsername !== null) {
          setEmail(storedUsername);
        }

        if (storedPassword !== null) {
          setPassword(storedPassword);
        }
      } catch (error) {
        console.error('Error reading data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  const togglecheckbox = () => {
    setcheckbox(!ischeckbox);
  };

  // facebook---------------------------

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  async function _signInWithFaceBook(){
    let cred = await onFacebookButtonPress();
      console.log('cred', cred);
    
  }
  // facebook---------------------------


  return (
    <KeyboardAvoidingView style={styles.backgroudContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.viewTitle}>
            <Text style={[styles.textHello, styles.title]}>Hello</Text>
            <Text style={[styles.textAgain, styles.title]}>Again!</Text>
          </View>
          <View style={styles.subTitle}>
            <Text style={[styles.title, styles.textSubTitle]}>
              Welcome back you’ve been missed
            </Text>
          </View>
          <View style={styles.viewUsername}>
            <Text style={[styles.title, styles.textUsername_Password]}>
              Username
            </Text>
            <View style={styles.viewTextInputPassword}>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Username"
                style={[styles.title, styles.textInputUsername]}
              />
            </View>
          </View>
          <View style={styles.viewPassword}>
            <Text style={[styles.title, styles.textUsername_Password]}>
              Password
            </Text>
            <View style={styles.viewTextInputPassword}>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!iconEye}
                placeholder="Password"
                style={[styles.title, styles.textInputPassword]}
              />
              <TouchableOpacity
                onPress={() => {
                  setIConEye(!iconEye);
                }}>
                <Image
                  source={
                    iconEye
                      ? require('../../../assets/Icon.png')
                      : require('../../../assets/IconHide.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewCheckBox}>
            <View style={styles.viewRemember}>
              <CheckBox
                tintColors={{true: '#1877F2', false: 'back'}}
                value={ischeckbox}
                onValueChange={() => setcheckbox(!ischeckbox)}
              />
              <Text
                style={[
                  styles.title,
                  styles.textRemenber_Forgot,
                  styles.textRemember,
                ]}>
                remember me
              </Text>
            </View>
            <View style={styles.viewForgot}>
              <Text
                style={[
                  styles.title,
                  styles.textRemenber_Forgot,
                  styles.textForgot,
                ]}>
                Forgot the password?
              </Text>
            </View>
          </View>
          <View>
            {/* onPress={()=>{setUser(true)}}  */}
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.touchableOpacityLogin}>
              <Text style={[styles.title, styles.textLogin]}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewContinue}>
            <Text style={styles.textContinue}>or continue with</Text>
          </View>
          <View style={styles.viewSocialnetwork}>
          {/* onPress={()=> _signInWithFaceBook()} */}
            <TouchableOpacity onPress={()=> _signInWithFaceBook()} style={styles.touchableOpacitySocialnetwork}>
              <Image
                style={styles.imgSocialnetwork}
                source={require('../../../assets/fb.png')}
              />
              <Text style={[styles.title, styles.textSocialnetwork]}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacitySocialnetwork}>
              <Image
                style={styles.imgSocialnetwork}
                source={require('../../../assets/gg.png')}
              />
              <Text style={[styles.title, styles.textSocialnetwork]}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewAccount}>
            <Text
              onPress={() => {
                navigation.navigate('Signup');
              }}
              style={styles.textAccount}>
              don’t have an account ?
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textForgot: {
    color: '#5890FF',
  },
  textRemember: {
    color: '#4E4B66',
  },
  textRemenber_Forgot: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
  },
  viewRemember: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  viewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAccount: {
    fontSize: 14,
    color: '#667080',
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
  },
  viewAccount: {
    marginTop: 16,
    alignItems: 'center',
  },
  imgSocialnetwork: {
    marginEnd: 10,
  },
  textSocialnetwork: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
  },
  touchableOpacitySocialnetwork: {
    flexDirection: 'row',
    height: 48,
    width: '46%',
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSocialnetwork: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContinue: {
    fontSize: 14,
    color: '#4E4B66',
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
  },
  viewContinue: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 16,
    fontWeight: FONTWEIGHT.six_hundred,
    lineHeight: 24,
    color: '#FFF',
  },
  touchableOpacityLogin: {
    backgroundColor: '#1877F2',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  imagePassword: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  textInputPassword: {
    fontSize: 14,
    color: COLORS.title,
    fontWeight: '400',
    lineHeight: 21,
    flex: 1,
    marginEnd: 10,
  },
  viewTextInputPassword: {
    borderRadius: 6,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4E4B66',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  viewPassword: {
    marginTop: 16,
  },
  textInputUsername: {
    fontSize: 14,
    color: COLORS.title,
    fontWeight: '400',
    lineHeight: 21,
    flex: 1,
  },
  textUsername_Password: {
    fontSize: 14,
    fontWeight: FONTWEIGHT.four_hundred,
    lineHeight: 21,
    color: '#4E4B66',
  },
  viewUsername: {
    marginTop: 48,
  },
  textSubTitle: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    color: '#4E4B66',
  },
  subTitle: {
    width: 222,
  },
  title: {
    // fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    letterSpacing: 0.12,
  },
  textAgain: {
    color: '#1877F2',
    lineHeight: 72,
    fontWeight: '700',
    fontSize: 48,
  },
  textHello: {
    color: '#050505',
    lineHeight: 72,
    fontWeight: '700',
    fontSize: 48,
  },
  viewTitle: {
    width: 167,
    height: 144,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    // width: '100%',
    // height: '100%',
  },
  backgroudContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
