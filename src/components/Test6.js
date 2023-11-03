import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { getUpdateImage } from './news/NewsHTTP';

const Test6 = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const [imagePath, setImagePath] = useState(null);

  const onPress = () => {
    setShow(true); // hiện modal
  };

  const takePhoto = useCallback(async response => {
    if (response.didCancel) return;
    if (response.errorCode) return;
    if (response.errorMessage) return;
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      setImage(asset.uri);
      setShow(false);
      // upload image
      const formData = new FormData();
      formData.append('image', {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName,
      });
      const result = await getUpdateImage(formData);
      console.log('>>>>>upload image: ', result.data.path);
      setImagePath(result.data.path);
    }
  }, []);

  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
  }, []);

  const openAvatar = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchImageLibrary(options, takePhoto);
  }, []);

  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('../assets/IconBackLeft.png')} />
          <Text style={styles.textCreateNews}>Create News</Text>
          <Image source={require('../assets/Icon3dotsvertical.png')} />
        </View>
        <View style={styles.viewAddCoverPhoto}>
            <TouchableOpacity onPress={openAvatar}>
              <Image source={require('../assets/AddCover.png')} />
            </TouchableOpacity>
            <TouchableOpacity   onPress={onPress}>
              <Text>Add Cover Photo</Text>
            </TouchableOpacity>
            {image && (
        <Image source={{uri: image}} style={{width: "100%", height: 183}} />
      )}
        </View>
        <View style={styles.viewContainerNewsTitle}>
          <TextInput
            style={styles.textNewsTitle}
            placeholder="News title"
            placeholderTextColor={'#A0A3BD'}
          />
        </View>
        <View style={styles.viewAddNews}>
          <TextInput
            style={styles.textInputAddNews}
            placeholder="Add News/Article"
            placeholderTextColor={'#A0A3BD'}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
          <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                setShow(false);
              }}>
              <Text style={{fontSize:20, marginStart:20, marginEnd:20}}>Đóng modal</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openCamera}>
              <Text style={{fontSize: 20}}>Chụp ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShow(false);
              }}>
              <Text style={{fontSize: 20, marginStart:20}}>Chọn ảnh</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
    </View>
  );
};

export default Test6;

const styles = StyleSheet.create({
  modalContent: {
  width: '100%',
  height: '20%',
  backgroundColor: 'white',
  borderTopEndRadius: 20,
  borderTopStartRadius: 20,
  flexDirection:'row'
},
modalContainer: {
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0,0,0,0.5)',
  flex: 1,
  width: '100%',
  height: '100%',
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
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  backgroudContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
