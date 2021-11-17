import React from 'react'
import { Image, View, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button, Text } from "react-native-elements";
import { styles } from "../Styles";

const ItemScreen = ({ navigation, route }) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pageHeader}>
        <Text style={styles.h1text}>What'sAtHome</Text>
      </View>
      <ScrollView contentContainerStyle={styles.homePageContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.replace("Home")}>
            <View style={styles.item}>
              <Text>Back</Text>
            </View>
          </TouchableOpacity>
          <Text>
            {route.params.itemName}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ItemScreen
