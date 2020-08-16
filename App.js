import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import ListItem from "./src/components/ListItem/ListItem";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default function App() {
  state = {
    placeName: "",
    places: [],
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
        }),
      };
    });
  };

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val,
    });
    //alert(event);
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState((preState) => {
      return {
        places: prevState.places.concat(prevState.placeName),
      };
    });
  };
  const placesOutput = this.state.places.map((place, i) => (
    //<Text key={i}>{place}</Text>
    <ListItem key={i} placeName={place} />
  ));

  placeDeletedHandler = (index) => {
    this.setState((preState) => {
      return {
        places: preState.places.filter((place) => {
          return place.key !== key;
        }),
      };
    });
  };

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      <PlaceList
        places={this.state.places}
        onItemDeleted={this.placeDeletedHandler}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            width: 300,
            borderColor: "black",
            borderWidth: 1,
          }}
          placeholder="Type here"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
      <View style={styles.listContainer}>{placesOutput}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    //flexDirection: 'column',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  },
  listContainer: {
    width: "100%",
  },
});
