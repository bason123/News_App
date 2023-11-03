import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getUpdateImage} from '../NewsHTTP';
import {getAddArticles} from '../NewsHTTP';
import {useNavigation} from '@react-navigation/native';

const DetailScreenNewArticles = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [avater, setAvatar] = useState('');

  const hanlderDtailScreenNewArticles = async () => {
    if (
      title.trim().length > 0 &&
      content.trim().length > 0 &&
      image.trim().length > 0
    ) {
      try {
        const result = await getAddArticles(title, content, image);
        // Alert.alert('Success', 'Add success');
        ToastAndroid.show('Thêm bài thành công', ToastAndroid.SHORT);
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      ToastAndroid.show('Thêm đầy đủ dữ liệu', ToastAndroid.SHORT);
    }
  };
  //ẩn hiện model
  const [modalVisible, setModelVisible] = useState(false);

  const hidderMODAL = () => {
    openCamera;
    setModelVisible(false);
  };

  /// xử lý hình ảnh
  const takePhoto = useCallback(async response => {
    if (response.didCancel) return;
    if (response.errorCode) return;
    if (response.errorMessage) return;
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      setAvatar(asset.uri);
      // setShow(false);
      // upload image
      const formData = new FormData();
      formData.append('image', {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName,
      });
      const result = await getUpdateImage(formData);
      console.log('>>>>>upload image: ', result.data.path);
      setImage(result.data.path);
    }
  }, []);
  //hiển thị camera
  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
  }, []);

  //hiển thị thư viện
  const openLibrary = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchImageLibrary(options, takePhoto);
  }, []);

  const onPress = () => {};
  return (
    <View style={styles.backgroudContainer}>
      <KeyboardAvoidingView style={styles.backgroudContainer}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image source={require('../../../assets/IconBackLeft.png')} />
              </TouchableOpacity>
              <Text style={styles.textCreateNews}>Create News</Text>
              <Image
                source={require('../../../assets/Icon3dotsvertical.png')}
              />
            </View>
            <View style={styles.viewAddCoverPhoto}>
              {image.length < 1 ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setModelVisible(true);
                    }}>
                    <Image source={require('../../../assets/AddCover.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setModelVisible(true);
                    }}>
                    <Text>Add Cover Photo</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {image && (
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 6}}
                  source={{uri: image}}
                />
              )}
            </View>
            <View style={styles.viewContainerNewsTitle}>
              <TextInput
                style={styles.textNewsTitle}
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="News title"
                placeholderTextColor={'#A0A3BD'}
              />
            </View>
            <View style={styles.viewAddNews}>
              <TextInput
                style={styles.textInputAddNews}
                value={content}
                onChangeText={text => setContent(text)}
                placeholder="Add News/Article"
                placeholderTextColor={'#A0A3BD'}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View>
        <View style={styles.viewTypeLetter}>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <Image source={require('../../../assets/IconB.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <Image source={require('../../../assets/IconI.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <Image source={require('../../../assets/IconNumberType.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <Image source={require('../../../assets/IconTypeDots.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 24, height: 24}}>
            <Image source={require('../../../assets/Icongach.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewContainerIcon}>
          <TouchableOpacity>
            <Image source={require('../../../assets/ImageFont.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{marginStart: 10}}
              source={require('../../../assets/IconAlignment.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openLibrary}>
            <Image
              style={{marginStart: 10}}
              source={require('../../../assets/IconImage.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{marginStart: 10}}
              source={require('../../../assets/Icon3dots.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={hanlderDtailScreenNewArticles}>
          <Text
            style={[
              styles.textPublish,
              {
                backgroundColor:
                  title.length > 0 && content.length > 0 && image.length > 0
                    ? '#1877F2'
                    : '#EEF1F4',
              },
              {
                color:
                  title.length > 0 && content.length > 0 && image.length > 0
                    ? 'white'
                    : '#667080',
              },
            ]}>
            Publish
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModelVisible(false);
        }}>
        <View style={styles.containerMODAL}>
          <TouchableOpacity
            onPress={() => {
              setModelVisible(false);
            }}>
            <View
              style={{
                height: 100,
                backgroundColor: 'white',
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
              }}>
              {/* <TouchableOpacity
              onPress={() => {
                setModelVisible(false);
              }}>
                <Image style={{marginTop:10, marginStart:10}} source={require('../../../assets/IconCancel.png')}/>
                </TouchableOpacity> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 35,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity onPress={openCamera}>
                    <Image
                      style={{tintColor: 'black', width: 30, height: 30}}
                      source={require('../../../assets/Camera.png')}
                    />
                  </TouchableOpacity>
                  <Text style={{marginStart: 10, fontSize: 20, color: '#000'}}>
                    Chụp Hình
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 40,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={openLibrary}>
                    <Image
                      style={{tintColor: 'black', width: 30, height: 30}}
                      source={require('../../../assets/ImageLibrary.png')}
                    />
                  </TouchableOpacity>
                  <Text style={{marginStart: 10, fontSize: 20, color: '#000'}}>
                    Thư viện
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default DetailScreenNewArticles;

const styles = StyleSheet.create({
  viewTypeLetter: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingVertical: 8,
    elevation: 5,
    backgroundColor: 'white',
    margin: 20,
    width: 218,
    borderRadius: 6,
    justifyContent: 'space-between',
  },
  containerMODAL: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  textPublish: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#667080',
    backgroundColor: '#EEF1F4',
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 6,
  },
  viewContainerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
  },
  footer: {
    height: 78,
    elevation: 10,
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  textInputAddNews: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#A0A3BD',
  },
  viewAddNews: {
    marginTop: 16,
  },
  textNewsTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0.12,
    color: '#A0A3BD',
    borderBottomWidth: 1,
    borderColor: '#A0A3BD',
  },
  viewContainerNewsTitle: {
    marginTop: 16,
  },
  viewAddCoverPhoto: {
    height: 183,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 6,
    borderColor: '#4E4B66',
    backgroundColor: '#EEF1F4',
  },
  textCreateNews: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  backgroudContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
