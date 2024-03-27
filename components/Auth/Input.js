import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TextInput, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default function Input({ name, placeholder, secured }) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={name} size={width / 20} style={styles.inputImg} />
      <TextInput style={styles.inputField} placeholder={placeholder} secureTextEntry={secured} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f0f4',
    marginBottom: height / 40
  },
  inputImg: {
    paddingHorizontal: width / 30,
    borderRightWidth: 1,
    borderColor: '#b7b6c9',
    color: '#373649'
  },
  inputField: {
    width: width / 1.4,
    paddingHorizontal: width / 20,
    paddingVertical: height / 50,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: width / 25,
    color: "#323142",
  },
})