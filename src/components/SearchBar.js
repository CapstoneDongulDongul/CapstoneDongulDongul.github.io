function SearchBar() {
  return (
    <div class="box pt-7 pb-5">
      <div class="box-wrapper">
        <div class="flex items-center w-full mr-2 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
          <input
            type="search"
            name=""
            placeholder="Overview"
            x-model="q"
            class="w-full pl-2 text-sm outline-none focus:outline-none bg-transparent"
          />
          <button class="outline-none focus:outline-none">
            <svg
              class=" w-5 h-5 text-gray-600 cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
