import CoinMarket from '../svg/CoinMarketCap 1.svg'
import CNN from '../svg/kindpng_4531872 1.svg'
import Upbit from '../svg/upbit 1.svg'

function CoinSites() {
  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-0 mx-auto ">
        <div class="flex justify-center py-6">
          <img alt="CoinMarket" src={CoinMarket}></img>
          <img alt="Upbit" src={Upbit}></img>
          <img alt="CNN" src={CNN}></img>
        </div>
      </div>
      <div class=" mb-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default CoinSites
