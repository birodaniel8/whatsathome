import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Text, Input } from "react-native-elements";
import { styles } from "../Styles";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { storeData } from "../AsyncStorageFunctions";

const ItemScreen = ({ navigation, route }) => {
  const { index, item, itemIndex, data } = route.params;
  const { itemName, itemDescription, itemNote } = item;
  const newItem = itemName === "";
  const [newItemName, setNewItemName] = useState(itemName);
  const [newItemDescription, setNewItemDescription] = useState(itemDescription);
  const [newItemNote, setNewItemNote] = useState(itemNote);

  const deleteItem = () => {
    if (!newItem) {
      data.categories[index].list.splice(itemIndex, 1);
      storeData(data).then(() => navigation.replace("Home"));
    }
  };

  const updateItem = () => {
    if (itemIndex) {
      data.categories[index].list[itemIndex]({ name: newItemName, description: newItemDescription, note: newItemNote });
    } else {
      data.categories[index].list.push({ name: newItemName, description: newItemDescription, note: newItemNote });
    }
    storeData(data).then(() => navigation.replace("Home"));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={() => navigation.replace("Home")}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.h2text}>{newItem ? "New item" : "Edit item"}</Text>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color={newItem ? "#3D1F90" : "red"} onPress={deleteItem} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <View style={styles.itemEdit}>
          <Text style={styles.semiBoldText}>Name:</Text>
          <Input
            value={newItemName}
            onChangeText={(text) => setNewItemName(text)}
            // inputContainerStyle={styles.inputField}
          />
          <Text style={styles.semiBoldText}>Description:</Text>
          <Input
            value={newItemDescription}
            onChangeText={(text) => setNewItemDescription(text)}
            // inputContainerStyle={styles.inputField}
          />
          <Text style={styles.semiBoldText}>Notes:</Text>
          <TextInput
            value={newItemNote}
            onChangeText={(text) => setNewItemNote(text)}
            multiline
            editable
            maxLength={40}
            numberOfLines={4}
            style={{ borderWidth: 1 }}
          />
        </View>
        <TouchableOpacity onPress={updateItem}>
          {newItem ? (
            <Ionicons name="add-circle-outline" size={40} color="black" />
          ) : (
            <FontAwesome5 name="save" size={40} color="black" />
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ItemScreen;
