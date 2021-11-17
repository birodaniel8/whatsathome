import { StatusBar, StyleSheet } from "react-native";

const shadowColor = "#000000";
const headerColor = "#3D1F90";
const underLineColor = "#908DFF"
const defaultFont = "Montserrat_400Regular";
const defaultSemiBoldFont = "Montserrat_600SemiBold";
const defaultBoldFont = "Montserrat_700Bold";

const shadowSettings = {
  shadowColor: shadowColor,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  elevation: 2,
};

export const styles = StyleSheet.create({
  pageHeader: {
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: headerColor,
  },

  pageContent: {
    alignItems: "center",
  },

  h1text: {
    fontSize: 24,
    color: "white",
    fontFamily: defaultSemiBoldFont,
  },

  categoryHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  categoryHeaderIcons: {
    flex: 1,
    flexDirection: 'row',
  },

  categoryHeaderText: {
    fontSize: 16,
    fontFamily: defaultSemiBoldFont,

  },

  category: {
    width: "90%",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: underLineColor,
  },

  item: {
    height: 50,
    width: "100%",
    // ...shadowSettings,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 2,
    borderWidth: 1,
    alignItems: "center"
  }
})