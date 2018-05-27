

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
    Button,
    TouchableHighlight
} from 'react-native';


type
Props = {};
import ListPage from './Listpage'
export default class AndroidSliderWithTabs extends Component<Props> {

    constructor() {
        super();
        this.state = {tabs:["Tab 1", "Tab 2", "Tab 3", "Tab 4"]};
    }

    onTabSelected(event) {

        this.refs["pages"].setPage(event.nativeEvent.position)
    }

    onPageSelected(event) {

        this.refs["tabs"].setPage(event.nativeEvent.position);
    }

    __changeTab = (position)=> {
        console.log("Pos " + position);
        // this.refs["tabs"].setPage(position);
        // this.refs["pages"].setPage(position)
    };
    renderTabs = ()=> {
        return this.state.tabs.map(function (tab, index) {
            return(<View style={styles.outerTop} key={index}>
                <Button onPress={()=> {
                    this.__changeTab(index);
                }}
                        title={tab}/>
            </View>);
        });

    };

    render() {
        return (

            <View
                style={{flex: 1, flexDirection: 'column'}}>
                <ViewPagerAndroid ref="tabs" pageMargin={-250} style={styles.containerTop}
                                  onPageSelected={this.onTabSelected.bind(this)}>
                    {this.props.renderTabs()}
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
        height: 3
    },
    tabStyle: {
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    }
});
