import TRAUM from '../svg/logo-dark.png'
import CoinMarketCap from '../svg/CoinMarketCap.png'
import HUFS from '../svg/hufs.svg'

function CoinSites() {
  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-0 mx-auto ">
        <div class="flex shrink justify-around opacity-40 py-4 md:py-16">
          <div class="flex-col self-center w-1/3 ">
            <a href="https://www.hufs.ac.kr/">
              <img
                class="m-auto lg:p-4 p-6 "
                alt="HUFS"
                width={150}
                src={HUFS}
              ></img>
            </a>
          </div>
          <div class="flex-col self-center w-1/3 ">
            <a href="https://www.trauminfotech.com/">
              <img
                class="m-auto mb-2 md:mb-4 md:p-2 p-4"
                alt="Traum"
                width={250}
                src={TRAUM}
              ></img>
            </a>
          </div>
          <div class="flex-col self-center w-1/3 ">
            <a href="https://coinmarketcap.com/ko/">
              <img
                class="m-auto"
                alt="CoinMarketCap"
                width={400}
                src={CoinMarketCap}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div class="mb-6 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default CoinSites
