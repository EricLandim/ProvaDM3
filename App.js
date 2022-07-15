import React from "react";
import { View, StyleSheet } from "react-native";
import BookCard from "./Components/BookCard";
import HomePage from "./Components/HomePage";
import GlobalState from "./Context/GlobalState";

export default class App extends React.Component {
  render() {
    return (
      <GlobalState>
        <View style={styles.container}>
          <HomePage />
          <BookCard />
        </View>
      </GlobalState>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
