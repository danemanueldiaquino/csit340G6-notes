import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext'

function Info({ name }) {
  const { largeText, setLargeText } = useContext(SettingsContext)
  
  return (
    <footer className="mt-auto pt-8 text-[10px] text-[#949494]">
      <p>Created by {name}</p>
      <button onClick={() => setLargeText(!largeText)}>
        {largeText ? 'Normal text' : 'Large text'}
      </button>
    </footer>
  )
}

export default Info