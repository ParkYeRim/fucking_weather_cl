import React, { Component } from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373b44", "#4286f4"],
    title: "Thunderstrom",
    subtitle: "many many wind"
  },
  Drizzle: {
    iconName: "weather-hail",
    title: "hail!!!!!"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00c6fb", "#005bea"],
    title: "rainy~~",
    subtitle: "biring the rainbow"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "snow~~"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "atmosphere"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "sunny",
    subtitle: "have a good date"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "cloudy"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "mist"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "dust"
  }
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.upper}>
        <MaterialCommunityIcons size={86} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>{temp}º</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={{ ...styles.lower, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 38,
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 38,
    color: "white",
    paddingHorizontal: 30
  },
  subtitle: {
    fontSize: 24,
    color: "white"
  },
  name: {
    fontSize: 20,
    color: "white"
  },
  textContainer: {
    alignItems: "center"
  }
});
