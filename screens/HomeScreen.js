import React, { useEffect, useState } from 'react'
import { Image, View, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button, Input, Text } from "react-native-elements";
import { styles } from "../Styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  // const itemList = ["Item1", "Item2"]
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then(response => setData(response))
  }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
      setData(null)
    } catch (e) {
      // clear error
    }

    console.log('Done.')
  }


  const addNewCategory = () => {
    const newData = { ...data, [newCategory]: {} }
    storeData(newData).then(() => setData(newData))
  }

  getData().then(response => { console.log(response) })

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageHeader}>
        <Text style={styles.h1text}>What'sAtHome</Text>
      </View>
      <ScrollView contentContainerStyle={styles.pageContent}>
        {data && Object.keys(data).map(category => (
          <View style={styles.category} key={category}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryHeaderText}>{category}</Text>
              <View>
                <View style={styles.categoryHeaderIcons}>
                  <TouchableOpacity>
                    <AntDesign name="edit" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="add-circle-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
        {/* {data && Object.keys(data).map(item => (
          <TouchableOpacity key={item} onPress={() => navigation.replace("Item", { itemName: item })}>
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        ))} */}
        <TouchableOpacity onPress={() => setShowNewCategory(!showNewCategory)}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        {showNewCategory && (
          <View>
            <Input value={newCategory} onChangeText={(text) => setNewCategory(text)} inputContainerStyle={{ width: "100%" }} />
            <Button title="Add new category" onPress={addNewCategory} />
          </View>
        )}
        <Button title="Clear all" onPress={clearAll} />
      </ScrollView>
    </View>
  )
}

export default HomeScreen
