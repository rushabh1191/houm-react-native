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
    ViewPagerAndroid
} from 'react-native';


type
Props = {};

import ListPage from './Listpage'

export default class App extends Component<Props> {

    onTabSelected(event) {

        this.refs["pages"].setPage(event.nativeEvent.position)
    }

    onPageSelected(event) {

        this.refs["tabs"].setPage(event.nativeEvent.position);
    }

    render() {
        return (

            <View
                style={{flex: 1, flexDirection: 'column'}}>
                <ViewPagerAndroid ref="tabs" pageMargin={-250} style={styles.containerTop}
                                  onPageSelected={this.onTabSelected.bind(this)}>
                    <View style={styles.outerTop}>
                        <Text style={styles.tabStyle}>Page1</Text>
                    </View>
                    <View style={styles.outerTop}>
                        <Text style={styles.tabStyle}>Page2</Text>
                    </View>
                    <View style={styles.outerTop}>
                        <Text style={styles.tabStyle}>Page3</Text>
                    </View>
                    <View style={styles.outerTop}>
                        <Text style={styles.tabStyle}>Page4</Text>
                    </View>
                </ViewPagerAndroid>

                <View style={styles.divider}/>
                <ViewPagerAndroid ref="pages" pageMargin={-80} style={styles.container}
                                  onPageSelected={this.onPageSelected.bind(this)}>
                    <View style={styles.outer}>
                        <ListPage style={styles.outer}/>
                    </View>
                    <View style={styles.outer}>
                        <ListPage style={styles.outer}/>
                    </View>
                    <View style={styles.outer}>
                        <ListPage style={styles.outer}/>
                    </View>
                    <View style={styles.outer}>
                        <ListPage style={styles.outer}/>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTop: {
        height: 30
    },
    container: {
        flex: 1,
    },
    outer: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
    },
    outerTop: {
        flex: 1,
        paddingLeft: 125,
        paddingRight: 125,
    },
    pink: {
        backgroundColor: 'pink',
        flex: 1,
    },
    divider: {
        backgroundColor: 'grey',
        height :3
    },
    tabStyle: {
        fontSize:20,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    }
});
