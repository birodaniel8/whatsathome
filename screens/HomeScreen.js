import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Input, Text } from "react-native-elements";
import { styles } from "../Styles";
import { Ionicons, AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { getData, storeData } from "../AsyncStorageFunctions";

const HomeScreen = ({ navigation }) => {
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [data, setData] = useState(null);
  const defaultItem = { itemName: "", itemDescription: "", itemNote: "" };

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  const addNewCategory = () => {
    const newData = data ? { ...data } : { categories: [] };
    newData.categories.push({ name: newCategory, list: [] });
    storeData(newData).then(() => setData(newData));
    setNewCategory("");
    setShowNewCategory(false);
  };

  getData().then((response) => {
    console.log(response);
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageHeader}>
        <Text style={styles.h1text}>What'sAtHome</Text>
      </View>
      <ScrollView contentContainerStyle={styles.pageContent}>
        {data &&
          data.categories.map((category, i) => (
            <View key={i} style={styles.categoryContent}>
              <View style={styles.category}>
                <View style={styles.categoryHeader}>
                  <Text style={styles.categoryHeaderText}>{category.name}</Text>
                  <View>
                    <View style={styles.categoryHeaderIcons}>
                      <TouchableOpacity
                        onPress={() => navigation.replace("Category", { name: category.name, index: i, data: data })}
                      >
                        <AntDesign name="edit" size={28} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ marginLeft: 5 }}
                        onPress={() => navigation.replace("Item", { index: i, item: defaultItem, data: data })}
                      >
                        <MaterialIcons name="playlist-add" size={28} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {category.list.map((item, j) => (
                <TouchableOpacity
                  key={j}
                  style={styles.itemContent}
                  onPress={() =>
                    navigation.replace("Item", { index: i, item: data.categories[i].list[j], itemIndex: j, data: data })
                  }
                >
                  <Text style={styles.itemNameText}>{item.itemName}</Text>
                  <Text style={styles.itemDescriptionText}>{item.itemDescription}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        <TouchableOpacity onPress={() => setShowNewCategory(!showNewCategory)} style={{ marginTop: 15 }}>
          <Ionicons name="add-circle-outline" size={34} color="black" />
        </TouchableOpacity>
        {showNewCategory && (
          <View style={{ ...styles.categoryEdit, borderWidth: 0 }}>
            <View style={styles.categoryHeader}>
              <View style={{ width: "95%" }}>
                <Input
                  value={newCategory}
                  onChangeText={(text) => setNewCategory(text)}
                  inputContainerStyle={styles.inputField}
                />
              </View>
              <TouchableOpacity style={{ paddingTop: 8 }}>
                <MaterialCommunityIcons name="send" size={26} color="black" onPress={addNewCategory} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
