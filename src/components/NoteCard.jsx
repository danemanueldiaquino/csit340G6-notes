import { useState } from 'react'

function NoteCard({ title, body }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h3 className="pr-8 text-sm font-normal break-words">
        {title}
      </h3>

      {isOpen && (
        <p className="mt-2 text-xs break-words whitespace-pre-wrap text-[#4d4d4d]">
          {body}
        </p>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2 cursor-pointer text-[11px] font-normal text-[#b83f45] underline"
      >
        {isOpen ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard
