import React, { useState} from 'react';
import {View, Text, StyleSheet} from'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';
const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [searchApi,results] = useResults();
   
    return (
    <View>
        <SearchBar
         term={term} 
         onTermChange={setTerm}
         onTermSubmit={()=> searchApi(term)}
         />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} results</Text>
        <ResultsList title= 'Cost Effective'/>
        <ResultsList title='Bit Pricier'/>
        <ResultsList title= 'Big Spender'/>
    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;