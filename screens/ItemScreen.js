import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Text, Input } from "react-native-elements";
import { styles } from "../Styles";
import { Ionicons, AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { storeData } from "../AsyncStorageFunctions";

const ItemScreen = ({ navigation, route }) => {
  const { index, item, itemIndex, data } = route.params;
  const { itemName, itemDescription, itemNote } = item;
  const isNewItem = itemName === "";
  const [newItemName, setNewItemName] = useState(itemName);
  const [newItemDescription, setNewItemDescription] = useState(itemDescription);
  const [newItemNote, setNewItemNote] = useState(itemNote);

  const deleteItem = () => {
    if (!isNewItem) {
      data.categories[index].list.splice(itemIndex, 1);
      storeData(data).then(() => navigation.replace("Home"));
    }
  };

  const updateItem = () => {
    const newItem = { itemName: newItemName, itemDescription: newItemDescription, itemNote: newItemNote };
    if (!isNewItem) {
      data.categories[index].list[itemIndex] = newItem;
    } else {
      data.categories[index].list.push(newItem);
    }
    storeData(data).then(() => navigation.replace("Home"));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={() => navigation.replace("Home")}>
          <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.h2text}>{isNewItem ? "New item" : "Edit item"}</Text>
        <TouchableOpacity>
          <AntDesign name="delete" size={28} color={isNewItem ? "#3D1F90" : "red"} onPress={deleteItem} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <View style={styles.itemEdit}>
          <Text style={styles.semiBoldText}>Name:</Text>
          <Input
            value={newItemName}
            placeholder="Item name"
            onChangeText={(text) => setNewItemName(text)}
            inputContainerStyle={styles.inputField}
          />
          <Text style={styles.semiBoldText}>Description:</Text>
          <Input
            value={newItemDescription}
            placeholder="Item description"
            onChangeText={(text) => setNewItemDescription(text)}
            inputContainerStyle={styles.inputField}
          />
          <Text style={styles.semiBoldText}>Notes:</Text>
          <TextInput
            value={newItemNote}
            placeholder="Add notes"
            onChangeText={(text) => setNewItemNote(text)}
            multiline
            maxLength={500}
            numberOfLines={3}
            style={styles.multiLineInputField}
          />
        </View>
        <TouchableOpacity onPress={updateItem}>
          {isNewItem ? (
            <MaterialIcons name="playlist-add" size={40} color="black" />
          ) : (
            <FontAwesome5 name="save" size={40} color="black" />
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ItemScreen;
