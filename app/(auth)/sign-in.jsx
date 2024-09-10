import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { images } from "../../constants";
// import { CustomButton, FormField } from "../../components";
// import { getCurrentUser, signIn } from "../../lib/appwrite";
// import { useGlobalContext } from "../../context/GlobalProvider";


const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 mx-6"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
