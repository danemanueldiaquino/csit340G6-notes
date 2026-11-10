import { useState } from 'react'
import NoteCard from './NoteCard.jsx'
import Info from './Info.jsx'

function Notes({ name }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Review map and filter',
      body: 'Redo the TodoMVC steps without looking at the guide.',
    },
    {
      id: 2,
      title: 'Prepare for the quiz',
      body: 'Practice writing one handler for many inputs.',
    },
  ])
  const [form, setForm] = useState({
    title: '',
    body: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const title = form.title.trim()
    const body = form.body.trim()

    if (!title || !body) {
      return
    }

    const newNote = {
      id: Date.now(),
      title,
      body,
    }

    setNotes((prev) => [...prev, newNote])

    setForm({
      title: '',
      body: '',
    })
  }

  function handleDelete(id) {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    )
  }

  return (
    <div className="m-3 grid min-h-[calc(100vh-1.5rem)] grid-cols-1 overflow-hidden rounded-xl border border-[#e6e0de] bg-[#f5f5f5] text-[#222222] lg:grid-cols-[320px_1fr]">
      <aside className="flex min-h-[520px] flex-col bg-white px-6 py-6 shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)] lg:sticky lg:top-3 lg:h-[calc(100vh-1.5rem)] lg:min-h-0">
        <h1 className="mb-5 text-5xl font-extralight leading-none text-[#b83f45]">
          notes
        </h1>

        <div className="grid gap-4">
          <div>
            <p className="mb-2 text-[10px] font-normal tracking-[0.18em] text-[#949494]">
              SEARCH
            </p>

            <input
              type="search"
              placeholder="Search by title"
              className="h-10 w-full border border-[#e6e6e6] px-3 text-sm outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
            />
          </div>

          <form className="grid gap-2" onSubmit={handleSubmit}>
            <p className="text-[10px] font-normal tracking-[0.18em] text-[#949494]">
              NEW NOTE
            </p>

            <input
              name="title"
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="h-10 w-full border border-[#e6e6e6] px-3 text-sm outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
            />

            <textarea
              name="body"
              placeholder="Write your note"
              value={form.body}
              onChange={handleChange}
              className="h-[90px] w-full resize-none border border-[#e6e6e6] px-3 py-2 text-sm outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
            />

            <button
              type="submit"
              className="h-[38px] cursor-pointer bg-[#b83f45] text-[13px] font-normal text-white hover:bg-[#a33439]"
            >
              Add note
            </button>
          </form>
        </div>

        <Info name={name} />
      </aside>

      <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-9 lg:py-8">
        <h2 className="mb-4 text-2xl">All notes</h2>
        <ul className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <li
              key={note.id}
              className="relative min-h-32 bg-white px-5 py-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]"
            >
              <NoteCard title={note.title} body={note.body} />

              <button
                type="button"
                onClick={() => handleDelete(note.id)}
                className="absolute top-3 right-4 cursor-pointer text-lg leading-none text-[#949494] hover:text-[#c18585]"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Notes
