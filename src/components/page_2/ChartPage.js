import Chart from './Chart'

function ChartPage() {
  return (
    <section id="2" class="text-gray-600 body-font">
      <div class="px-20 pt-12 mx-auto ">
        <div class="justify-center ">
          <div class="flex flex-wrap justify-center sm:flex-row-reverse md:justify-between lg:px-2 mb-2 ">
            <div class="whitespace-nowrap px-16 pb-4 text-3xl font-bold title-font text-gray-900 ">
              Price History
            </div>
            <ul class="flex justify-around shrink-0 px-4 pt-2 pb-4 ">
              <li class="ml-2 mr-0.5 my-1">period</li>
              {/* <li class="rounded-md mx-2 mt-1 mb-0.5 px-1.5 bg-[#C4C4C4] hover:bg-gray-200 hover:cursor-pointer">
                1 week
              </li> */}
              <li class="rounded-md mx-2 mt-1 mb-0.5 px-1.5 bg-[#C4C4C4] hover:bg-gray-200 hover:cursor-pointer">
                2 week
              </li>
            </ul>
          </div>
          <div class="flex justify-center pt-4 pr-6">
            <div class="sm:hidden">
              <Chart w={700} h={100} />
            </div>
            <div class="hidden sm:block md:hidden">
              <Chart w={500} h={100} />
            </div>
            <div class="hidden md:block lg:hidden">
              <Chart w={300} h={0} />
            </div>
            <div class="hidden lg:block xl:hidden">
              <Chart w={100} h={10} />
            </div>
            <div class="hidden xl:block">
              <Chart w={-100} h={0} />
            </div>
          </div>
          {/* <div class="flex justify-center ">
            <div class="flex flex-nowrap shrink">
              <div class="rounded-md self-center w-7 h-1 md:w-10 md:h-1.5 mb-3 bg-indigo-600"></div>
              <div class="ml-2 pt-4 pb-8 text-sm md:text-lg font-medium">
                Coin Price
              </div>
              <div class="rounded-md self-center w-7 h-1 ml-6 md:w-10 md:h-1.5 md:ml-12 mb-3 bg-orange-400"></div>
              <div class="ml-2 pt-4 pb-8 text-sm md:text-lg font-medium">
                Greed & Fear
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div class="mt-16 mx-12 border-t border-gray-700"></div>
    </section>
  )
}
export default ChartPage
