import { MealsData } from '../Data/MealData';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Cart({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="reorder-three-outline" size={width / 15} color='#373649' onPress={() => navigation.openDrawer()} />
        </TouchableOpacity>
        <TouchableOpacity><Ionicons name="trash-outline" size={width / 20} color='#373649' /></TouchableOpacity>
      </View>
      <View style={styles.cartBody}>
        <Text style={styles.mainTitle}>My</Text>
        <Text style={styles.secTitle}>Cart List</Text>
        <View style={styles.cartItem}>
          <View style={styles.cartImgContainer}><Image source={MealsData[0].src} style={styles.cartImg} /></View>
          <View style={styles.itemDisc}>
            <Text style={styles.itemTitle}>{MealsData[0].title}</Text>
            <Text style={styles.itemPrice}>₹{MealsData[0].price}<Text style={styles.itemQuantity}> x2</Text></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  cartBody: {
    paddingHorizontal: 0
  },
  mainTitle: {
    color: "#323142",
    fontSize: width / 15,
    fontFamily: 'Raleway_700Bold'
  },
  secTitle: {
    color: "#323142",
    fontSize: width / 15,
    fontFamily: 'Raleway_600SemiBold'
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartImgContainer: {
    width: width / 5,
    height: width / 5,
    marginVertical: 25
  },
  cartImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  itemDisc: {
    paddingHorizontal: 10
  },
  itemTitle: {
    color: "#323142",
    fontSize: width / 25,
    fontFamily: 'Raleway_700Bold'
  },
  itemPrice: {
    color: "#323142",
    fontSize: width / 25,
    fontWeight: 'bold',
    paddingTop: 5
  },
  itemQuantity: {
    color: '#808080'
  }
})