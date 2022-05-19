import Link from 'react-scroll/modules/components/Link'

function Header() {
  function reload() {
    window.location.reload()
  }
  return (
    <header id="head" class="text-white body-font">
      <div class=" flex flex-wrap items-center flex-col md:flex-row p-6 bg-[#C2C2C2]">
        <div
          onClick={() => reload()}
          class="flex items-center mb-4 md:mb-2 title-font font-medium font-family: ui-monospace cursor-pointer"
        >
          <span class="ml-3 font-['Quicksand'] font-bold text-3xl">
            Donggul - Donggul
          </span>
        </div>
        <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link to="1" spy={true} smooth={true}>
            <div class="mr-5 hover:text-gray-600 cursor-pointer ">
              Fear & Greed Index
            </div>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <div class="mr-5 hover:text-gray-600 cursor-pointer">
              Index History
            </div>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <div class="mr-5 hover:text-gray-600 cursor-pointer">
              Today's Price
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
export default Header
