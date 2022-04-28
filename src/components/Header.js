function Header() {
  return (
    <header class="text-white body-font">
      <div class="bg-[#C2C2C2] container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium font-family: ui-monospace items-center mb-4 md:mb-2">
          <span class="ml-3 text-3xl">Donggul - Donggul</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div class="mr-5 hover:text-gray-600 cursor-pointer ">
            Fear & Greed Index
          </div>
          <a class="mr-5 hover:text-gray-600 cursor-pointer">Overview Chart</a>
          <a class="mr-5 hover:text-gray-600 cursor-pointer">Search</a>
        </nav>
      </div>
    </header>
  )
}
export default Header
