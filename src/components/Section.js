import ReactSpeedometer from 'react-d3-speedometer'

function Section() {
  let state = 'Neutral '
  let value = 47.05
  let previousCloseStateText = 'Neutral'
  let weekStateText = 'Fear'
  let monthStateText = 'ExtremeFear'
  let yearStateText = 'Neutral'
  let previousCloseState = 47
  let weekState = 33
  let monthState = 25
  let yearState = 48
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-24 pt-16 mx-auto">
        <h1 class="text-3xl font-bold title-font text-gray-900 mb-4 text-left">
          Fear & Greed Index
        </h1>
        <h4 class="text-l title-font text-gray-400 text-left">
          What emotion is driving the market now?
        </h4>
        <h4 class="text-l title-font text-gray-400 text-left underline">
          Learn more about the Index
        </h4>
        <div class="flex flex-wrap ">
          <div class="py-8 md:w-1/2 w-full">
            <div class="  rounded">
              <ReactSpeedometer
                minValue={0}
                maxValue={100}
                width={600}
                height={330}
                value={value}
                valueTextFontSize={23}
                ringWidth={117}
                needleHeightRatio={0.3}
                maxSegmentLabels={5}
                currentValueText={state + value}
                needleColor="#7D7D7D"
                labelFontSize="15px"
                customSegmentLabels={[
                  {
                    text: 'EXTREME FEAR',
                    position: 'INSIDE',
                    color: '#777777',
                  },
                  {
                    text: 'FEAR',
                    position: 'INSIDE',
                    color: '#777777',
                  },
                  {
                    text: 'NEUTRAL',
                    position: 'INSIDE',
                    color: '#777777',
                  },
                  {
                    text: 'GREED',
                    position: 'INSIDE',
                    color: '#777777',
                  },
                  {
                    text: 'EXTREME GREED',
                    position: 'INSIDE',
                    color: '#777777',
                  },
                ]}
              />

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg> */}
              <p class="leading-relaxed mb-6"></p>
              <a class="inline-flex items-center">
                <span class="flex-grow flex flex-col pl-4">
                  {/* <span class="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span class="text-gray-500 text-sm">UI DEVELOPER</span> */}
                </span>
              </a>
            </div>
          </div>
          <div class="py-4 px-24 md:w-1/2 w-full">
            <div class=" px-8 rounded">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg> */}
              <div>
                <p class="leading-relaxed text-gray-500 mb-4 text-left">
                  previous close
                </p>
                <div class="grid grid-rows-3 grid-flow-col ">
                  <div class="row-start-1 row-span-2 ml-8 title-font font-medium text-gray-900">
                    {previousCloseStateText}
                  </div>
                  <div class="row-end-3 row-span-2 my-2.5">
                    <div class=" border-t border-black"></div>
                  </div>
                  <div class="row-start-1 row-end-4 title-font font-medium text-gray-900">
                    {previousCloseState}
                  </div>
                </div>
                <p class="leading-relaxed text-gray-500 mb-4 text-left">
                  1 week ago
                </p>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-start-1 row-span-2 ml-8 title-font font-medium text-gray-900">
                    {weekStateText}
                  </div>
                  <div class="row-end-3 row-span-2 my-2.5">
                    <div class=" border-t border-black"></div>
                  </div>
                  <div class="row-start-1 row-end-4 title-font font-medium text-gray-900">
                    {weekState}
                  </div>
                </div>
                <p class="leading-relaxed text-gray-500 mb-4 text-left">
                  1 month ago
                </p>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-start-1 row-span-2 ml-8 title-font font-medium text-gray-900">
                    {monthStateText}
                  </div>
                  <div class="row-end-3 row-span-2 my-2.5">
                    <div class=" border-t border-black"></div>
                  </div>
                  <div class="row-start-1 row-end-4 title-font font-medium text-gray-900">
                    {monthState}
                  </div>
                </div>
                <p class="leading-relaxed text-gray-500 mb-4 text-left">
                  1 year ago
                </p>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-start-1 row-span-2 ml-8 title-font font-medium text-gray-900">
                    {yearStateText}
                  </div>
                  <div class="row-end-3 row-span-2 my-2.5">
                    <div class=" border-t border-black"></div>
                  </div>
                  <div class="row-start-1 row-end-4 title-font font-medium text-gray-900">
                    {yearState}
                  </div>
                </div>
              </div>
              {/* <a class="inline-flex">
                <span class="flex-grow flex text-left  flex-col pl-4">
                  <span class="text-left text-gray-500 text-sm mb-6">
                    DESIGNER
                  </span>
                  <span class="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span class="text-gray-500 text-sm">DESIGNER</span>
                  <span class="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span class="text-gray-500 text-sm">DESIGNER</span>
                  <span class="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span class="text-gray-500 text-sm">DESIGNER</span>
                  <span class="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div class=" mb-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default Section
