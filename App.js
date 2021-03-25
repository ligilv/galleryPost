import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
const Stack = createStackNavigator();
import Home from "./Home";
import CreateScreen from "./Components/createScreen";
import PostImage from "./Components/PostImage";
import PostText from "./Components/PostText";
export const AllPostContext = createContext();
export default function App(props) {
  const [posts, setPosts] = useState([]);

  return (
    <NavigationContainer>
      <AllPostContext.Provider
        value={{
          posts: posts,
          setPosts: setPosts,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add Post" component={CreateScreen} />
          <Stack.Screen name="Post Image" component={PostImage} />
          <Stack.Screen name="Post Text" component={PostText} />
        </Stack.Navigator>
      </AllPostContext.Provider>
    </NavigationContainer>
  );
}
