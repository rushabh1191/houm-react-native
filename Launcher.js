/**
 * Created by rushabh on 27/05/18.
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Dimensions,
    Button

} from 'react-native';

const {width} = Dimensions.get('window');

const peekWidth = 60;
const tabWidth = 240;
const tabOffset = tabWidth / 2;
const pageWidth = width - peekWidth;
const pageOffset = pageWidth / 2;


import AndroidSlider from './AndroidSliderWithTabs'
import IOSSlider from './iOSSliderWithTabs'
import ListPage from './Listpage'
export default class Launcher extends Component<Props> {

    tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

    __renderPages = ()=> {

        var pages = [];

        this.tabs.forEach((tab, index) => {
            var outer = this.isOs() ? styles.iOSouter : styles.androidOuter;

            pages.push(<View style={outer} key={index}>
                <ListPage style={outer}/>
            </View>);
        });
        return pages;
    };

    __changeTab = (position)=> {

        if (this.isOs()) {
            this.refs.iosScroll.__changeTab(position)
        } else {

        }
    };

    __renderTabs = ()=> {
        var self = this;
        var outer = this.isOs() ? styles.iOSOuterTop : styles.outerTop;
        return this.tabs.map(function (tab, index) {
            return (<View style={outer} key={index}>
                <Button style={styles.inside} onPress={()=> {
                    self.__changeTab(index);
                }}
                        title={tab}/>
            </View>);
        });

    };

    isOs = ()=> {
        return Platform.OS === 'ios';
    };
    render = ()=> {
        if (Platform.OS === 'ios') {
            return <IOSSlider
                ref="iosScroll"
                peekWidth={peekWidth}
                tabWidth={tabWidth}
                tabOffset={tabOffset}
                pageOffset={pageOffset}
                pageWidth={pageWidth}
                renderTabs={this.__renderTabs}
                renderPages={this.__renderPages}/>;
        } else {
            return <AndroidSlider
                renderTabs={this.__renderTabs}
                renderPages={this.__renderPages}/>
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
    androidOuter: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#E0E0E0'
    },

    iOSouter: {
        width: pageWidth,
        backgroundColor: '#E0E0E0'
    },
    inside: {},
    iOSOuterTop: {
        flex: 1,
        width: width - tabWidth
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