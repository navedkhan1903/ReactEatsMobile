import Meal from './Meal';
import { useState } from "react";
import { MealsData } from '../Data/MealData';
import MainListHeader from "./MainListHeader";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList, StyleSheet, Dimensions, View } from "react-native";

const { width } = Dimensions.get('window');

export default function MealList({ navigation }) {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header} >
        <TouchableOpacity>
          <Ionicons name="reorder-three-outline" size={width / 15} color='#373649' onPress={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <TouchableOpacity><Ionicons name="cart-outline" size={width / 18} color='#373649' /></TouchableOpacity>
      </View>
      <FlatList
        data={MealsData.filter(meal => meal.title.toLowerCase().includes(searchText.toLowerCase()))}
        numColumns={2}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingBottom: 75 }}
        renderItem={({ item }) => <Meal item={item} />}
        ListHeaderComponent={<MainListHeader onGetText={text => setSearchText(text)} />}
        showsVerticalScrollIndicator={false} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  }
})