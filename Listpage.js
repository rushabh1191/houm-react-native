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

	_keyGetter = (item, index) => item.id + "";
	__renderItem = ({item, index}) => {
		return (<ListItem
			id={item.id}
			key={index}
			onItemPressed={this.__onItemPressed}
			item={item}/>)
	};

	render() {
		return (<FlatList
			data={this.state.data}
			renderItem={this.__renderItem}
			keyExtractor={this._keyGetter}
			ListFooterComponent={this.__renderFooter}
		/>)
	}

	__onItemPressed = (item) => {
		const id = item.id;
		const oldObject = this.state.data[id];

		const newData = [...this.state.data];
		var newObject = Object.assign({}, oldObject)

		newObject.isExpanded = !newObject.isExpanded;

		newData[id] = newObject;

		this.setState({
			data: newData
		})
	};
	__renderFooter = () => {
		return (<TouchableHighlight onPress={()=> {

            var currentList = this.state.data;
            currentList=currentList.concat(this.getData());
            this.setState({
                data: currentList
            })
        }}>
			<Text style={{fontSize: 20, textAlign: 'center', padding: 10}}> Load more ...</Text>

		</TouchableHighlight>);
	};

	getData() {
		var index;
		if (!this.state) {
			index = 0
		} else {
			index = this.state.data.length;
		}
		const items = 10;
		var currentItem = 0;
		var array = [];
		while (currentItem < items) {
			array.push({id: index, title: `Hello ${index}`, isExpanded: false});
			index++;
			currentItem++;
		}
		return array;


	}
}
class ListItem extends React.PureComponent {
	__onPressed = () => {
		this.props.onItemPressed(this.props.item)
	};

	__getExpandedView = () => {
		if (this.props.item.isExpanded) {
			return (<View>
				<Text style={{fontSize:25,textAlign:'center'}}>Expanded</Text>
			</View>)
		} else {
			return (<View/>);
		}

	};

	render() {
		return (
			<View style={Styles.card}>
				<TouchableHighlight onPress={this.__onPressed} underlayColor={'#fff'}>
					<View style={{flex:1}}>
						<Text style={{fontSize:25,textAlign:'center'}}>{this.props.item.title}</Text>
						{this.__getExpandedView()}
					</View>
				</TouchableHighlight>
			</View>
		)
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