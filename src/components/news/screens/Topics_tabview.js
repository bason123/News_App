import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { FONTFAMILY, FONTWEIGHT, FONTSTYLE } from '../../../constants/theme';
import { getNews } from '../NewsHTTP';
import { useNavigation } from '@react-navigation/native';

const Topics_tabview = ( props ) => {
    
    const navigation = useNavigation();
    const renderDataItem_tabNews = val => {
        const {
            id,
            image,
            name,
            content,
            isSave
        } = val.item;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DetailScreen', { id: id });
                }}>
                <View style={styles.viewItemBody}>
                    <Image
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 6
                        }}
                        source={{ uri: image }}
                    />
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            width : '54%'
                        }}>
                        <Text numberOfLines={1} style={[styles.title, styles.textEurope]}>{name}</Text>
                        <Text numberOfLines={2} style={[styles.title, styles.textRussian]}>
                            {content}
                        </Text>
                    </View>
                    {
                        isSave ? <View style={styles.btn_saved}><Text style={[styles.txt_save, { color: 'white' }]}>Saved</Text></View> : <View style={styles.btn_save}><Text style={[styles.txt_save, { color: '#1877f2' }]}>Save</Text></View>
                    }
                </View>

            </TouchableOpacity>
        );
    }
    return (
        <View>
            <FlatList
                data={dummy_data_topics}
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

export default Topics_tabview

const styles = StyleSheet.create({
    txt_save: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        letterSpacing: 0.12
    },
    btn_save: {
        width: 78,
        height: 34,
        borderWidth: 1,
        borderColor: '#1877F2',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor: 'white'
    }
    ,
    btn_saved: {
        width: 78,
        height: 34,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        justifyContent : 'center',
        alignItems : 'center'
    }
    ,
    viewItemBody: {
        flexDirection: 'row',
        width: '100%',
        padding: 8,
        marginTop: 16,
        height : 86,
        justifyContent : 'space-between',
        alignItems : 'center'
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
var dummy_data_topics = [{
    "id": 1,
    "image": "http://dummyimage.com/116x72.png/ff4444/ffffff",
    "name": "Hurdle",
    "content": "06 Boyd Parkway",
    "isSave": true
}, {
    "id": 2,
    "image": "http://dummyimage.com/211x85.png/cc0000/ffffff",
    "name": "Bridger",
    "content": "72 Brickson Park Place",
    "isSave": true
}, {
    "id": 3,
    "image": "http://dummyimage.com/120x99.png/5fa2dd/ffffff",
    "name": "Mashro",
    "content": "8 Becker Crossing",
    "isSave": true
}, {
    "id": 4,
    "image": "http://dummyimage.com/161x75.png/5fa2dd/ffffff",
    "name": "Rodda",
    "content": "759 Shasta Lane",
    "isSave": false
}, {
    "id": 5,
    "image": "http://dummyimage.com/74x91.png/dddddd/000000",
    "name": "Elcoate",
    "content": "55 Quincy Terrace",
    "isSave": false
}, {
    "id": 6,
    "image": "http://dummyimage.com/209x83.png/5fa2dd/ffffff",
    "name": "Pipping",
    "content": "7632 Raven Junction",
    "isSave": false
}, {
    "id": 7,
    "image": "http://dummyimage.com/204x88.png/cc0000/ffffff",
    "name": "Bavage",
    "content": "4 Ridgeway Plaza",
    "isSave": true
}, {
    "id": 8,
    "image": "http://dummyimage.com/185x84.png/5fa2dd/ffffff",
    "name": "Taylo",
    "content": "302 Arapahoe Court",
    "isSave": true
}, {
    "id": 9,
    "image": "http://dummyimage.com/101x92.png/dddddd/000000",
    "name": "Shatliffe",
    "content": "58570 Mccormick Park",
    "isSave": false
}, {
    "id": 10,
    "image": "http://dummyimage.com/187x76.png/dddddd/000000",
    "name": "Digwood",
    "content": "4 Larry Court",
    "isSave": false
}, {
    "id": 11,
    "image": "http://dummyimage.com/194x97.png/ff4444/ffffff",
    "name": "Lanfere",
    "content": "1587 Bultman Terrace",
    "isSave": true
}, {
    "id": 12,
    "image": "http://dummyimage.com/243x95.png/ff4444/ffffff",
    "name": "Tomovic",
    "content": "08 Acker Court",
    "isSave": false
}, {
    "id": 13,
    "image": "http://dummyimage.com/79x79.png/5fa2dd/ffffff",
    "name": "Filipson",
    "content": "6112 Acker Court",
    "isSave": false
}, {
    "id": 14,
    "image": "http://dummyimage.com/78x97.png/cc0000/ffffff",
    "name": "Jedrzejczyk",
    "content": "7611 Kensington Center",
    "isSave": false
}, {
    "id": 15,
    "image": "http://dummyimage.com/249x87.png/cc0000/ffffff",
    "name": "Deveril",
    "content": "586 Armistice Crossing",
    "isSave": true
}, {
    "id": 16,
    "image": "http://dummyimage.com/118x85.png/5fa2dd/ffffff",
    "name": "Berrygun",
    "content": "88843 Chive Plaza",
    "isSave": false
}, {
    "id": 17,
    "image": "http://dummyimage.com/155x78.png/dddddd/000000",
    "name": "Willcock",
    "content": "83859 Ridge Oak Avenue",
    "isSave": true
}, {
    "id": 18,
    "image": "http://dummyimage.com/74x96.png/dddddd/000000",
    "name": "Hayward",
    "content": "9910 Lake View Road",
    "isSave": true
}, {
    "id": 19,
    "image": "http://dummyimage.com/90x73.png/dddddd/000000",
    "name": "Brassill",
    "content": "104 Atwood Hill",
    "isSave": true
}, {
    "id": 20,
    "image": "http://dummyimage.com/168x74.png/cc0000/ffffff",
    "name": "Osmond",
    "content": "68 Tomscot Point",
    "isSave": true
}]