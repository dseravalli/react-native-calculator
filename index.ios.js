'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var divisionSymbol = '\u00f7';
var multiplicationSymbol = '\u00d7';
var minusSymbol = '\u2212';
var plusSymbol = '\u002b';
var equalSymbol = '\u003d';
var plusMinusSymbol = '\u00b1';

var Calculator = React.createClass({

  getInitialState: function () {
    return { output: 0 };
  },

  onButtonPress: function (button) {
    console.log(button);
    var output = this.state.output + button + '';
    this.setState({ output: output });
  },

  render: function() {
    return (
      <View style={styles.container} >

        <Text style={styles.display}>{this.state.output}</Text>

        <View style={styles.buttonPad}>

          <View>
            <CalculatorButton text={'AC'} onButtonPress={ this.onButtonPress } />
            <CalculatorButton text={'7'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'4'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'1'} onButtonPress={ this.onButtonPress }/>
          </View>

          <View>
            <CalculatorButton text={plusMinusSymbol} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'8'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'5'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'2'} onButtonPress={ this.onButtonPress }/>
          </View>

          <View>
            <CalculatorButton text={'%'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'9'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'6'} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={'3'} onButtonPress={ this.onButtonPress }/>
          </View>

          <View>
            <CalculatorButton text={divisionSymbol} onButtonPress={ this.onButtonPress } />
            <CalculatorButton text={multiplicationSymbol} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={minusSymbol} onButtonPress={ this.onButtonPress }/>
            <CalculatorButton text={plusSymbol} onButtonPress={ this.onButtonPress }/>
          </View>

        </View>

        <View style={styles.bottomRow}>
          <CalculatorButton text={'0'} onButtonPress={ this.onButtonPress }/>
          <CalculatorButton text={'.'} onButtonPress={ this.onButtonPress }/>
          <CalculatorButton text={equalSymbol} onButtonPress={ this.onButtonPress } />
        </View>

    </View>
  );
}

});

var CalculatorButton = React.createClass({
render: function () {
  return (
    <TouchableHighlight
      style={[styles.button,
              this.props.text === '0' && styles.zeroButton,
      ]}
      onPress={this.props.onButtonPress.bind(this, this.props.text)}>

      <View>
          <Text style={styles.buttonText}>
            {this.props.text}
          </Text>
        </View>

      </TouchableHighlight>
    );
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
    alignItems: 'center'
  },
  buttonPad: {
    flex: 1,
    flexDirection: 'row'
  },
  blankCell: {
    width: 50,
    height: 50
  },
  button: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },
  buttonText: {
    fontSize: 25,
  },
  bottomRow: {
    flex: 1,
    marginTop: -210,
    flexDirection: 'row'
  },
  zeroButton: {
    width: 100,
    alignItems: 'flex-start',
    paddingLeft: 18
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
