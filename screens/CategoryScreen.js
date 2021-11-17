import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Input } from "react-native-elements";
import { styles } from "../Styles";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { storeData } from "../AsyncStorageFunctions";

const CategoryScreen = ({ navigation, route }) => {
  const { name, index, data } = route.params;
  const [categoryName, setCategoryName] = useState(name);

  const updateCategory = () => {
    data.categories[index].name = categoryName;
    storeData(data).then(() => navigation.replace("Home"));
  };

  const deleteCategory = () => {
    data.categories.splice(index, 1);
    storeData(data).then(() => navigation.replace("Home"));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={() => navigation.replace("Home")}>
          <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.h2text}>Edit category</Text>
        <TouchableOpacity>
          <AntDesign name="delete" size={28} color="red" onPress={deleteCategory} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <View style={styles.categoryEdit}>
          <View style={styles.categoryHeader}>
            <View style={{ width: "95%" }}>
              <Input
                value={categoryName}
                onChangeText={(text) => setCategoryName(text)}
                inputContainerStyle={styles.inputField}
              />
            </View>
            <TouchableOpacity style={{ paddingTop: 8 }}>
              <MaterialCommunityIcons name="send" size={26} color="black" onPress={updateCategory} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
