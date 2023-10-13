import React from 'react';
import {View, Button,Image,TouchableOpacity,TextInput,SearchBar} from 'react-native';
import { Searchbar,Divider,Text} from 'react-native-paper';
import Toggle from 'react-native-toggle-input';




const Details =({navigation})=>{
 
  const [toggle, setToggle] = React.useState(false);

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'blue'}}>
          <View style={{marginBottom:100}}>
          <View style={{flexDirection:'row',alignContent:'center', gap:20, marginLeft:15}}>
          <Text style={{fontSize:25, marginBottom:10}}>PLEASE TOGGLE ME</Text>
          <Toggle toggle={toggle} setToggle={setToggle} color={'black'} onTrue={() => {}} onFalse={() => {}} />
          </View>
        
        <View style={{marginBottom:30}}>
             <Searchbar style={{width:350}}
          placeholder="Search"
          icon="magnify"
    />
    </View>
    </View>

    <View style={{marginBottom:50}}>
    <Text style={{fontSize:25 ,backgroundColor:'pink',color:'black'}}>CORN STAR</Text>
    <Divider/>
    <Text style={{fontSize:38}}>JESRIEL GWAPO</Text>
    <Divider />
    <Text style={{fontSize:35}}>ARNEL TISOY</Text>
    <Divider />
    <Text style={{fontSize:35}}>JESREL PALAHUBOG</Text>
    <Divider />
    <Text style={{fontSize:35}}>KENT CHIXBOII</Text>
    <Divider />
    </View>

    <View style={{marginTop:40}}>
     <Button title='TO DROPDOWN MENU' onPress={()=>navigation.navigate('Lastpage')}/>
     <View style={{marginTop:10}}>
     <Button title='GoingToImgBackground' onPress={()=>navigation.navigate('imageback')}/>
     
     </View>
     </View>
    </View>

    )
}


export default Details;
