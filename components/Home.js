import { useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View, Pressable, Dimensions, Animated, Easing } from 'react-native';

const bgUrl = "../assets/images/home_img.jpg";
const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
  const moveUp = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    function moveUpHandler() {
      Animated.timing(moveUp, { toValue: 0, duration: 1000, useNativeDriver: false, easing: Easing.bezier(0.33, 1, 0.68, 1) }).start();
    };
    moveUpHandler();
  }, [])

  return (
    <ImageBackground style={styles.bgImg} source={require(bgUrl)} resizeMode="cover">
      <View style={styles.container}>
        <Animated.View style={{ marginTop: moveUp }}>
          <Text style={styles.react}>React<Text style={styles.eats}>Eats</Text></Text>
        </Animated.View>
        <View style={styles.subContainer}>
          <Text style={styles.sub}>Get your favourite meal delivered at your doorstep.</Text>
        </View>
        <Pressable style={styles.homeBtn} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImg: {
    flex: 1,
    justifyContent: "center"
  },
  react: {
    fontSize: width / 8,
    fontFamily: 'Raleway_600SemiBold',
    color: '#323142',
  },
  eats: {
    fontFamily: 'Raleway_800ExtraBold'
  },
  subContainer: {
    width: '58%',
    alignItems: 'center',
  },
  sub: {
    fontSize: width / 25,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Raleway_700Bold',
    margin: height / 90
  },
  homeBtn: {
    backgroundColor: '#323142',
    marginTop: height / 45,
    borderRadius: 40,
    paddingHorizontal: width / 10,
    paddingTop: height / 45,
    paddingBottom: height / 40
  },
  btnText: {
    color: 'white',
    fontFamily: 'Raleway_600SemiBold',
    fontSize: width / 20
  }
});