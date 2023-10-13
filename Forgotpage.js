import React from 'react';
import {ActivityIndicator, StyleSheet, View,Text} from 'react-native';

const Forgotpage =()=>{
   
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  
     </View>
     <Text style={{marginBottom:400}}>nakalimtan ebiiii</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
});
export default Forgotpage