import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {

    const information = {
        clientId: 20000,
        totalToPay: 200
    }

    const goToAboutUs = () => {
        navigation.navigate('AboutUs', information)
    }
    return (
        <View style={styles.viewContainer}>
            <Text>Home</Text>
            <Button
                title="Go to about us"
                onPress={() => goToAboutUs()}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
