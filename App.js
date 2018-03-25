import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			todo: []
		};
	}

	deleteTodo(t) {
		var arr = this.state.todo;
		var position = arr.indexOf(t);
		arr.splice(position, 1);
		this.setState({ todo: arr });
	}

	addTodo = () => {
		var newTodo = this.state.text;
		var arr = this.state.todo;
		arr.push(newTodo);
		this.setState({ todo: arr });
	};

	renderTodo = () => {
		return this.state.todo.map(t => {
			return (
				<Text
					key={t}
					style={styles.todoStyle}
					onPress={() => {
						this.deleteTodo(t);
					}}
				>
					{t}
				</Text>
			);
		});
	};
	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<Text style={styles.headerStyle}>ToDo App</Text>

					<TextInput
						style={styles.inputStyle}
						underlineColorAndroid="transparent"
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
					/>

					<Button title="Add" onPress={this.addTodo} />
					<View style={{ marginTop: 50 }}>{this.renderTodo()}</View>
				</View>
			</View>
		);
	}
}

const styles = {
	wrapper: {
		flex: 1,
		backgroundColor: '#0288D1'
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		color: 'white'
	},
	inputStyle: {
		height: 40,
		width: 300,
		color: 'white',
		borderColor: 'white',
		borderWidth: 1
	},
	todoStyle: {
		fontSize: 24,
		color: 'white'
	}
};
