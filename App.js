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
    ViewPagerAndroid,
    Button,
    FlatList,
    ScrollView,
    Dimensions,
    TouchableHighlight

} from 'react-native';


type
Props = {};

import ListPage from './Listpage'

const {width} = Dimensions.get('window');

const peekWidth = 60;
const tabWidth = 240;
const tabOffset = tabWidth / 2;
const pageWidth = width - peekWidth;
const pageOffset = pageWidth / 2;
// import Pager from './ViewPager'
export default class App extends Component<Props> {

    constructor() {
        super();
        this.state = {tabs: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"]};
    }

    onTabSelected(event) {

        this.refs["pages"].setPage(event.nativeEvent.position)
    }

    onPageSelected(event) {

        this.refs["tabs"].setPage(event.nativeEvent.position);
    }

    __changeTab = (position)=> {

        this.scrollTabToPage(position - 1);

    };
    renderTabs = ()=> {
        var self = this;
        return this.state.tabs.map(function (tab, index) {
            return (<View style={[styles.outerTop]} key={index}>
                <Button style={styles.inside} onPress={()=> {
                    self.__changeTab(index);
                }}
                        title={tab}/>
            </View>);
        });

    };

    scrollTabToPage = (page)=> {
        this.refs.tabs.scrollTo(0, (page * tabOffset) + 20)
    };

    scrollPageToPage = (page)=> {
        const position = page * pageWidth - peekWidth / 2;
        this.refs.pages.scrollTo(0, position)
    };

    __handleTabScroll = (event)=> {
        const currentPage = this.__getCurrentPage();
        var page = event.nativeEvent.contentOffset.x / tabOffset;
        if (currentPage !== page) {
            this.scrollPageToPage(Math.floor(page) + 1);
        }
    };

    __getCurrentTab() {
        // return Math.floor(this.refs.tabs.contentOffset.x / tabOffset);
    }

    __getCurrentPage() {
        console.log("Hello");
        console.log(this.refs.pages);
        // return Math.floor(this.refs.pages.contentOffset.x / tabOffset);
    }

    __handlePageScroll = (event)=> {
        const currentTab = this.__getCurrentTab();
        var page = event.nativeEvent.contentOffset.x / pageOffset;
        if (page !== currentTab) {
            // this.scrollTabToPage(page);
        }

        // console.log("Page " +Math.floor(page));
    }
    componentDidMount = ()=> {
        this.scrollTabToPage(-1);
        this.scrollPageToPage(-1);
    };

    render() {
        return (

            <View
                style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
                <ScrollView
                    alwaysBounceHorizontal={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    decelerationRate={0}
                    snapToInterval={width - tabWidth}
                    snapToAlignment={"end"}
                    scrollEventThrottle={0}
                    onScroll={this.__handleTabScroll}
                    contentInset={{
                        top: 0,
                        left: tabWidth / 2,
                        bottom: 0,
                        right: tabWidth / 2
                    }}
                    ref="tabs">
                    {this.renderTabs()}
                </ScrollView>

                <View style={styles.divider}/>
                <ScrollView
                    alwaysBounceHorizontal={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    onScroll={this.__handlePageScroll}
                    decelerationRate={0}

                    snapToInterval={pageWidth}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: pageOffset,
                        bottom: 0,
                        right: pageOffset,
                    }}
                    ref="pages"
                >
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
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTop: {
        height: 30,
        flex: 1
    },
    container: {
        flex: 1
    },
    outer: {
        width: pageWidth,
        backgroundColor: 'red'
    },
    inside: {},
    outerTop: {
        flex: 1,
        width: width - tabWidth
    },
    tabStyle: {
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    }
});
