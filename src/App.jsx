import Notes from './components/Notes.jsx'
import { useState } from 'react'
import { SettingsContext } from './SettingsContext'

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <SettingsContext.Provider value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes name="Dan Emanuel Tuna Diaquino" />
      </div>
    </SettingsContext.Provider>
  )
}

export default App