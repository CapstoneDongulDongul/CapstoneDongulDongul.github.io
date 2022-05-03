import TimelineChart from './TimelineChart'
import ApexChart from 'react-apexcharts'

function ChartPage() {
  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-6 mx-auto ">
        <div class="justify-center">
          <div class="flex justify-between shrink md: w-full ">
            <div class="flex justify-around ml-4 md:w-1/3 pt-2 pb-4 ">
              <div class="ml-2 mr-0.5 my-1  ">period</div>
              <div class="rounded-md mx-2 mt-1 px-1.5 mb-0.5 bg-[#C4C4C4]">
                month
              </div>
              <div class="rounded-md mx-2 mt-1 px-1.5 mb-0.5 bg-[#C4C4C4]">
                3week
              </div>
              <div class="rounded-md mx-2 mt-1 px-1.5 mb-0.5 bg-[#C4C4C4]">
                2week
              </div>
              <div class="rounded-md mx-2 mt-1 px-1.5 mb-0.5 bg-[#C4C4C4]">
                week
              </div>
            </div>
            <div class="pl-4 text-3xl font-bold title-font text-gray-900 md:w-1/3 pt-1 ">
              Index Over Time
            </div>
          </div>
          <div class="flex justify-center pt-2 pr-8">
            <ApexChart
              type="line"
              height={400}
              width={950}
              series={[
                {
                  name: 'please',
                  data: [
                    10, 41, 23, 35, 51, 49, 62, 69, 43, 91, 48, 33, 45, 15, 23,
                    3, 32, 15, 54, 23, 63, 55, 45, 12, 25, 13, 132, 35, 46, 52,
                    6, 116,
                  ],
                },
              ]}
              options={{
                chart: {
                  toolbar: {
                    show: false,
                  },
                  background: 'transparent',
                },
              }}
            />
          </div>
          <div class="flex justify-center ">
            <div class="flex flex-wrap">
              <div class="rounded-md self-center mb-3 w-10 h-1.5 bg-blue-700"></div>
              <div class="ml-2 b-4 text-lg font-medium pt-4 pb-8 ">UBMI</div>
              <div class="ml-12 rounded-md self-center mb-3 w-10 h-1.5 bg-orange-400"></div>
              <div class="ml-2 text-lg font-medium  pt-4 pb-8 ">
                Greed & Fear
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default ChartPage
