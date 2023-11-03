import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    
} from 'react-native';

const SplashScreen = (props) => {
    const navigation = props.navigation
    var goToApp = setInterval(function() {
        navigation.navigate("OnboardingScreen");
        if(true){
            clearInterval(goToApp);
        }
    }, 2000)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.div_logo}>
                <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={require('../assets/ImageKaKa.png')} />
            </View>
        </SafeAreaView>

    );
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    div_logo: {
        width:315, height:173,
    }
})