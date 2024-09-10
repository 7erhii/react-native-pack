import { View, Text, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from "expo-router";


// COmponents
import CustomButton from "../components/CustomButton";

import { images } from "../constants";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary h-full">
      <View
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="max-w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity comes to Life: embark of a Jorney of Limitless
            exploration with Aora.
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          ></CustomButton>
        </View>
      </View>
      <StatusBar hidden={true} backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
