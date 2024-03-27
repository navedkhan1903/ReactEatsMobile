import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export default function DetailFooter({ price }) {
  return (
    <View style={styles.bottomItemsContainer}>
      <View style={styles.bottomItems}>
        <Text style={styles.mealPrice}>₹{price}</Text>
        <Pressable style={styles.cartBtn}>
          <Ionicons name="cart" size={width / 25} color="white" />
          <Text style={styles.cartTxt}>Add To Cart</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mealPrice: {
    color: "#323142",
    fontSize: width / 10
  },
  cartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#323142',
    paddingVertical: 15,
    justifyContent: 'center',
    width: width / 2.5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  cartTxt: {
    color: 'white',
    paddingLeft: 5,
    fontSize: width / 25,
    fontFamily: 'Raleway_700Bold'
  },
  bottomItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomItemsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25
  }
})