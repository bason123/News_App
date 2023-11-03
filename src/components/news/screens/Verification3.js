import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Verification3 = () => {
  return (
    <View style={styles.backgroudContainer}>
      <View style={styles.container}>
        <View style={styles.viewContainerKARA}>
            <View>
                <Image source={require('../../../assets/kara.png')}/>
            </View>
            <View style={styles.viewContainerText}>
                <Text style={styles.textCongratulations}>Congratulations!</Text>
                <Text style={styles.textYouraccount}>Your account is ready to use</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Verification3

const styles = StyleSheet.create({})