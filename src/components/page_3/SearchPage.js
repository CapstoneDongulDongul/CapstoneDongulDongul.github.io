import up from '../../svg/Polygon 2.png'
import down from '../../svg/Polygon 3.png'
import Trending from '../../svg/fire.png'
import Greed from '../../svg/greed 1.svg'
import Fear from '../../svg/emoji 1.svg'
import more from '../../svg/Vector 168.svg'
import detail from '../../svg/Vector 2.svg'
import SearchBar from './SearchBar'
import CoinItem from './CoinItem'
import Card from './Card'
import { useLayoutEffect, useState } from 'react'

function SearchPage() {
  var coinlist = {}
  var li = []
  var n = []

  const [TrendingList, setTrendingList] = useState([])
  const [GreedList, setGreedList] = useState([])
  const [FearList, setFearList] = useState([])
  const [pri, setpri] = useState([])
  const [per, setper] = useState({})
  const [indexs, setindex] = useState({})

  useLayoutEffect(() => {
    const fetchTName = async () => {
      const data = await fetch('http://localhost:5000/rank')
      const coins = await data.json()

      const temp = {
        BITCOIN: coins.BITCOIN,
        ADA: coins.ADA,
        ANKR: coins.ANKR,
        DOGECOIN: coins.DOGECOIN,
        EOS: coins.EOS,
        ETC: coins.ETC,
        ETH: coins.ETH,
        IOTA: coins.IOTA,
        POLYGON: coins.POLYGON,
        WAVES: coins.WAVES,
        XRP: coins.XRP,
        ZILLIQA: coins.ZILLIQA,
        SOL: coins.SOL,
      }
      coinlist = temp
      set_list()
    }
    fetchTName()
  }, [])
  function set_list() {
    const vol_list = {
      BITCOIN: coinlist.BITCOIN[0],
      ADA: coinlist.ADA[0],
      ANKR: coinlist.ANKR[0],
      DOGECOIN: coinlist.DOGECOIN[0],
      EOS: coinlist.EOS[0],
      ETC: coinlist.ETC[0],
      ETH: coinlist.ETH[0],
      IOTA: coinlist.IOTA[0],
      POLYGON: coinlist.POLYGON[0],
      WAVES: coinlist.WAVES[0],
      XRP: coinlist.XRP[0],
      ZILLIQA: coinlist.ZILLIQA[0],
      // SOL: coinlist.SOL[0],
    }
    const gfs_list = {
      BITCOIN: coinlist.BITCOIN[1],
      ADA: coinlist.ADA[1],
      ANKR: coinlist.ANKR[1],
      DOGECOIN: coinlist.DOGECOIN[1],
      EOS: coinlist.EOS[1],
      ETC: coinlist.ETC[1],
      ETH: coinlist.ETH[1],
      IOTA: coinlist.IOTA[1],
      POLYGON: coinlist.POLYGON[1],
      WAVES: coinlist.WAVES[1],
      XRP: coinlist.XRP[1],
      ZILLIQA: coinlist.ZILLIQA[1],
      // SOL: coinlist.SOL[1],
    }
    const price_list = {
      BITCOIN: coinlist.BITCOIN[2],
      ADA: coinlist.ADA[2],
      ANKR: coinlist.ANKR[2],
      DOGECOIN: coinlist.DOGECOIN[2],
      EOS: coinlist.EOS[2],
      ETC: coinlist.ETC[2],
      ETH: coinlist.ETH[2],
      IOTA: coinlist.IOTA[2],
      POLYGON: coinlist.POLYGON[2],
      WAVES: coinlist.WAVES[2],
      XRP: coinlist.XRP[2],
      ZILLIQA: coinlist.ZILLIQA[2],
      // SOL: coinlist.SOL[1],
    }
    const percent_list = {
      BITCOIN: coinlist.BITCOIN[3],
      ADA: coinlist.ADA[3],
      ANKR: coinlist.ANKR[3],
      DOGECOIN: coinlist.DOGECOIN[3],
      EOS: coinlist.EOS[3],
      ETC: coinlist.ETC[3],
      ETH: coinlist.ETH[3],
      IOTA: coinlist.IOTA[3],
      POLYGON: coinlist.POLYGON[3],
      WAVES: coinlist.WAVES[3],
      XRP: coinlist.XRP[3],
      ZILLIQA: coinlist.ZILLIQA[3],
      // SOL: coinlist.SOL[1],
    }
    setper(percent_list)
    // console.log(per)
    const temp = [vol_list, gfs_list, price_list]
    setindex(gfs_list)
    li = temp
    let temp_v = li[0]
    let sortable = []

    for (let v in temp_v) {
      if (temp_v[v] === undefined) {
      } else {
        sortable.push([v, temp_v[v]])
      }
    }
    let temp_g = li[1]
    let sortable2 = []
    for (let g in temp_g) {
      if (temp_g[g] === undefined) {
      } else {
        sortable2.push([g, temp_g[g]])
      }
    }
    let temp_p = li[2]
    let sortable3 = []
    for (let p in temp_p) {
      if (temp_p[p] === undefined) {
      } else {
        sortable3.push([p, temp_p[p]])
      }
    }
    sortable.sort(function (a, b) {
      return a[1] - b[1]
    })
    sortable2.sort(function (a, b) {
      return a[1] - b[1]
    })
    sortable3.sort(function (a, b) {
      return a[1] - b[1]
    })

    for (let i = 0; i < sortable.length; i++) {
      n.push(sortable[i])
    }
    n.reverse()
    setTrendingList(n) // 거래량

    let t1 = []
    for (let i = 0; i < sortable2.length; i++) {
      t1.push(sortable2[i])
    }
    setGreedList(t1.reverse()) // greed 지수 내림차순

    let t2 = []
    for (let i = 0; i < sortable2.length; i++) {
      t2.push(sortable2[i])
    }
    setFearList(t2) // greed 지수 오름차순

    let t3 = []
    for (let i = 0; i < sortable3.length; i++) {
      t3.push(sortable3[i])
    }
    setpri(t3.reverse()) // 가격 순
  }

  return (
    <section id="3" class="text-gray-600 body-font">
      <div class="px-20 pt-10 pb-6">
        <div class="flex flex-wrap items-center md:flex-nowrap md:flex-row justify-center ">
          <div class="w-11/12 md:w-2/3 ">
            <div class="ml-6 text-3xl font-bold title-font text-gray-900 text-left ">
              Today's Price
            </div>
            {/* <SearchBar /> */}
            <div class="flex items-center pr-3 mt-10">
              <div class="text-[11px] mobile:text-base basis-[30%] text-[#959595] text-left ml-12 ">
                Coin
              </div>
              <div class="text-[11px] mobile:text-base basis-[37%] text-[#959595] text-left ">
                price
              </div>
              <div class="basis-[13%] ">
                <div class="flex">
                  <img
                    class="w-[0.6rem] h-[0.4rem] mobile:w-[1.0rem] mobile:h-[0.6rem] mt-1.5"
                    alt="Up"
                    src={up}
                  ></img>
                  <img
                    class="w-[0.6rem] h-[0.4rem] mobile:w-[1.0rem] mobile:h-[0.6rem] mt-1.5"
                    alt="Down"
                    src={down}
                  ></img>
                </div>
              </div>
              <div class="text-[11px] mobile:text-base basis-[10%] text-[#959595] text-center">
                index
              </div>
            </div>
            <div class="pb-6 mt-4 ml-2 mr-4 border-t border-gray-500"></div>
            <CoinItem name={pri} upDown={per} index={indexs} />
          </div>
          <div class="w-full md:w-auto lg:w-1/3 md:my-0 mt-4">
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
