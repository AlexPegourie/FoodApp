import React from 'react';
import {View,TextInput, StyleSheet} from'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar =({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Search"
         
          value={term}
          editable={true}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    );
};

// const styles = StyleSheet.create({
//     backgroundStyle: {
//         marginTop:10,
//         backgroundColor: '#F0EEEE',
//         height:50,
//         borderRadius: 5,
//         marginHorizontal: 15,
//         flexDirection:'row',
//         marginBottom:10
//     },
//     inputStyle: {
        
//         flex:1,
//         fontSize:18
//     },
//     iconStyle:{
//         fontSize: 35,w
//         alignSelf:'center',
//         marginHorizontal:15
//     }

    
// });

export default SearchBar;
