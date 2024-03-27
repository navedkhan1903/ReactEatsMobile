import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';

const { width } = Dimensions.get('window');

export default function Category({ item }, props) {
  return (
    <Pressable style={styles.categoryItem} onPress={() => props.onGetCategory(item.title)}>
      <View style={styles.categoryImgContainer}> <Image source={item.src} style={styles.img} /></View>
      <Text style={styles.categoryText}>{item.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  categoryItem: {
    width: width / 4.9,
    alignItems: 'center'
  },
  categoryImgContainer: {
    width: width / 8,
    height: width / 8,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryText: {
    marginTop: 10,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: width / 30,
    color: "#323142",
  }
})