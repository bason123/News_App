import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { FONTFAMILY, FONTWEIGHT, FONTSTYLE } from '../../../constants/theme';
import { getNews } from '../NewsHTTP';
import { useNavigation } from '@react-navigation/native';

const Author_tabview = ( props ) => {
    const navigation = useNavigation();
    const renderDataItem_tabNews = val => {
        const {
            id,
            image,
            name,
            follower,
            isFollow
        } = val.item;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Author_Profile', { id: id, image : image, name : name, follower : follower, isFollow : isFollow });
                }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', height: 86, alignItems: 'center' }}>
                    <View style={styles.viewItemBody}>
                        <Image
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                marginEnd: 4
                            }}
                            source={{ uri: image }}
                        />
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                            }}>
                            <Text numberOfLines={1} style={[styles.title, styles.textEurope]}>{name}</Text>
                            <Text numberOfLines={1} style={[styles.title, styles.textRussian]}>
                                {follower}K Followers
                            </Text>
                        </View>

                    </View>

                    {
                        isFollow ?
                            <View style={styles.btn_Following}>
                                <TouchableOpacity>
                                    <Text style={[styles.txt_save, { color: 'white' }]}>Following</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.btn_Follow}>
                                <TouchableOpacity>
                                    <Image source={require('../../../assets/ic_add.png')} />
                                </TouchableOpacity>
                            </View>
                    }

                </View>

            </TouchableOpacity>
        );
    }
    return (
        <View>
            <FlatList
                data={dummy_data_author}
                renderItem={renderDataItem_tabNews}
                key={item => item._id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    )
}

export default Author_tabview

const styles = StyleSheet.create({
    txt_save: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        letterSpacing: 0.12
    },
    btn_Follow: {
        width: 95,
        height: 32,
        borderWidth: 1,
        borderColor: '#1877F2',
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: 'white'
    }
    ,
    btn_Following: {
        width: 95,
        height: 32,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        alignItems: 'center'
    }
    ,
    viewItemBody: {
        flexDirection: 'row',
        width: '47%',
        padding: 8,
        marginTop: 16,
        height: 86,
        justifyContent: 'space-between'
    },
    title: {
        fontStyle: FONTSTYLE.normal,
        letterSpacing: 0.12,
    },
    textRussian: {
        fontSize: 16,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 24,
        color: '#000',
    },
    textEurope: {
        fontSize: 13,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 19.5,
        color: '#4E4B66',
    },
    viewContainerLogoBBC: {
        flexDirection: 'row',
        marginTop: 4,
    },
    viewBBC: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textBBC: {
        marginStart: 4,
        fontWeight: FONTWEIGHT.six_hundred,
        fontSize: 13,
        lineHeight: 19.5,
        color: '#4E4B66',
    },
    viewTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 12,
    },
    textTime: {
        fontSize: 13,
        fontWeight: FONTWEIGHT.four_hundred,
        lineHeight: 19.5,
        color: '#4E4B66',
        marginStart: 4,
    },
    viewIcon3dots: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
var dummy_data_author = [{
    "id": 1,
    "image": "http://dummyimage.com/158x80.png/5fa2dd/ffffff",
    "name": "Crauford",
    "follower": 438,
    "isFollow": false
}, {
    "id": 2,
    "image": "http://dummyimage.com/224x84.png/dddddd/000000",
    "name": "Palumbo",
    "follower": 312,
    "isFollow": false
}, {
    "id": 3,
    "image": "http://dummyimage.com/173x84.png/5fa2dd/ffffff",
    "name": "Stourton",
    "follower": 92,
    "isFollow": false
}, {
    "id": 4,
    "image": "http://dummyimage.com/83x74.png/ff4444/ffffff",
    "name": "Morris",
    "follower": 651,
    "isFollow": false
}, {
    "id": 5,
    "image": "http://dummyimage.com/150x84.png/5fa2dd/ffffff",
    "name": "Ducarne",
    "follower": 33,
    "isFollow": true
}, {
    "id": 6,
    "image": "http://dummyimage.com/203x100.png/cc0000/ffffff",
    "name": "Felix",
    "follower": 434,
    "isFollow": true
}, {
    "id": 7,
    "image": "http://dummyimage.com/210x92.png/5fa2dd/ffffff",
    "name": "Arias",
    "follower": 183,
    "isFollow": true
}, {
    "id": 8,
    "image": "http://dummyimage.com/224x80.png/5fa2dd/ffffff",
    "name": "Urwen",
    "follower": 493,
    "isFollow": true
}, {
    "id": 9,
    "image": "http://dummyimage.com/100x73.png/dddddd/000000",
    "name": "Tulleth",
    "follower": 126,
    "isFollow": true
}, {
    "id": 10,
    "image": "http://dummyimage.com/207x99.png/ff4444/ffffff",
    "name": "Ielden",
    "follower": 338,
    "isFollow": true
}, {
    "id": 11,
    "image": "http://dummyimage.com/196x80.png/cc0000/ffffff",
    "name": "Warrener",
    "follower": 96,
    "isFollow": true
}, {
    "id": 12,
    "image": "http://dummyimage.com/225x79.png/ff4444/ffffff",
    "name": "Shapcote",
    "follower": 814,
    "isFollow": false
}, {
    "id": 13,
    "image": "http://dummyimage.com/183x72.png/ff4444/ffffff",
    "name": "Stebbing",
    "follower": 809,
    "isFollow": false
}, {
    "id": 14,
    "image": "http://dummyimage.com/158x96.png/dddddd/000000",
    "name": "Toffoletto",
    "follower": 349,
    "isFollow": true
}, {
    "id": 15,
    "image": "http://dummyimage.com/73x84.png/5fa2dd/ffffff",
    "name": "D'Antonio",
    "follower": 68,
    "isFollow": true
}, {
    "id": 16,
    "image": "http://dummyimage.com/175x76.png/dddddd/000000",
    "name": "Gettone",
    "follower": 165,
    "isFollow": true
}, {
    "id": 17,
    "image": "http://dummyimage.com/138x92.png/5fa2dd/ffffff",
    "name": "Hasser",
    "follower": 669,
    "isFollow": false
}, {
    "id": 18,
    "image": "http://dummyimage.com/154x95.png/ff4444/ffffff",
    "name": "Duker",
    "follower": 147,
    "isFollow": true
}, {
    "id": 19,
    "image": "http://dummyimage.com/239x88.png/dddddd/000000",
    "name": "Trethowan",
    "follower": 317,
    "isFollow": true
}, {
    "id": 20,
    "image": "http://dummyimage.com/160x90.png/ff4444/ffffff",
    "name": "Hurford",
    "follower": 771,
    "isFollow": false
}]