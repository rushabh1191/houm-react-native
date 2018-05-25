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
    TouchableHighlight
} from 'react-native';


type
Props = {};

export default class ListPage extends Component {

    constructor() {
        super();
        this.state =
        {data: this.getData()}
    }

    __renderItem({item,index}) {
        return (<ListItem
            key={index}
            item={item}/>)
    }

    render() {
        return (<FlatList
            data={this.state.data}
            renderItem={this.__renderItem}
            ListFooterComponent={this.__renderFooter}
        />)
    }


    __renderFooter = ()=> {
        return (<TouchableHighlight onPress={()=> {

            var currentList = this.state.data;
            currentList=currentList.concat(this.getData());
            this.setState({
                data: currentList
            })
        }}>
            <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}> Load more ...</Text>

        </TouchableHighlight>);
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

            <Text style={{fontSize:25,textAlign:'center'}}>{this.props.item.title}</Text>
        </View>)
    }
}

const Styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 7,
        elevation: 3,
        borderRadius: 20,
        flex: 1,
        backgroundColor: '#fff'

    }
})