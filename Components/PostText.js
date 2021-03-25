import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { AllPostContext } from "../App";
function PostText({ navigation }) {
  const contextValue = useContext(AllPostContext);
  const posts = contextValue.posts;
  const setPosts = contextValue.setPosts;
  const [Dvalue, setValue] = useState("");
  return (
    <View>
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          backgroundColor: "white",
          height: 50,
          borderBottomColor: "black",
          borderBottomWidth: 1,
          width: "100%",
        }}
      >
        <TouchableOpacity
          disabled={Dvalue === "" ? true : false}
          onPress={() => {
            setPosts([...posts, { content: Dvalue }]);
            console.log(posts);
            setValue("");
            navigation.navigate("Home");
          }}
          style={{
            justifyContent: "flex-end",
            backgroundColor: "#e6e1e1",
            color: "black",
            width: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>POST</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <TextInput
          clearTextOnFocus={true}
          multiline={true}
          value={Dvalue}
          onChangeText={setValue}
          placeholder="Write Content Here"
          style={{
            paddingTop: 50,
            width: "100%",
            minHeight: 250,
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "white",
            color: "black",
            paddingTop: 0,
            paddingLeft: 10,
            justifyContent: "flex-start",
          }}
        />
      </View>
    </View>
  );
}

export default PostText;
