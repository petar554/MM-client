import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import Intention from '../../components/Intention'
import Summary from '../../components/Summary'

const DailyIntention = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <SafeAreaView className="flex-1 justify-center p-4">
      <Intention
        title="Your intentions for today 💪"
        placeholder="Add"
        isExpanded={expandedSection === 'intention1'}
        onToggle={() => toggleSection('intention1')}
      />
      <Intention
        title="Who did you make happy? ☺️"
        placeholder="Add"
        isExpanded={expandedSection === 'intention2'}
        onToggle={() => toggleSection('intention2')}
      />
      <Intention
        title="What did you learn today? 📚"
        placeholder="Add"
        isExpanded={expandedSection === 'intention3'}
        onToggle={() => toggleSection('intention3')}
      />
      <Summary
        title="Summary of the day"
        isExpanded={expandedSection === 'summary'}
        onToggle={() => toggleSection('summary')}
      />
    </SafeAreaView>
  )
}

export default DailyIntention