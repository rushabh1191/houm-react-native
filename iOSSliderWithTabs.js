/**
 * Created by rushabh on 27/05/18.
 */
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
    TouchableHighlight

} from 'react-native';


type
Props = {};

export default class IOSSliderWithTabs extends Component<Props> {

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
        this.scrollTabToPosition(position - 1);
        this.scrollPageToPosition(position)

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

    scrollTabToPosition = (page)=> {
        this.refs.tabs.scrollTo(0, (page * this.props.tabOffset) + 20)
    };

    scrollPageToPosition = (page)=> {
        const position = page * this.props.pageWidth - this.props.peekWidth / 2;
        this.refs.pages.scrollTo(0, position)
    };

    __handleTabScroll = (event)=> {
        var page=Math.round(event.nativeEvent.targetContentOffset.x/200);
        this.scrollPageToPosition(page+1);
    };

    __handlePageScroll = (event)=> {
        var newPage = Math.floor(event.nativeEvent.targetContentOffset.x / this.props.pageWidth);
        this.scrollTabToPosition(newPage);

    };


    componentDidMount = ()=> {
        this.__changeTab(0);
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
                    snapToInterval={this.props.width - this.props.tabWidth}
                    snapToAlignment={"end"}
                    scrollEventThrottle={0}
                    onScrollEndDrag={this.__handleTabScroll}
                    contentInset={{
                        top: 0,
                        left: this.props.tabWidth / 2,
                        bottom: 0,
                        right: this.props.tabWidth / 2
                    }}
                    ref="tabs">
                    {this.props.renderTabs()}
                </ScrollView>

                <View style={styles.divider}/>
                <ScrollView
                    alwaysBounceHorizontal={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    onScrollEndDrag={this.__handlePageScroll}
                    decelerationRate={0}

                    snapToInterval={this.props.pageWidth}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: this.props.pageOffset,
                        bottom: 0,
                        right: this.props.pageOffset,
                    }}
                    ref="pages"
                >
                    {this.props.renderPages()}
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
    tabStyle: {
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    }
});
