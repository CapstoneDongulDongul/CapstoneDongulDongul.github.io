import Speedometer from './Speedometer'
import ExtremeFear from '../../svg/ExtremeFear.svg'
import Fear from '../../svg/Fear.svg'
import Neutral from '../../svg/Neutral.svg'
import Greed from '../../svg/Greed.svg'
import ExtremeGreed from '../../svg/ExtremeGreed.svg'
import IndexPeriod from './Index_period'

function Section() {
  const currentDay = new Date()

  let value = 47.05
  let state = 'Neutral '
  let previousCloseStateText = 'Neutral'
  let oneStateText = 'Fear'
  let weekStateText = 'ExtremeFear'
  let tenStateText = 'Neutral'
  let previousCloseState = 47
  let weekState = 20
  let oneState = 25
  let tenState = 48

  return (
    <section class="text-gray-600 body-font">
      <div class="px-20 pt-12 mx-auto ">
        <h1 class="ml-4 mb-4 text-3xl font-bold title-font text-gray-900 text-left">
          Fear & Greed Index
        </h1>
        <h4 class="ml-4 text-left title-font text-gray-400 ">
          What emotion is driving the market now?
        </h4>
        <h4 class="ml-4 text-left title-font text-gray-400 underline">
          Learn more about the Index
        </h4>
        <div class="flex flex-wrap justify-center">
          <div class="relative py-8 md:w-[94%] lg:w-[55%] w-full">
            <Speedometer value={value} state={state} />
            <div class="block absolute top-100 left-[270px] b-10 text-xl font-bold text-gray-400 ">
              {value}
            </div>
          </div>
          <div class="block lg:w-[2%]"></div>
          <div class="px-8 pb-8 lg:w-[43%] w-5/6">
            <div>
              <IndexPeriod
                textPeriod="previous close"
                StateText={previousCloseStateText}
                State={previousCloseState}
              />
              <IndexPeriod
                textPeriod="1day ago"
                StateText={oneStateText}
                State={oneState}
              />
              <IndexPeriod
                textPeriod="7 day ago"
                StateText={weekStateText}
                State={weekState}
              />
              <IndexPeriod
                textPeriod="10 day ago"
                StateText={tenStateText}
                State={tenState}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pr-24 pb-4 text-sm text-right ">Last updated</div>
      <div class=" mb-10 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default Section
