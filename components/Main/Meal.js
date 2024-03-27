import { useState } from "react";
import { Pizza } from "../Data/MealData";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { View, Image, StyleSheet, Dimensions, Text, Pressable } from "react-native";

const { width, height } = Dimensions.get('window');

export default function Meal({ item }) {
  const navigation = useNavigation();
  const [added, setAdded] = useState(false);

  function addHandler() { setAdded(prev => !prev); }
  function removeHandler() { setAdded(prev => !prev); }

  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', { key: item.key })}
      style={[styles.mealContainer, { backgroundColor: `${added ? '#f2f2f2' : 'white'}` }]}>
      <View style={styles.center}>
        <View style={styles.mealImgContainer}>
          <SharedElement id={item.key}><Image source={item.src} style={styles.mealImg} /></SharedElement>
        </View>
      </View>
      <Text style={styles.mealTxt}>{item.title}</Text>
      <Text style={styles.quantityTxt}>{item.quantity}</Text>
      <View style={styles.bottom}>
        <Text style={styles.priceTxt}>₹{item.price}</Text>
        <TouchableOpacity>
          {!added && <Ionicons name="add-circle" size={width / 15} color='#323142' style={styles.addIcon} onPress={addHandler} />}
          {added && <Ionicons name="remove-circle" size={width / 15} color='#323142' onPress={removeHandler} />}
        </TouchableOpacity>
      </View>
    </Pressable >
  )
}

const styles = StyleSheet.create({
  mealContainer: {
    marginVertical: height / 16,
    width: width / 2.43,
    marginHorizontal: width / 40,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 12,
    borderRadius: 20
  },
  center: {
    alignItems: 'center'
  },
  mealImgContainer: {
    width: width / 3.5,
    height: width / 3.5,
    marginTop: -height / 15,
  },
  mealImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  mealTxt: {
    fontFamily: 'Raleway_700Bold',
    fontSize: width / 25,
    color: "#323142",
    marginLeft: width / 25,
    paddingRight: width / 42
  },
  quantityTxt: {
    marginLeft: width / 25,
    fontSize: width / 30,
    fontFamily: 'Raleway_700Bold',
    color: '#808080',
    marginBottom: height / 12
  },
  bottom: {
    flexDirection: 'row',
    marginHorizontal: width / 25,
    marginBottom: height / 50,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  priceTxt: {
    flex: 1,
    fontSize: width / 15,
    fontWeight: 'medium',
  }
})