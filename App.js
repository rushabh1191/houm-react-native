/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type
Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                style={styles.pageStyle2}
            >
                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>

                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View><View style={styles.pageStyle} key="1">
                <Text>First page</Text>
            </View><View style={styles.pageStyle} key="1">
                <Text>First page</Text>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    viewPager: {
        flex: 1,
        padding: 10
    },
    pageStyle: {
        backgroundColor: "#ffffff",
        flex:1,
        width:400
    }, pageStyle2: {
    }, pageStyle3: {
        backgroundColor: "#E3e43f",
        alignItems: 'center',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }

});
