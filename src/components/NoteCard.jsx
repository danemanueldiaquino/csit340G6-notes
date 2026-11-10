function NoteCard({ title, body }) {
  return (
    <div>
      <h3 className="pr-8 text-sm font-normal break-words">
        {title}
      </h3>

      <p className="mt-2 text-xs break-words whitespace-pre-wrap text-[#4d4d4d]">
        {body}
      </p>

      <button
        type="button"
        className="mt-2 cursor-pointer text-[11px] font-normal text-[#b83f45] underline"
      >
        Show more
      </button>
    </div>
  )
}

export default NoteCard