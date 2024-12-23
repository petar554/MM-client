import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Intention from '../../components/Intention'

const DailyIntention = () => {
  return (
    <SafeAreaView className="flex-1 justify-center p-4">
      <Intention title="Your intentions for today 💪" placeholder="Add"/>
      <Intention title="Who did you make happy? ☺️" placeholder="Add" />
      <Intention title="What did you learn today? 📚" placeholder="Add"/>
    </SafeAreaView>
  )
}

export default DailyIntention