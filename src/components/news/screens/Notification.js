import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require('../../../assets/IconBackLeft.png')} />
          <Text style={styles.textNotification}>Notification</Text>
          <Image source={require('../../../assets/Icon3dotsvertical.png')} />
        </View>
        <View style={styles.viewDay}>
            <Text style={styles.textToday}>Today, April 22</Text>
        </View>
        <View style={styles.contentContainer}>
            <View>
                <Image style={{width:70, height:70,}} source={require('../../../assets/PersonImage.png')}/>
            </View>
            <View style={styles.viewContent}>
                <Text style={styles.textContent} numberOfLines={2}><Text style={styles.nameLogo}>BBC News</Text> has posted new europe news “Ukraine's President Zele...”</Text>
                <Text>15m ago</Text>
            </View>
        </View>
        <View style={styles.contentContainer}>
            <View>
                <Image style={{width:70, height:70,}} source={require('../../../assets/PersonImage.png')}/>
            </View>
            <View style={styles.viewContent2}>
                <Text style={styles.textContent} numberOfLines={2}><Text style={styles.nameLogo}>BBC News</Text> has posted new europe news “Ukraine's President Zele...”</Text>
                <Text>15m ago</Text>
            </View>
            <View style={styles.viewButtonFollow}>
                <TouchableOpacity style={styles.touchableOpacityFollow}>
                <Image source={require('../../../assets/IconCong.png')}/>
                <Text style={styles.textFollow}>Follow</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
    textFollow:{
        color:'#1877F2',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'600',
        lineHeight:24,
        letterSpacing:0.12,
        marginStart:5
    },
    touchableOpacityFollow:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:6.,
        paddingVertical:4,
        borderColor:'#1877F2'
    },
    viewButtonFollow:{
        alignItems:'center',
        justifyContent:'center',
        marginStart:16,
        flex:1
    },
    nameLogo:{
        fontWeight:'600'
    },
    textContent:{
        color:'#050505',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:24,
        letterSpacing:0.12
    },
    viewContent2:{
        width:'43%',
        marginStart:16,
        justifyContent:'space-between',
    },
    viewContent:{
        width:'73%',
        marginStart:16,
        justifyContent:'space-between',
    },
    contentContainer:{
        flexDirection:'row',
        paddingHorizontal:8,
        paddingVertical:14,
        marginTop:16,
        backgroundColor:'#EEF1F4',
        borderRadius:6
    },
    textToday:{
        color:'#000',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'600',
        lineHeight:24,
        letterSpacing:0.12
    },
    viewDay:{
        marginTop:16,
    },
  textNotification: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});
