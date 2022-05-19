import Link from 'react-scroll/modules/components/Link'

function Footer() {
  const currentDay = new Date()
  const currentYear = currentDay.getFullYear()

  return (
    <footer class="text-white body-font">
      <div class="px-5 py-6 bg-[#C2C2C2] ">
        <div class="flex items-center md:justify-start justify-center title-font font-medium text-white ">
          <Link to="head" spy={true} smooth={true}>
            <span class="font-['Quicksand'] mt-4 ml-3 text-2xl cursor-pointer">
              Donggul - Donggul
            </span>
          </Link>
        </div>
        <div className="flex flex-wrap flex-col sm:flex-row pt-4 px-5 ">
          <a
            href="https://www.notion.so/uomnf97/Team-5cb16e5f12784e64a133a43cff6f31be"
            className="text-white text-sm mt-8 text-center sm:text-left"
          >
            © {currentYear} 동글동글
          </a>
          <span className="sm:ml-auto mt-8 text-center sm:text-left text-white text-sm">
            Developed by 김도영, 김주원, 김태우, 정서영
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
