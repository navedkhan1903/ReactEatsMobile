import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Animated, StyleSheet, Easing, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default function DetailHeader() {
  const navigation = useNavigation();
  const [favourite, setFavourite] = useState(false);
  const visible = useRef(new Animated.Value(0)).current;

  function favouriteHandler() { setFavourite((prev) => !prev) }

  useEffect(() => {
    function visibilityHandler() {
      Animated.timing(visible, {
        toValue: 1, duration: 250, useNativeDriver: true, delay: 250, easing: Easing.bezier(0.33, 1, 0.68, 1)
      }).start();
    };
    visibilityHandler();
  }, [])

  return (
    <Animated.View style={[styles.header, { opacity: visible }]} >
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={width / 15} color='#323142' onPress={() => navigation.goBack()} />
      </TouchableOpacity>
      {favourite && <TouchableOpacity>
        <Ionicons name="heart" size={width / 18} color='#DC3023' onPress={favouriteHandler} />
      </TouchableOpacity>}
      {!favourite && <TouchableOpacity>
        <Ionicons name="heart-outline" size={width / 18} color='#323142' onPress={favouriteHandler} />
      </TouchableOpacity>}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 15
  },
})