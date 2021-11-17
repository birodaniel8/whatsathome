import { StatusBar, StyleSheet } from "react-native";

const shadowColor = "#000000";
export const headerColor = "#3D1F90";
export const underLineColor = "#908DFF";
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
    paddingBottom: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    flexDirection: "row",
    // justifyContent: "center",
    backgroundColor: headerColor,
    height: StatusBar.currentHeight + 50,
  },

  pageContent: {
    alignItems: "center",
  },

  h1text: {
    fontSize: 24,
    color: "white",
    fontFamily: defaultSemiBoldFont,
  },

  h2text: {
    fontSize: 18,
    color: "white",
    fontFamily: defaultSemiBoldFont,
  },

  semiBoldText: {
    paddingLeft: 8,
    fontFamily: defaultSemiBoldFont,
  },

  categoryContent: {
    alignItems: "center",
    width: "100%",
  },

  categoryHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  categoryHeaderIcons: {
    flex: 1,
    flexDirection: "row",
  },

  categoryHeaderText: {
    fontSize: 18,
    fontFamily: defaultSemiBoldFont,
  },

  category: {
    width: "90%",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: underLineColor,
  },

  categoryEdit: {
    width: "90%",
    marginTop: 15,
    marginLeft: -15,
  },

  itemEdit: {
    width: "90%",
    marginTop: 15,
    marginBottom: 15,
  },

  itemContent: {
    flex: 1,
    height: 50,
    width: "85%",
    justifyContent: "center",
    ...shadowSettings,
    backgroundColor: "white",
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 3,
  },

  itemNameText: {
    fontSize: 16,
    fontFamily: defaultSemiBoldFont,
  },

  itemDescriptionText: {
    fontSize: 14,
    fontFamily: defaultFont,
  },

  inputField: {
    borderColor: underLineColor,
    width: "100%",
  },

  multiLineInputField: {
    fontSize: 20,
    padding: 10,
    textAlignVertical: "top",
  },
});
