import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const Intention = ({ title, placeholder }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [intentions, setIntentions] = useState([""]);

  console.log(intentions);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const handleIntentionChange = (index, text) => {
    const newIntentions = [...intentions];
    newIntentions[index] = text;
    setIntentions(newIntentions);
    if (text !== "" && index === intentions.length - 1) {
      addIntention();
    }
  };

  const addIntention = () => {
    setIntentions([...intentions, ""]);
  };

  const deleteIntention = (index) => {
    const newIntentions = intentions.filter((_, i) => i !== index)
    if (newIntentions.length === 0) {
      setIntentions([''])
    } else {
      setIntentions(newIntentions)
    }
  }

  return (
    <SafeAreaView className="p-1">
      <TouchableOpacity onPress={toggleSection} className="p-5 bg-[#518e58] rounded-3xl mb-2">
        <Text className="text-lg font-bold text-black text-center">{title}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View className="p-4 bg-[#518e58] rounded-3xl">
          {intentions.map((intention, index) => (
            <View key={index} className="flex-row items-center">
              <TextInput
                className="flex-1 h-10 rounded-md px-2"
                value={intention}
                onChangeText={(text) => handleIntentionChange(index, text)}
                placeholder={`${placeholder}`}
              />
              <TouchableOpacity onPress={() => deleteIntention(index)} className="ml-2 p-2">
                <Text className="text-black font-bold">X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  )
};

export default Intention;
