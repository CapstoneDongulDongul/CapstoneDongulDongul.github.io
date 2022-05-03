import ReactSpeedometer from 'react-d3-speedometer'
import ExtremeFear from '../svg/ExtremeFear.svg'
import Fear from '../svg/Fear.svg'
import Neutral from '../svg/Neutral.svg'
import Greed from '../svg/Greed.svg'
import ExtremeGreed from '../svg/ExtremeGreed.svg'

function Section() {
  const currentDay = new Date()
  let condition = '' //5 level

  function getCondition(value) {
    if (value > 0) {
      condition = 'pl-5 pr-5 pt-4 bg-ExtremeFear' //Extreme Fear
      if (value > 20) {
        condition = 'pl-5 pr-5 pt-4 bg-Fear' //Fear
        if (value > 40) {
          condition = 'pl-5 pr-5 pt-4 bg-Neutral' //Neutral
          if (value > 60) {
            condition = 'pl-5 pr-5 pt-4 bg-Greed' //Greed
            if (value > 80) {
              condition = 'pl-5 pr-5 pt-4 bg-ExtremeGreed' //Extreme Greed
            }
          }
        }
      }
    }
    return condition
  }
  let value = 47.05
  let label0 = 'EXTREME \n FEAR'
  let state = 'Neutral '
  let previousCloseStateText = 'Neutral'
  let weekStateText = 'Fear'
  let monthStateText = 'ExtremeFear'
  let yearStateText = 'Neutral'
  let previousCloseState = 47
  let weekState = 20
  let monthState = 25
  let yearState = 48
  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-12 mx-auto ">
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
          <div class="pt-8  md:w-1/2 w-full ">
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
                currentValueText={state}
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
              <div class="ml-10 text-xl font-bold text-gray-400">{value}</div>
            </div>
          </div>
          <div class=" pl-24 pr-4 md:w-1/2 w-full ">
            <div class=" px-8 rounded">
              <div>
                <p class="pt-4 text-lg leading-relaxed text-gray-500 text-left">
                  previous close
                </p>
                <p class="flex text-xl text-gray-500 title-font font-medium ">
                  <div class=" ml-14 mr-4 py-4">{previousCloseStateText}</div>
                  <div class="border-t border-black grow mt-8 mr-2"></div>
                  <div class={getCondition(previousCloseState)}>
                    {previousCloseState}
                  </div>
                </p>
                <p class="text-lg leading-relaxed text-gray-500 text-left">
                  4 days ago
                </p>
                <p class="flex text-xl text-gray-500 title-font font-medium ">
                  <div class=" ml-14 mr-4 py-4">{weekStateText}</div>
                  <div class="border-t border-black grow mt-8 mr-2"></div>
                  <div class={getCondition(weekState)}>{weekState}</div>
                </p>
                <p class="text-lg leading-relaxed text-gray-500 text-left">
                  7 days ago
                </p>
                <p class="flex text-xl text-gray-500 title-font font-medium ">
                  <div class=" ml-14 mr-4 py-4">{monthStateText}</div>
                  <div class="border-t border-black grow mt-8 mr-2"></div>
                  <div class={getCondition(monthState)}>{monthState}</div>
                </p>
                <p class="text-lg leading-relaxed text-gray-500 text-left">
                  10 days ago
                </p>
                <p class="flex text-xl text-gray-500 title-font font-medium ">
                  <div class=" ml-14 mr-4 py-4">{yearStateText}</div>
                  <div class="border-t border-black grow mt-8 mr-2"></div>
                  <div class={getCondition(yearState)}>{yearState}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-right pr-24 pt-8 pb-4">Last updated</div>
      <div class=" mb-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default Section
