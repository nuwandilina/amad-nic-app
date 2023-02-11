import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from './screens/HomeScreen';
import AppTitleBar from './components/AppTitleBar';

function App() {
    return (
        <SafeAreaProvider style={styles.appContainer}>
            <KeyboardAvoidingView>
                <SafeAreaView>
                    <AppTitleBar></AppTitleBar>
                    <HomeScreen></HomeScreen>
                </SafeAreaView>
            </KeyboardAvoidingView>

        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    }
})

export default App;