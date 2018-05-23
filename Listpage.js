/**
 * Created by rushabh on 23/05/18.
 */


import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    FlatList,
    View,
} from 'react-native';


type
Props = {};

export default class ListPage extends Component {

    constructor() {
        super();
        this.getData();
    }

    __renderItem({item}) {
        return (<ListItem
            item={item}/>)
    }

    render() {
        return (<FlatList
            data={this.getData()}
            renderItem={this.__renderItem}
            ListFooterComponent={this.__renderFooter}
        />)
    }

    __renderFooter(){
        return (<ListItem
            item={{title:"Load More"}}
        />)
    }

    getData() {
        return [
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
            {title: "Hello"},
        ]

    }
}
class ListItem extends React.PureComponent {
    render() {
        return ( <View style={Styles.card}>

            <Text>{this.props.item.title}</Text>
        </View>)
    }
}

const Styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 7,
        elevation: 3,
        borderRadius: 5,
        flex: 1,
        backgroundColor: '#fff'

    }
})