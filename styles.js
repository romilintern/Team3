import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    alignItems: "center",
    backgroundColor: "#ededed",
  },
  text: {
    fontSize: 38,
    fontWeight: "550",
    textAlign: "center",
  },
  imgBody: {
    paddingVertical: 130,
    flexDirection: "row",
    justifyContent: "space-between", // Align images and text horizontally
    paddingHorizontal: 30,
  },
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 40,
  },
  images: {
    height: 190,
    width: 190,
  },
  txt: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtDesciption: {
    marginTop: 30,
    alignItems: "center",
    fontSize: 17,
    fontWeight: "  500",
    justifyContent: "center",
    textAlign: "center",
  },
  header: {
    fontSize: 40,
    paddingTop: 40,
    fontWeight: "550",
    justifyContent: "center",
    textAlign: "center",
  },
  header2: {
    fontSize: 20,
    paddingTop: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  featureContainer: {
    marginTop: 130,
    alignItems: "center",
    flexDirection: "row",
  },
  listing: {
    flexDirection: "column",
  },
  feature: {
    paddingRight: 30,
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight:"400",
  },
  feature1:{
    paddingRight: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    position:"relative",
    bottom:20,
  },
  listing1: {
    paddingTop: 20,
    flexDirection: "row",
    paddingBottom: 75,
    paddingRight: 100,
  },
  list:{
    flexDirection:"column"
  },
  wallpaper: {
    height: 500,
    width: 500,
    borderColor: "black",
    borderRadius: 5,
  },
  featureIcon: {
    paddingLeft: 100,
    paddingTop: 10,
  },
  listing2: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 75,
  },
  wallpaper1: {
    height: 500,
    width: 500,
    borderColor: "black",
    position: "relative",
    borderRadius: 5,
  },
  advert: {
    height: 800,
    width: "100%",
    backgroundColor: "#63beec",
    position: "relative",
    bottom: 60,
    zIndex: -1,
  },
  advertTEXT: {
    fontSize: 40,
    fontWeight: "600",
    paddingTop: 100,
    textAlign: "center",
  },
  advertTEXT1: {
    fontSize: 30,
    fontWeight: "250",
    paddingTop: 60,
    textAlign: "center",
  },
  advertListing: {
    flexDirection: "column",
    paddingTop: 50,
  },
  advertListing1: {
    flexDirection: "row",
    paddingRight: 100,
    paddingTop: 50,
  },
  steps: {
    fontSize: 27,
  },
  stepIcon: {
    paddingTop: 10,
    textAlign: "left",
    paddingRight: 20,
    paddingLeft: 160,
  },
  advertImg: {
    height: 300,
    width: 300,
    position: "relative",
    bottom: 300,
    right: 100,

    alignSelf: "flex-end",
    marginRight: 40,
  },
  
});

export default styles;
