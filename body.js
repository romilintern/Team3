import React from "react";
import { View, Text, Image } from "react-native";
import Cash_Img from "./assets/cash.png";
import Device_Img from "./assets/device.png";
import Ticket_Img from "./assets/ticket.png";
import styles from "./styles";
import { FontAwesome as Icon } from "@expo/vector-icons";
import Wallpaper from "./assets/Tixito-Wallpaper.png";
import AdvertImg from "./assets/images.jpg";



const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SELL YOUR TICKETS ON TiXiTO 😉</Text>

      <View style={styles.imgBody}>
        <View style={styles.imageContainer}>
          <Image style={styles.images} source={Device_Img} />
          <Text style={styles.txt}>Select Ticket</Text>
          <Text style={styles.txtDesciption}>
            If you purchased tickets from BookMyShow,{"\n"} you can list your
            tickets from your{"\n"} account or enter your ticket barcode.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.images} source={Ticket_Img} />
          <Text style={styles.txt}>Set Price</Text>
          <Text style={styles.txtDesciption}>
            You’re in control. Set your price using our{"\n"} pricing tool and
            see exactly how{"\n"} much you’ll be paid when your tickets sell.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.images} source={Cash_Img} />
          <Text style={styles.txt}>Get Paid</Text>
          <Text style={styles.txtDesciption}>
            When your tickets sell, you’ll get paid via {"\n"}your selected
            method of payment {"\n"}typically after the event.
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.header}>HAVE HASSLE-FREE SELLING ON TiXiTO</Text>
        <Text style={styles.header2}>
          Unlock the value of your extra tickets! Our app makes it simple to
          sell unused event tickets hassle-free. {"\n"}Maximize your investment
          by easily listing and reselling spare tickets. {"\n"}Don't let them go
          to waste – turn your extras into cash today!
        </Text>
      </View>

      <View style={styles.featureContainer}>
        <View style={styles.listing}>
          <View style={styles.listing1}>
            <Icon
              style={styles.featureIcon}
              name="check-circle"
              size={40}
              color={"#2c81c5"}
            />
            <View style={styles.list}>
              <Text style={styles.feature}>Reach More Buyers</Text>
              <Text style={styles.feature1}>{"\n"}TiXiTO attracts millions of fans looking for tickets everyday,{'\n'}giving you the best support to sell your seats quickly.</Text>
            </View>
          </View>
          <View style={styles.listing1}>
            <Icon
              style={styles.featureIcon}
              name="check-circle"
              size={40}
              color={"#2c81c5"}
            />
            <View style={styles.list}>
              <Text style={styles.feature}>Get Pricing Help</Text>
              <Text style={styles.feature1}>{"\n"}We give you real-time ticket pricing information to help you{'\n'}successfully sell your tickets.</Text>
            </View>
          </View>
          <View style={styles.listing1}>
            <Icon
              style={styles.featureIcon}
              name="check-circle"
              size={40}
              color={"#2c81c5"}
            />
            <View style={styles.list}>
              <Text style={styles.feature}>No Hidden Fees</Text>
              <Text style={styles.feature1}>{"\n"}We'll give you a breakdown of exactly how much you'll earn{'\n'}when your tickets sell so there are no surprises.</Text>
            </View>
          </View>
        </View>
        <Image source={Wallpaper} style={styles.wallpaper} />
      </View>

      <View style={styles.featureContainer}>
        <Image source={Wallpaper} style={styles.wallpaper1} />
        <View style={styles.listing}>
          <View style={styles.listing2}>
            <Icon
              style={styles.featureIcon}
              name="check-circle"
              size={40}
              color={"#2c81c5"}
            />
            <View style={styles.list}>
              <Text style={styles.feature}>You're in Control</Text>
              <Text style={styles.feature1}>{"\n"}You can change your ticket price anytime or remove your{'\n'}listing at any time.</Text>
            </View>
          </View>
          <View style={styles.listing2}>
            <Icon
              style={styles.featureIcon}
              name="check-circle"
              size={40}
              color={"#2c81c5"}
            />
            <View style={styles.list}>
              <Text style={styles.feature}>We've Got You Covered</Text>
              <Text style={styles.feature1}>{"\n"}When your tickets sell, we'll handle the heavy lifting - like{'\n'}making sure your tickets are delivered to the buyer, giving you{'\n'}one less thing to worry about.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.advert}>
        <Text style={styles.advertTEXT}>
          {"\n"}NEED TO SELL YOUR TICKETS TODAY? {"\n"}AN OFFER COULD BE WAITING
        </Text>
        <Text style={styles.advertTEXT1}>
          The Three Easy Steps to avail offer on the ticket.
        </Text>
        <View style={styles.advertListing}>
          <View style={styles.advertListing1}>
            <Icon
              style={styles.stepIcon}
              name="circle"
              size={30}
              color={"#2c81c5"}
            />
            <Text style={styles.steps}>
              Sign in to your Tixito account and select the{"\n"} tickets you
              want to sell.
            </Text>
          </View>
          <View style={styles.advertListing1}>
            <Icon
              style={styles.stepIcon}
              name="circle"
              size={30}
              color={"#2c81c5"}
            />
            <Text style={styles.steps}>Click Sell to see your options.</Text>
          </View>
          <View style={styles.advertListing1}>
            <Icon
              style={styles.stepIcon}
              name="circle"
              size={30}
              color={"#2c81c5"}
            />
            <Text style={styles.steps}>
              Select View Offer then Accept Offer to confirm the sale {"\n"}and
              select your requested method of payment.
            </Text>
          </View>
        </View>
        <Image source={AdvertImg} style={styles.advertImg} />
      </View>
    </View>
  );
};

export default App;
