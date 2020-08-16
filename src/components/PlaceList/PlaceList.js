import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = (props) => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  ));
  //return <View style={styles.listContainer}>{placesOutput}</View>;
  //return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});
