import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AboutUs = ({ navigation, route: { params } }) => {
    const { clientId } = params
    const goBackTo = () => {
        // navigation.navigate('Home')
        // navigation.push('Home')
        navigation.goBack()
    }
    return (
        <View style={styles.viewContainer}>
            <Text>About us {clientId}</Text>
            <Button
                title="Go back"
                onPress={() => goBackTo()}
            />
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
