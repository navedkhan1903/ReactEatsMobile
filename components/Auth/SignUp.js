import Input from './Input';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Dimensions, Pressable, Text } from "react-native";

const { width, height } = Dimensions.get('window');

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Ionicons name="arrow-back-outline" size={width / 13} style={styles.backBtn} onPress={() => navigation.navigate('Home')} />
      <View style={styles.container}>
        <Text style={styles.titleTxt}>Create Account</Text>
        <Input name={"person-circle-outline"} placeholder={"Full Name"} secured={false} />
        <Input name={"mail-outline"} placeholder={"Email Address"} secured={false} />
        <Input name={"key-outline"} placeholder={"Password"} secured={true} />
        <Pressable style={styles.btn}><Text style={styles.btnText}>Sign Up</Text></Pressable>
        <Text style={styles.bottomTxt}>Already have an account?
          <Text style={styles.bottomTxtBold} onPress={() => navigation.navigate('LogIn')}> Log In</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    marginTop: height / 50,
    marginLeft: width / 20,
    color: "#323142"
  },
  titleTxt: {
    fontSize: width / 12,
    fontFamily: 'Raleway_700Bold',
    marginBottom: height / 10,
    color: "#323142"
  },
  btn: {
    width: width / 1.2,
    backgroundColor: "#323142",
    paddingVertical: height / 35,
    alignItems: 'center',
    marginBottom: height / 60
  },
  btnText: {
    color: 'white',
    fontFamily: 'Raleway_600SemiBold',
    lineHeight: 16,
    fontSize: width / 25
  },
  bottomTxt: {
    color: '#808080',
    fontFamily: 'Raleway_600SemiBold',
    fontSize: width / 25
  },
  bottomTxtBold: {
    color: '#323142',
    fontFamily: 'Raleway_800ExtraBold'
  }
});