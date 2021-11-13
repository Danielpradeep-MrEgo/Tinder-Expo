import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import tw from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../Hooks/useAuth";

const ModalScreen = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const navigation = useNavigation();

  const incomplete = !image || !job || !age;

  const upateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert(error);
      });
  };

  return (
    <View style={tw("flex-1 items-center pt-1")}>
      <Image
        source={require(".././assets/Tinder.png")}
        resizeMode="contain"
        style={tw("h-20 w-full")}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>

      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step:1 The Profile Pic
      </Text>

      <TextInput
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter a Profile Pic URl"
        value={image}
        onChangeText={setImage}
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step:2 The Job
      </Text>

      <TextInput
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter Your Job"
        value={job}
        onChangeText={(text) => setJob(text)}
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step:3 The Age
      </Text>

      <TextInput
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter Your Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        maxLength={2}
      />

      <TouchableOpacity
        disabled={incomplete}
        style={[
          tw("w-64 bg-red-400 p-3 rounded-xl absolute bottom-10"),
          incomplete ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
        onPress={upateUserProfile}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
