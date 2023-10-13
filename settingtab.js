import React from 'react';
import {View, Button, Text,Image,TouchableOpacity,TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';

const Settab =({})=>{
    const simpleAlertHandler = () => {
        alert('Tarong ba takyangon ka ron');
      };
    const [checked, setChecked] = React.useState('first');
    return(
        
<View style={{marginTop:20}}>
<View style={{flexDirection:'row'}}>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{fontSize:25}}>NOT GOOD</Text>
      </View>

      <View style={{flexDirection:'row'}}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
       <Text style={{fontSize:25}}>GOOD</Text>
       </View>

       <View style={{flexDirection:'row'}}>
        <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
        <Text style={{fontSize:25}}>VERY GOOD</Text>
        </View>
        <Button title="WE!!!!?" onPress={simpleAlertHandler} />

</View>
        )
    }
    export default Settab