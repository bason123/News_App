import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

var dataSource1 = [
    {
        id: 1,
        nameSource: "CNBC",
        image: require('../../../assets/source/CNBC.png')
    },
    {
        id: 2,
        nameSource: "VICE",
        image: require('../../../assets/source/VICE.png')
    },
    {
        id: 3,
        nameSource: "Vox",
        image: require('../../../assets/source/Vox.png')
    },

]
var dataSource2 = [
    {
        id: 1,
        nameSource: "BBC News",
        image: require('../../../assets/source/BBC_NEWS.png')
    },
    {
        id: 2,
        nameSource: "SCMP",
        image: require('../../../assets/source/SCMP.png')
    },
    {
        id: 3,
        nameSource: "CNN",
        image: require('../../../assets/source/CNN.png')
    },

]
var dataSource3 = [
    {
        id: 1,
        nameSource: "MSN",
        image: require('../../../assets/source/MSN.png')
    },
    {
        id: 2,
        nameSource: "CNET",
        image: require('../../../assets/source/CNET.png')
    },
    {
        id: 3,
        nameSource: "USA Today",
        image: require('../../../assets/source/USA_Today.png')
    },

]
var dataSource4 = [
    {
        id: 1,
        nameSource: "TIME",
        image: require('../../../assets/source/TIME.png')
    },
    {
        id: 2,
        nameSource: "Buzzfeed",
        image: require('../../../assets/source/Buzzfeed.png')
    },
    {
        id: 3,
        nameSource: "Daily Mail",
        image: require('../../../assets/source/Daily_Mail.png')
    },

]


const NewsSource = () => {
    const [source1, setSource1] = useState(dataSource1)
    const [source2, setSource2] = useState(dataSource2)
    const [source3, setSource3] = useState(dataSource3)
    const [source4, setSource4] = useState(dataSource4)
    const renderSource1 = (val) => {
        const { id, nameSource, image } = val.item;
        return (
            <View style={styles.viewSource}>
                <View style={styles.viewImageSource}>
                    <Image style={{ width: 70, height: 70 }} source={image}></Image>
                </View>
                <Text style={styles.textNameCountry}>{nameSource}</Text>
                <TouchableOpacity style={styles.buttonFollow}>
                    <Text style={styles.textButtonFollow}>Follow</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderSource2 = (val) => {
        const { id, nameSource, image } = val.item;
        return (
            <View style={styles.viewSource}>
                <View style={styles.viewImageSource}>
                    <Image style={{ width: 70, height: 70 }} source={image}></Image>
                </View>
                <Text style={styles.textNameCountry}>{nameSource}</Text>
                <TouchableOpacity style={styles.buttonFollow}>
                    <Text style={styles.textButtonFollow}>Follow</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderSource3 = (val) => {
        const { id, nameSource, image } = val.item;
        return (
            <View style={styles.viewSource}>
                <View style={styles.viewImageSource}>
                    <Image style={{ width: 70, height: 70 }} source={image}></Image>
                </View>
                <Text style={styles.textNameCountry}>{nameSource}</Text>
                <TouchableOpacity style={styles.buttonFollow}>
                    <Text style={styles.textButtonFollow}>Follow</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderSource4 = (val) => {
        const { id, nameSource, image } = val.item;
        return (
            <View style={styles.viewSource}>
                <View style={styles.viewImageSource}>
                    <Image style={{ width: 70, height: 70 }} source={image}></Image>
                </View>
                <Text style={styles.textNameCountry}>{nameSource}</Text>
                <TouchableOpacity style={styles.buttonFollow}>
                    <Text style={styles.textButtonFollow}>Follow</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Image source={require('../../../assets/IconBackLeft.png')} />
                    <Text style={styles.textTitleCountry}>Choose your News Sources</Text>
                    <View></View>
                </View>
                <View style={styles.inputSearchContainer}>
                    <TextInput placeholder='Source'></TextInput>
                    <Image source={require('../../../assets/search.png')} />
                </View>
                <View style={styles.sourceContainer}>
                    <FlatList
                        data={source1}
                        renderItem={renderSource1}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: "space-between" }}>
                    </FlatList>
                </View>
                <View style={styles.sourceContainer}>
                    <FlatList
                        data={source2}
                        renderItem={renderSource2}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: "space-between" }}>
                    </FlatList>
                </View>
                <View style={styles.sourceContainer}>
                    <FlatList
                        data={source3}
                        renderItem={renderSource3}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: "space-between" }}>
                    </FlatList>
                </View>
                <View style={styles.sourceContainer}>
                    <FlatList
                        data={source4}
                        renderItem={renderSource4}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: "space-between" }}>
                    </FlatList>
                </View>
                <View style={styles.buttonNextContainer}>
                    <TouchableOpacity style={styles.buttonNext}>
                        <Text style={styles.buttonTextNext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default NewsSource

const styles = StyleSheet.create({
    buttonTextNext: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
      },
      buttonNext: {
        height: 50,
        borderRadius: 6,
        borderColor: '#1877F2',
        borderWidth: 1,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonNextContainer: {
        paddingVertical: 50,
        // backgroundColor: 'red'
      },
    viewImageSource: {
        borderRadius: 6,
        borderColor: '#FAFAFA',
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 7
    },
    textButtonFollow: {
        color: '#1877F2',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    textNameCountry: {
        marginTop: 7,
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    buttonFollow: {
        borderRadius: 6,
        borderColor: '#1877F2',
        borderWidth: 1,
        width: '85.8%',
        alignItems: 'center',
        marginTop: 8
    },
    viewSource: {
        width: 97,
        height: 165,
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 7
    },
    sourceContainer: {
        // backgroundColor: 'pink',
        height: 165,
        marginTop: 16,
    },
    inputSearchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 16
    },
    textTitleCountry: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 24,
        backgroundColor: '#fff'
    }
})