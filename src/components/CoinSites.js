import TRAUM from '../svg/logo-dark.png'
import Coinone from '../svg/Coinone.png'
import { ReactComponent as HUFS } from '../svg/hufs.svg'

function CoinSites() {
  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-0 mx-auto ">
        <div class="flex justify-around py-10 pl-16 opacity-40">
          <a href="https://www.hufs.ac.kr/">
            <HUFS width="120" height="120" class="mt-1" />
          </a>
          <a href="https://www.trauminfotech.com/">
            <img
              class="ml-8 mt-1"
              alt="Traum"
              width={220}
              height={100}
              src={TRAUM}
            ></img>
          </a>
          <a href="https://coinone.co.kr/">
            <img
              class="mt-7"
              alt="Coinone"
              width={310}
              height={80}
              src={Coinone}
            ></img>
          </a>
        </div>
      </div>
      <div class=" mb-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default CoinSites
