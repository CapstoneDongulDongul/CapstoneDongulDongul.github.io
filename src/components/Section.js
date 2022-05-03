import ReactSpeedometer from 'react-d3-speedometer'

function Section() {
  let label0 = 'EXTREME \n FEAR'
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
      <div class="px-20 pt-12 mx-auto">
        <h1 class="ml-4 text-3xl font-bold title-font text-gray-900 mb-4 text-left">
          Fear & Greed Index
        </h1>
        <h4 class="ml-4 title-font text-gray-400 text-left">
          What emotion is driving the market now?
        </h4>
        <h4 class="ml-4 title-font text-gray-400 text-left underline">
          Learn more about the Index
        </h4>
        <div class="flex flex-wrap ">
          <div class="py-8 md:w-1/2 w-full">
            <div class="rounded">
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

              <p class="leading-relaxed mb-6"></p>
              <a class="inline-flex items-center"></a>
            </div>
          </div>
          <div class=" pl-24 pr-4 md:w-1/2 w-full ">
            <div class=" px-8 bg-gray-100 rounded">
              <div>
                <p class="pt-4 text-lg leading-relaxed text-gray-500 mb-4 text-left">
                  previous close
                </p>
                <p class="text-xl flex justify-start leading-relaxed text-gray-500 mb-4 ml-14 mr-4 text-left title-font font-medium text-gray-900">
                  <div>{previousCloseStateText}</div>
                  <div class=" border-t border-black grow my-4 ml-5"></div>
                  <div class="text-xl ml-5">{previousCloseState}</div>
                </p>
                <p class="text-lg leading-relaxed text-gray-500 mb-4 text-left">
                  1 week ago
                </p>
                <p class="text-xl flex justify-start leading-relaxed text-gray-500 mb-4 ml-14 mr-4 text-left title-font font-medium text-gray-900">
                  <div>{weekStateText}</div>
                  <div class=" border-t border-black grow my-4 ml-5"></div>
                  <div class="text-xl ml-5">{weekState}</div>
                </p>
                <p class="text-lg leading-relaxed text-gray-500 mb-4 text-left">
                  previous close
                </p>
                <p class="text-xl flex justify-start leading-relaxed text-gray-500 mb-4 ml-14 mr-4 text-left title-font font-medium text-gray-900">
                  <div>{previousCloseStateText}</div>
                  <div class=" border-t border-black grow my-4 ml-5"></div>
                  <div class="text-xl ml-5">{previousCloseState}</div>
                </p>
                <p class="text-lg leading-relaxed text-gray-500 mb-4 text-left">
                  previous close
                </p>
                <p class="text-xl pb-4 flex justify-start leading-relaxed text-gray-500 mb-4 mr-4 ml-14 text-left title-font font-medium text-gray-900">
                  <div>{previousCloseStateText}</div>
                  <div class=" border-t border-black grow my-4 ml-5"></div>
                  <div class="text-xl ml-5">{previousCloseState}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" mb-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default Section
