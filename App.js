import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput,TouchableHighlight,ScrollView, Image } from 'react-native';
// import { Container, Header, Content, Button, } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
let no = '';
let no2 = '';
let number = '';

export default class App extends React.Component {

  state = {
    value: '',    
    answer: '',
    equals: false
  }

  componentDidMount() {
    console.log("loadAsync");
    Font.loadAsync({
      'Calibri': require('./assets/Fonts/Calibri.ttf'),
    });
  }

      getValue(number){
        no2 = no.concat(number);
        no = no2;
        console.log(no2);
        this.setState({value: no2})
      }

      count(data){
        result = eval(data);
        console.log("ans :",result);
        this.setState({answer: result});
        no = '';
        no2 = '';
      }
      clear(){
        this.setState({value: '',answer: ''});
        no = '';
        no2 = '';
      }

      clearLastDigit(){
        if(this.state.equals == true){
          this.clear();
          this.setState({equals: false})
        }else{
        number = this.state.value;       
        let final = number.slice(0,-1);
        this.setState({value: final});
        no = final;
        }        
      }

      render() {
        return (
          <ScrollView>

          <View style={styles.container}>

          <View style = {{flex: 5,flexDirection:'column' , position: 'absolute',}}>
          <View>
          <TouchableHighlight onPress={()=>{this.clearLastDigit()}}>
          <Image
          style={styles.backImage}
          source={require('./assets/D.png')}
          />
          </TouchableHighlight>
          </View>
          <View style = {styles.lineStyle}>
          <Text style = {styles.displayData}>{this.state.value}</Text>
          <Text style = {styles.displayData}>{this.state.answer}</Text>
          </View>
          </View>

          <View style = {{flex: 1,flexDirection:'row', marginTop: 330,}}>

          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{this.clear()}}>
          <Text style = {[styles.text,styles.c]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{this.getValue('(')}}>
          <Text style = {[styles.text,styles.last]}>()</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{this.getValue('%')}}>
          <Text style = {[styles.text,styles.last]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{this.getValue('/')}}>
          <Text style = {[styles.text,styles.last]}>/</Text>
          </TouchableOpacity>      

          </View>

          <View style = {{flex: 1,flexDirection:'row'}}>

          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{this.getValue(7)}}>
          <Text style = {styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{this.getValue(8)}}>
          <Text style = {styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{{this.getValue(9)}}}>
          <Text style = {styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{this.getValue('*')}} >
          <Text style = {[styles.text,styles.last]}>*</Text>
          </TouchableOpacity>

          </View>


          <View style = {{flex: 1,flexDirection:'row'}}>

          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(4)}}}>
          <Text style = {styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(5)}}}>
          <Text style = {styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{{this.getValue(6)}}}>
          <Text style = {styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{{this.getValue("-")}}} >
          <Text style = {[styles.text,styles.last]}>-</Text>
          </TouchableOpacity>

          </View>


          <View style = {{flex: 1,flexDirection: 'row'}}>

          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(1)}}}>
          <Text style = {styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(2)}}}>
          <Text style = {styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(3)}}}>
          <Text style = {styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress = {()=>{{this.getValue("+")}}}>
          <Text style = {[styles.text,styles.last]}>+</Text>
          </TouchableOpacity>

          </View>

          <View style = {{flex: 1,flexDirection:'row'}}>

          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{}}>
          <Text style = {styles.text}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(0)}}}>
          <Text style = {styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}  onPress = {()=>{{this.getValue(".")}}}>
          <Text style = {styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonStyle,styles.equalButtonStyle]} onPress = {()=>{this.count(this.state.value),this.setState({equals: true})}}>
          <Text style = {styles.text}>=</Text>
          </TouchableOpacity>
          </View>

          </View>
          </ScrollView>

          );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#484954',
    padding: 10,
    height: 50,
    width: 50,
    margin: 4.2,   
    textAlign:'center',    
    borderRadius: 80,
    borderWidth: 0.5,
    flex: 1, 
    justifyContent: 'center'   
  },
  text:{    
    color: '#fff',
    fontSize: 30,
    // fontFamily: 'Calibri',
  },
  displayData:{
    marginLeft: 50,
    color: '#fff',
    fontSize: 30,
    top: -75,
    // left: 40
  },
  c:{
    color: '#D4601D',
    // fontFamily: 'Roboto'
  },
  last: {
    color: '#72C668',
    // fontFamily: 'Roboto'
  },
  equalButtonStyle:{
    alignItems: 'center',
    backgroundColor: '#72C668',
    padding: 10,
    height: 50,
    width: 50,
    margin: 5,   
    textAlign:'center',    
    borderRadius: 50,
    borderWidth: 0.5,
    flex: 1, 
    justifyContent: 'center'   
  },
  inputText:{   
    marginBottom: 50, 
    borderWidth: 20 
  },
  backImage:{
    width: 30,
    height: 20,
    backgroundColor: 'transparent',
    marginLeft: 300,
    marginBottom: 30,
    marginRight: 50
  },
  lineStyle:{
    flex:1 ,
    marginLeft: 40,
    height: 1,
    width: 300,
    borderBottomColor: '#484954',
    borderBottomWidth: 1,
    marginBottom: 40,
  }
});
