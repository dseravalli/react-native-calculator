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

          <View>
            <CalculatorButton text={'C'} />
            <CalculatorButton text={'7'} />
            <CalculatorButton text={'4'} />
            <CalculatorButton text={'1'} />
            <CalculatorButton text={'0'} />
          </View>

          <View>
            <BlankCell />
            <CalculatorButton text={'8'} />
            <CalculatorButton text={'5'} />
            <CalculatorButton text={'2'} />
          </View>

          <View>
            <BlankCell />
            <CalculatorButton text={'9'} />
            <CalculatorButton text={'6'} />
            <CalculatorButton text={'3'} />
            <CalculatorButton text={'.'} />
          </View>

          <View>
            <CalculatorButton text={divisionSymbol} />
            <CalculatorButton text={multiplicationSymbol} />
            <CalculatorButton text={minusSymbol} />
            <CalculatorButton text={plusSymbol} />
            <CalculatorButton text={equalSymbol} />
          </View>

        </View>

      </View>
    );
  }

});

var CalculatorButton = React.createClass({
  render: function () {
    return (
      <View style={[styles.button, this.props.text === '0' && styles.zeroButton]}>
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

var BlankCell = React.createClass({
  render: function () {
    return ( <View style={styles.blankCell} /> );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonPad: {
    flex: 1,
    width: 245,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  blankCell: {
    width: 50,
    height: 50,
    margin: 5
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
  zeroButton: {
    // width: 100,
  },
  display: {
    textAlign: 'right',
    fontSize: 30,
    width: 245,
    padding: 5,
    margin: 40
  }
});

AppRegistry.registerComponent('Calculator', () => Calculator);
