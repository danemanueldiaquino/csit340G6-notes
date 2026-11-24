import { useState, useContext, memo } from 'react'
import { SettingsContext } from '../SettingsContext'

function NoteCard({ id, title, body, onDelete }) {
  const [isOpen, setIsOpen] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <li className="relative flex flex-col rounded border border-[#e6e0de] bg-white p-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]">
      <button
        type="button"
        onClick={() => onDelete(id)}
        aria-label="Delete note"
        className="absolute top-3 right-3 cursor-pointer text-sm text-[#949494] hover:text-[#b83f45]"
      >
        ×
      </button>

      <h3
        className="pr-8 font-normal break-words"
        style={{ fontSize: largeText ? '28px' : '22px' }}
      >
        {title}
      </h3>

      {isOpen && (
        <p
          className="mt-2 break-words whitespace-pre-wrap text-[#4d4d4d]"
          style={{ fontSize: largeText ? '21px' : '17px' }}
        >
          {body}
        </p>
      )}

      <div className="mt-auto pt-3">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-[11px] font-normal text-[#b83f45] underline"
        >
          {isOpen ? 'Show less' : 'Show more'}
        </button>
      </div>
    </li>
  )
}

export default memo(NoteCard)