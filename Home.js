import React, { useState, useEffect, useContext } from "react";
import { AllPostContext } from "./App";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const contextValue = useContext(AllPostContext);
  const posts = contextValue.posts;

  useEffect(() => {
    console.log(posts.src);
  });

  return (
    <View style={styles.container}>
      {posts.length !== 0 ? (
        <ScrollView
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            marginBottom: 10,

            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {posts.map((data, i) => {
            return (
              <View
                key={i}
                style={{
                  backgroundColor: "grey",
                  borderRadius: 10,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
              >
                {data.src ? (
                  <Image
                    style={{ width: "100%", height: 250 }}
                    source={{
                      uri: data.src,
                    }}
                  />
                ) : (
                  <Image
                    style={{ width: "0%", height: 0 }}
                    source={{
                      uri: "",
                    }}
                  />
                )}

                <Text style={{ color: "white", minHeight: 50 }}>
                  {data.content}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <Text style={{ color: "red" }}>Nothing</Text>
      )}

      <View style={styles.foot}>
        <TouchableOpacity>
          <Ionicons
            name="add-circle-outline"
            size={50}
            color="white"
            onPress={() => navigation.navigate("Add Post")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    paddingTop: 50,
    justifyContent: "space-between",
  },
  TextArea: {
    color: "white",
    backgroundColor: "grey",
    width: "100%",
    height: 50,
  },

  foot: {
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
});
