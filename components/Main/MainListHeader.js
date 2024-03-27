import CategoryList from './CategoryList';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MainListHeader(props) {
  const [enteredText, setEnteredText] = useState('');

  useEffect(() => { props.onGetText(enteredText); }, [enteredText])

  return (
    <>
      <Text style={styles.welcome}>Hi, Naved Khan</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={width / 18} color='#373649' style={styles.searchImg} />
        <TextInput value={enteredText} placeholder="Search" style={styles.searchInput} onChangeText={text => setEnteredText(text)} />
      </View>
      <CategoryList />
      <Text style={styles.categoryTitle}>All Items</Text>
    </>
  )
}

const styles = StyleSheet.create({
  welcome: {
    color: "#323142",
    fontSize: width / 15,
    fontFamily: 'Raleway_700Bold'
  },
  searchContainer: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },
  searchImg: {
    paddingHorizontal: 10
  },
  searchInput: {
    paddingVertical: height / 60,
    width: width / 1.2,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: width / 25,
    color: "#323142",
  },
  categoryTitle: {
    color: "#323142",
    fontSize: width / 15,
    fontFamily: 'Raleway_700Bold',
    marginVertical: 50
  }
})