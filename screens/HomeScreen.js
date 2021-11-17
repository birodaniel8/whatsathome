import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { styles } from "../Styles";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { getData, storeData, clearAll } from "../AsyncStorageFunctions";

const HomeScreen = ({ navigation }) => {
  // const itemList = ["Item1", "Item2"]
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [data, setData] = useState(null);

  const defaultItem = { itemName: "", itemDescription: "", itemNote: "" };

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  // console.log(data);

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
                        <AntDesign name="edit" size={24} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.replace("Item", { name: category.name, index: i, item: defaultItem, data: data })
                        }
                      >
                        <Ionicons name="add-circle-outline" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {category.list.map((item, j) => (
                <TouchableOpacity key={j} style={styles.itemContent}>
                  <Text style={styles.itemNameText}>{item.name}</Text>
                  <Text style={styles.itemDescriptionText}>{item.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        <TouchableOpacity onPress={() => setShowNewCategory(!showNewCategory)} style={{ marginTop: 15 }}>
          <Ionicons name="add-circle-outline" size={30} color="black" />
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
                <MaterialCommunityIcons name="send" size={24} color="black" onPress={addNewCategory} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={{ marginTop: 50 }}>
          <Button
            title="Clear all"
            onPress={() => {
              clearAll();
              setData(null);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
