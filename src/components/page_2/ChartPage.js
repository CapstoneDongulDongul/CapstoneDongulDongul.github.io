import Chart from './Chart'

function ChartPage() {
  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-6 mx-auto ">
        <div class="justify-center ">
          <div class="flex flex-wrap justify-center sm:flex-row-reverse lg:justify-between lg:px-2 mb-2 ">
            <div class="whitespace-nowrap px-16 pb-4 text-3xl font-bold title-font text-gray-900 ">
              Index History
            </div>
            <ul class="flex justify-around shrink-0 px-4 pt-2 pb-4 ">
              <li class="ml-2 mr-0.5 my-1">period</li>
              <li class="rounded-md mx-2 mt-1 mb-0.5 px-1.5 bg-[#C4C4C4] hover:bg-gray-200 hover:cursor-pointer">
                1 week
              </li>
              <li class="rounded-md mx-2 mt-1 mb-0.5 px-1.5 bg-[#C4C4C4] hover:bg-gray-200 hover:cursor-pointer">
                2 week
              </li>
              <li class="rounded-md mx-2 mt-1 mb-0.5 px-1.5 bg-[#C4C4C4] hover:bg-gray-200 hover:cursor-pointer">
                3 week
              </li>
              <li class="rounded-md mx-2 mt-1 mb-0.5 px-1.5 bg-[#C4C4C4] hover:bg-gray-200 hover:cursor-pointer">
                month
              </li>
            </ul>
          </div>
          <div class="flex justify-center pt-4 pr-6">
            <div class="md:hidden">
              <Chart w={600} h={100} />
            </div>
            <div class="hidden md:block lg:hidden">
              <Chart w={250} h={0} />
            </div>
            <div class="hidden lg:block xl:hidden">
              <Chart w={0} h={10} />
            </div>
            <div class="hidden xl:block">
              <Chart w={-150} h={0} />
            </div>
          </div>
          <div class="flex justify-center ">
            <div class="flex flex-nowrap shrink">
              <div class="rounded-md self-center w-10 h-1.5 mb-3 bg-blue-700"></div>
              <div class="ml-2 pt-4 pb-8 text-lg font-medium">UBMI</div>
              <div class="rounded-md self-center w-10 h-1.5 ml-12 mb-3 bg-orange-400"></div>
              <div class="ml-2 pt-4 pb-8 text-lg font-medium">Greed & Fear</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default ChartPage
