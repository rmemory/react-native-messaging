import { StyleSheet, View, Text }  from 'react-native';
import React from 'react';

export default class App extends React.Component {
	renderMessageList() {
		return (
			<View style={styles.messages}>
				<Text>Messages</Text>
			</View>
		);
	}

	renderToolbar() {
		return (
			<View style={styles.toolbar}>
				<Text>Toolbar</Text>
			</View>
		);
	}

	renderInputMethodEditor() {
		return (
			<View style={styles.inputMethodEditor}>
				<Text>Input method</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderMessageList()}
				{this.renderToolbar()}
				{this.renderInputMethodEditor()}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	// Top level styles
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

	// Styles for messages
	messages: {
		flex: 1,
		backgroundColor: 'white',
	},

	// Styles for toolbar
	toolbar: {
		// Because this doesn't have flex: 1, it will have minimal size
		borderTopWidth: 1,
		borderTopColor: 'rgba(0,0,0,0.04)',
		backgroundColor: 'red',
	},

	// Styles for input editor
	inputMethodEditor: {
		flex: 1,
		backgroundColor: 'white',
	},
});
