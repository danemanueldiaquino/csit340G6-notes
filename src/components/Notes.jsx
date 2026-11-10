function Notes() {
  return (
    <div className="grid min-h-screen grid-cols-[420px_1fr] bg-[#f5f5f5] text-[#222222]">
      <aside className="sticky top-0 flex h-screen flex-col gap-5 bg-white px-8 py-9 shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]">
        <div className="space-y-5">
          <div>
            <p className="mb-2 text-[13px] font-normal tracking-[0.18em] text-[#949494]">
              SEARCH
            </p>

            <input
              type="search"
              placeholder="Search by title"
              className="h-[52px] w-full border border-[#e6e6e6] px-4 text-lg outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
            />
          </div>

          <form className="grid gap-3">
            <p className="text-[13px] font-normal tracking-[0.18em] text-[#949494]">
              NEW NOTE
            </p>

            <input
              name="title"
              type="text"
              placeholder="Title"
              className="h-[52px] w-full border border-[#e6e6e6] px-4 text-lg outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
            />

            <textarea
              name="body"
              placeholder="Write your note"
              className="h-[120px] w-full resize-none border border-[#e6e6e6] px-4 py-3 text-lg outline-none placeholder:text-black/40 placeholder:italic focus:border-[#cf7d7d]"
            />

            <button
              type="submit"
              className="h-[50px] cursor-pointer bg-[#b83f45] text-[17px] font-normal text-white hover:bg-[#a33439]"
            >
              Add note
            </button>
          </form>
        </div>

        <h1 className="mt-auto text-[72px] font-extralight leading-none text-[#b83f45]">
          notes
        </h1>
      </aside>

      <main className="px-12 py-11">
        <h2 className="mb-6 text-3xl">All notes</h2>
      </main>
    </div>
  )
}

export default Notes