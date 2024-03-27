import DetailFooter from "./DetailFooter";
import DetailHeader from "./DetailHeader";
import { MealsData } from "../Data/MealData";
import { SharedElement } from "react-navigation-shared-element";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, StyleSheet, Dimensions, View, Image } from "react-native";

const { width, height } = Dimensions.get('window');

export default function Detail({ route }) {
  const insets = useSafeAreaInsets();
  const key = route.params.key;

  return (
    <View style={[styles.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <DetailHeader />
      <View style={styles.upper}>
        <SharedElement id={key} style={styles.mealImgContainer}>
          <Image source={MealsData[key].src} style={styles.mealImg} />
        </SharedElement>
      </View>
      <View style={styles.lower}>
        <Text style={styles.mealTitle}>{MealsData[key].title}</Text>
        <Text style={styles.mealSubtitle}>{MealsData[key].quantity}</Text>
        <Text style={styles.mealDisc}>{MealsData[key].disc}</Text>
        <DetailFooter price={MealsData[key].price} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  upper: {
    flex: 1,
    backgroundColor: 'white'
  },
  mealImgContainer: {
    flex: 0.75
  },
  mealImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  lower: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 50,
    paddingHorizontal: 50
  },
  mealTitle: {
    paddingTop: height / 10,
    color: "#323142",
    fontSize: width / 15,
    fontFamily: 'Raleway_700Bold'
  },
  mealSubtitle: {
    fontSize: width / 20,
    fontFamily: 'Raleway_700Bold',
    color: '#808080'
  },
  mealDisc: {
    fontSize: width / 25,
    marginTop: height / 20,
    fontFamily: 'Raleway_600SemiBold',
    color: '#404040'
  }
})