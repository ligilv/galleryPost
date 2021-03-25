import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
function CreateScreen({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "red",
        height: "100%",
      }}
    >
      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: "#e6e1e1",
            color: "black",
            borderWidth: 2,
            borderColor: "black",
            width: 100,
            height: 50,
            paddingTop: 15,
            paddingLeft: 30,
          }}
          onPress={() => navigation.navigate("Post Image")}
        >
          Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: "black",
            backgroundColor: "#e6e1e1",
            borderWidth: 2,
            borderColor: "black",
            width: 100,
            height: 50,
            paddingTop: 15,
            paddingLeft: 30,

            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Post Text")}
        >
          Text
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreateScreen;
