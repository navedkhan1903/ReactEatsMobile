import Category from "./Category";
import { FlatList } from "react-native";
import { CategoryData } from '../Data/CategoryData';

export default function CategoryList(props) {
  return (
    <FlatList
      horizontal={true}
      data={CategoryData}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (<Category item={item} onGetCategory={console.log(props)} />)} />
  )
}