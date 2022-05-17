function Header() {
  return (
    <header class="text-white body-font">
      <div class=" flex flex-wrap items-center flex-col md:flex-row p-6 bg-[#C2C2C2]">
        <a class="flex items-center mb-4 md:mb-2 title-font font-medium font-family: ui-monospace">
          <span class="ml-3 font-['Quicksand'] font-bold text-3xl">
            Donggul - Donggul
          </span>
        </a>
        <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <div class="mr-5 hover:text-gray-600 cursor-pointer ">
            Fear & Greed Index
          </div>
          <a class="mr-5 hover:text-gray-600 cursor-pointer">Index History</a>
          <a class="mr-5 hover:text-gray-600 cursor-pointer">Today's Price</a>
        </nav>
      </div>
    </header>
  )
}
export default Header
