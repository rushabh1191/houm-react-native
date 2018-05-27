/**
 * Created by rushabh on 27/05/18.
 */

import React, {Component} from 'react';
import {
    Platform,

} from 'react-native';
import AndroidSlider from './AndroidSliderWithTabs'
import IOSSlider from './iOSSliderWithTabs'
export default class Launcher extends Component<Props> {

    __renderPages = ()=> {
        return (<ViewPagerAndroid ref="pages" pageMargin={-80} style={styles.container}
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
        </ViewPagerAndroid>);
    }

    render = ()=> {
        if (Platform.OS === 'ios') {
            return <IOSSlider/>;
        } else {
            return <AndroidSlider/>
        }

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
        height: 3
    },
    tabStyle: {
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    }
})