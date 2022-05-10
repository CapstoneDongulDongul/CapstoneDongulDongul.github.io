import up from '../svg/Polygon 2.png'
import down from '../svg/Polygon 3.png'
import Trending from '../svg/fire.png'
import Greed from '../svg/greed 1.svg'
import Fear from '../svg/emoji 1.svg'
import more from '../svg/Vector 168.svg'
import detail from '../svg/Vector 2.svg'
import SearchBar from './SearchBar'
import CoinItem from './CoinItem'
import Card from './Card'

function SearchPage() {
  let coinName = 'ApeCoin'
  let price = '$ 38,000'
  let upDown = '- 0.90%'
  let index = 20
  let coin1 = {
    coinName: 'Petoverse',
    price: '$ 348,000',
    upDown: '+ 2.90%',
    index: 22,
  }

  let TrendingList = [
    'ApeCoin',
    'APE',
    'Stargate Finance',
    'STG',
    'Minifootball',
    'MINIFOOTBALL',
  ]
  let GreedList = [
    'Artificial Intelligence',
    'AI',
    'random',
    'RND',
    'Frontrow',
    'FRR',
  ]
  let FearList = [
    'Petoverse',
    'PETO',
    'GalaxyPad',
    'GXPAD',
    'RUN DOGE',
    'RUNDOGE',
  ]

  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-6 pb-8">
        <div class="flex flex-wrap justify-center">
          <div class="basis-2/3">
            <div class="ml-6 text-3xl font-bold title-font text-gray-900 text-left ">
              Today's Price
            </div>
            <SearchBar />
            <div class="flex pl-6 pb-1">
              <div class="text-[#959595] ml-6  ">Coin</div>
              <div class="text-[#959595] ml-48  ">price</div>
              <div class="flex ml-60">
                <img
                  class="w-[1.2rem] h-[0.8rem] mt-1.5"
                  alt="Up"
                  src={up}
                ></img>
                <img
                  class="w-[1.2rem] h-[0.8rem] mt-1.5"
                  alt="Down"
                  src={down}
                ></img>
              </div>
              <div class="text-[#959595] ml-14  ">index</div>
            </div>
            <div class="pb-4 mt-2 ml-2 mr-4 border-t border-gray-500"></div>
            <CoinItem
              coinName={coin1.coinName}
              price={coin1.price}
              upDown={coin1.upDown}
              index={coin1.index}
            />
            <CoinItem
              coinName={coinName}
              price={price}
              upDown={upDown}
              index={index}
            />
            <CoinItem
              coinName={coinName}
              price={price}
              upDown={upDown}
              index={index}
            />
            <CoinItem
              coinName={coinName}
              price={price}
              upDown={upDown}
              index={index}
            />
            <CoinItem
              coinName={coinName}
              price={price}
              upDown={upDown}
              index={index}
            />
          </div>
          <div class="basis-1/3">
            <Card title={'Trending'} img={Trending} List={TrendingList} />
            <Card title={'Greed'} img={Greed} List={GreedList} />
            <Card title={'Fear'} img={Fear} List={FearList} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SearchPage
