import React from 'react';
import {View, Button, Text,Image,TouchableOpacity,TextInput,ImageBackground} from 'react-native';

const Home =({navigation})=>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
            <View style={{ marginBottom:50}}>
            <Image source={require('./assets/pngwing.com.png')} 
                   style={{width: 300, height: 300, }} />

      <TextInput
        style={{height: 40, color:'white', borderWidth:1, borderColor:'white', margin: 12,padding: 10,}}
        placeholder="Enter Username"
      />
      <TextInput
        style={{  height: 40,margin: 12, borderWidth: 1,padding: 10, color: 'white',  borderColor: 'white'}}
        placeholder="Enter password"
      />
    
            <Button title='Log in' onPress={()=>navigation.navigate('Details')}/>

        <TouchableOpacity onPress={()=>navigation.navigate('Forgotpage')}>
        <Text style={{color:'blue', marginLeft:90,marginTop:20}}>Forgot password?</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}
export default Home