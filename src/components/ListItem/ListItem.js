import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const listItem = (props) => (
  <Touchable onPress={prop.onPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </Touchable>

  // <TouchableWithoutFeedback onPress={prop.onPressed}>
  // <View style={styles.listItem}>
  // <Text>{props.placeName}</Text>
  // </View>
  // </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
  },
});

export default listItem;
