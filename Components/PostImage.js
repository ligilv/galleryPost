import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { AllPostContext } from "../App";
function PostImage({ navigation }) {
  const contextValue = useContext(AllPostContext);
  const posts = contextValue.posts;
  const [selectedImage, setSelectedImage] = useState(null);
  const setPosts = contextValue.setPosts;
  const [Dvalue, setValue] = useState("");
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setSelectedImage({ localUri: pickerResult.uri });
  };
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
          disabled={Dvalue == "" || selectedImage === null ? true : false}
          onPress={() => {
            setPosts([
              ...posts,
              { content: Dvalue, src: selectedImage.localUri },
            ]);
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
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={{ color: "blue" }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PostImage;
