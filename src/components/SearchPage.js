import up from '../svg/Polygon 2.png'
import down from '../svg/Polygon 3.png'
import Trending from '../svg/fire.png'
import Greed from '../svg/greed 1.svg'
import Fear from '../svg/emoji 1.svg'
import more from '../svg/Vector 168.svg'
import detail from '../svg/Vector 2.svg'

function SearchPage() {
  let Greed_first = 'Artificial Intelligence'
  let Greed_first_company = 'AI'
  let Greed_second = 'random'
  let Greed_second_company = 'RND'
  let Greed_third = 'Frontrow'
  let Greed_third_company = 'FRR'

  let Fear_first = 'Petoverse'
  let Fear_first_company = 'PETO'
  let Fear_second = 'GalaxyPad'
  let Fear_second_company = 'GXPAD'
  let Fear_third = 'RUN DOGE'
  let Fear_third_company = 'RUNDOGE'

  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-6 pb-8 mx-auto ">
        <div class="flex flex-wrap justify-center">
          <div class="basis-2/3">
            <div class="text-3xl font-bold title-font text-gray-900 text-left  ml-6">
              Today's Price
            </div>
            <div class="box pt-7 pb-5">
              <div class="box-wrapper">
                <div class="mr-2 bg-white rounded-lg flex items-center w-full p-3 shadow-sm border border-gray-200">
                  <input
                    type="search"
                    name=""
                    placeholder="Search "
                    x-model="q"
                    class="w-full pl-2 text-sm outline-none focus:outline-none bg-transparent"
                  />
                  <button class="outline-none focus:outline-none">
                    <svg
                      class=" w-5 text-gray-600 h-5 cursor-pointer"
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
            {/* <div class="pb-5 pt-8">
              <input
                class="w-[44rem] rounded-lg p-2 border mr-0 text-gray-800 border-gray-300 "
                placeholder="Search"
              />
              <button>sds</button>
            </div> */}
            <div class="flex pb-1">
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

              <div class="text-[#959595] ml-11  ">index</div>
            </div>
            <div class="pb-2 mt-2 ml-2 mr-4 border-t border-gray-500"></div>
            <div class="flex-row ">
              <div class="flex items-center pb-2.5">
                <div class="w-2 h-12 bg-red-500 rounded-l"></div>
                <div class="font-bold basis-[25%] text-left ml-4 ">
                  {Fear_first}
                </div>
                <div class="basis-[37%] text-left ml-4  text-gray-400">
                  $ 348,000
                </div>
                <div class="basis-[8%] text-green-500 font-semibold text-sm text-center ml-4 ">
                  + 2.90%
                </div>
                <div class="basis-[10%] text-sm font-bold text-center ml-4 ">
                  22
                </div>
                <div class="basis-[5%] ml-10 ">
                  <img
                    class=" w-[1rem] h-[1rem]"
                    src={detail}
                    alt="detail_Icon"
                  ></img>
                </div>
              </div>
            </div>
            <div class="flex-row ">
              <div class="flex items-center pb-2.5">
                <div class="w-2 h-12 bg-orange-300 rounded-l"></div>
                <div class="font-bold basis-[25%] text-left ml-4 ">
                  {Fear_first}
                </div>
                <div class="basis-[37%] text-left ml-4  text-gray-400">
                  $ 348,000
                </div>
                <div class="basis-[8%] text-green-500 font-semibold text-sm text-center ml-4 ">
                  + 2.90%
                </div>
                <div class="basis-[10%] text-sm font-bold text-center ml-4 ">
                  22
                </div>
                <div class="basis-[5%] ml-10 ">
                  <img
                    class=" w-[1rem] h-[1rem]"
                    src={detail}
                    alt="detail_Icon"
                  ></img>
                </div>
              </div>
            </div>
            <div class="flex-row ">
              <div class="flex items-center pb-2.5">
                <div class="w-2 h-12 bg-yellow-300 rounded-l"></div>
                <div class="font-bold basis-[25%] text-left ml-4 ">
                  {Fear_first}
                </div>
                <div class="basis-[37%] text-left ml-4  text-gray-400">
                  $ 348,000
                </div>
                <div class="basis-[8%] text-green-500 font-semibold text-sm text-center ml-4 ">
                  + 2.90%
                </div>
                <div class="basis-[10%] text-sm font-bold text-center ml-4 ">
                  22
                </div>
                <div class="basis-[5%] ml-10 ">
                  <img
                    class=" w-[1rem] h-[1rem]"
                    src={detail}
                    alt="detail_Icon"
                  ></img>
                </div>
              </div>
            </div>
            <div class="flex-row ">
              <div class="flex items-center pb-2.5">
                <div class="w-2 h-12 bg-green-500 rounded-l"></div>
                <div class="font-bold basis-[25%] text-left ml-4 ">
                  {Fear_first}
                </div>
                <div class="basis-[37%] text-left ml-4  text-gray-400">
                  $ 348,000
                </div>
                <div class="basis-[8%] text-green-500 font-semibold text-sm text-center ml-4 ">
                  + 2.90%
                </div>
                <div class="basis-[10%] text-sm font-bold text-center ml-4 ">
                  22
                </div>
                <div class="basis-[5%] ml-10 ">
                  <img
                    class=" w-[1rem] h-[1rem]"
                    src={detail}
                    alt="detail_Icon"
                  ></img>
                </div>
              </div>
            </div>
            <div class="flex-row ">
              <div class="flex items-center pb-2.5">
                <div class="w-2 h-12 bg-red-500 rounded-l"></div>
                <div class="font-bold basis-[25%] text-left ml-4 ">
                  {Fear_first}
                </div>
                <div class="basis-[37%] text-left ml-4  text-gray-400">
                  $ 348,000
                </div>
                <div class="basis-[8%] text-green-500 font-semibold text-sm text-center ml-4 ">
                  + 2.90%
                </div>
                <div class="basis-[10%] text-sm font-bold text-center ml-4 ">
                  22
                </div>
                <div class="basis-[5%] ml-10 ">
                  <img
                    class=" w-[1rem] h-[1rem]"
                    src={detail}
                    alt="detail_Icon"
                  ></img>
                </div>
              </div>
            </div>
            <div class="flex-row ">
              <div class="flex items-center pb-2.5">
                <div class="w-2 h-12 bg-orange-300 rounded-l"></div>
                <div class="font-bold basis-[25%] text-left ml-4 ">
                  {Fear_first}
                </div>
                <div class="basis-[37%] text-left ml-4  text-gray-400">
                  $ 348,000
                </div>
                <div class="basis-[8%] text-green-500 font-semibold text-sm text-center ml-4 ">
                  + 2.90%
                </div>
                <div class="basis-[10%] text-sm font-bold text-center ml-4 ">
                  22
                </div>
                <div class="basis-[5%] ml-10 ">
                  <img
                    class=" w-[1rem] h-[1rem]"
                    src={detail}
                    alt="detail_Icon"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/3">
            <div class="my-2 mx-4 py-4 px-4  shadow-lg rounded-lg ">
              <div class="flex  items-center pb-3">
                <img
                  class="w-[2rem] h-[2rem]"
                  src={Trending}
                  alt="Trending_Icon"
                ></img>
                <div class="text-left  basis-2/3 ml-2 font-title font-bold text-xl">
                  Trending
                </div>
                <div class="text-right  basis-1/4 text-xs text-blue-500 font-medium">
                  More
                </div>
                <img
                  class="w-[0.8rem] h-[0.8rem] mt-0.5"
                  src={more}
                  alt="Trending_more_vector"
                ></img>
              </div>
              <div class="flex pb-2 ">
                <div class="pl-3 text-gray-400">1</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold ">ApeCoin</div>
                <div class="pl-3 text-gray-400">APE</div>
              </div>
              <div class="flex pb-2 ">
                <div class="pl-3 text-gray-400">2</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold">Stargate Finance</div>
                <div class="pl-3 text-gray-400">STG</div>
              </div>
              <div class="flex ">
                <div class="pl-3 text-gray-400">3</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold">Minifootball</div>
                <div class="pl-3 text-gray-400">MINIFOOTBALL</div>
              </div>
            </div>
            <div class="my-2 mx-4 py-4 px-4  shadow-lg rounded-lg ">
              <div class="flex  items-center pb-3">
                <img
                  class="w-[2rem] h-[2rem]"
                  src={Greed}
                  alt="Greed_Icon"
                ></img>
                <div class="text-left  basis-2/3 ml-2 font-title font-bold text-xl">
                  Greed
                </div>
                <div class="text-right  basis-1/4 text-xs text-blue-500 font-medium">
                  More
                </div>
                <img
                  class="w-[0.8rem] h-[0.8rem] mt-0.5"
                  src={more}
                  alt="Trending_more_vector"
                ></img>
              </div>
              <div class="flex pb-2 ">
                <div class="pl-3 text-gray-400">1</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold ">{Greed_first}</div>
                <div class="pl-3 text-gray-400">{Greed_first_company}</div>
              </div>
              <div class="flex pb-2 ">
                <div class="pl-3 text-gray-400">2</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold">{Greed_second}</div>
                <div class="pl-3 text-gray-400">{Greed_second_company}</div>
              </div>
              <div class="flex ">
                <div class="pl-3 text-gray-400">3</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold">{Greed_third}</div>
                <div class="pl-3 text-gray-400">{Greed_third_company}</div>
              </div>
            </div>
            <div class="my-2 mx-4 py-4 px-4  shadow-lg rounded-lg ">
              <div class="flex  items-center pb-3">
                <img
                  class="w-[2rem] h-[2rem]"
                  src={Fear}
                  alt="Trending_Icon"
                ></img>
                <div class="text-left  basis-2/3 ml-2 font-title font-bold text-xl">
                  Fear
                </div>
                <div class="text-right  basis-1/4 text-xs text-blue-500 font-medium">
                  More
                </div>
                <img
                  class="w-[0.8rem] h-[0.8rem] mt-0.5"
                  src={more}
                  alt="Trending_more_vector"
                ></img>
              </div>
              <div class="flex pb-2 ">
                <div class="pl-3 text-gray-400">1</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold ">{Fear_first}</div>
                <div class="pl-3 text-gray-400">{Fear_first_company}</div>
              </div>
              <div class="flex pb-2 ">
                <div class="pl-3 text-gray-400">2</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold">{Fear_second}</div>
                <div class="pl-3 text-gray-400">{Fear_second_company}</div>
              </div>
              <div class="flex ">
                <div class="pl-3 text-gray-400">3</div>
                {/* <div class="pl-3">coin image</div> */}
                <div class="pl-3 font-semibold">{Fear_third}</div>
                <div class="pl-3 text-gray-400">M{Fear_third_company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SearchPage
