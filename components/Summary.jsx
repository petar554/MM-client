import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind'

const Summary = ({ title, isExpanded, onToggle}) => {
  const [summary, setSummary] = useState('')

  const handleSummaryChange = (text) => {
    setSummary(text)
  }

  const uploadMedia = () => {
    // Implement media upload functionality here
    console.log('Upload media')
  }

  return (
    <View className="flex-1 p-1 mt-5">
      <TouchableOpacity onPress={onToggle} className="p-5 bg-[#518e58] rounded-3xl mb-2">
        <Text className="text-lg font-bold text-black text-center">{title}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View className="p-4 bg-[#518e58] rounded-3xl">
          <TextInput
            className="h-40 rounded-md px-2 mb-4"
            value={summary}
            onChangeText={handleSummaryChange}
            placeholder="Here I am writing about the day spent, what you have to highlight"
            multiline
          />
          <TouchableOpacity onPress={uploadMedia} className="p-3 bg-blue-500 rounded-md items-center">
            <Text className="text-white font-bold">Upload Image/Video</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Summary