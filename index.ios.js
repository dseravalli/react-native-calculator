'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var divisionSymbol = '\u00f7';
var multiplicationSymbol = '\u00d7';
var minusSymbol = '\u2212';
var plusSymbol = '\u002b';
var equalSymbol = '\u003d';

var Calculator = React.createClass({

  getInitialState: function () {
    return { output: 0 };
  },

  render: function() {
    return (
      <View style={styles.container} >

        <Text style={styles.display}>{this.state.output}</Text>

        <View style={styles.buttonPad}>
          <CalculatorButton text={'C'} />
          <CalculatorButton text={divisionSymbol} />
          <CalculatorButton text={'7'} />
          <CalculatorButton text={'8'} />
          <CalculatorButton text={'9'} />
          <CalculatorButton text={multiplicationSymbol} />
          <CalculatorButton text={'4'} />
          <CalculatorButton text={'5'} />
          <CalculatorButton text={'6'} />
          <CalculatorButton text={minusSymbol} />
          <CalculatorButton text={'1'} />
          <CalculatorButton text={'2'} />
          <CalculatorButton text={'3'} />
          <CalculatorButton text={plusSymbol} />
          <CalculatorButton text={'0'} />
          <CalculatorButton text={'.'} />
          <CalculatorButton text={equalSymbol} />
        </View>

      </View>
    );
  }

});

var CalculatorButton = React.createClass({
  render: function () {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={this.onPressButton}>
          {this.props.text}
        </Text>
      </View>
    );
  },

  onPressButton: function () {
    console.log(this.props.text);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  buttonPad: {
    flex: 1,
    width: 245,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    width: 50,
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 25
  },
  display: {
    textAlign: 'right',
    fontSize: 30,
    margin: 40
  }
});

AppRegistry.registerComponent('Calculator', () => Calculator);
