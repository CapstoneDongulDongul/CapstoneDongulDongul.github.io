import Speedometer from './Speedometer'
import ExtremeFear from '../../svg/ExtremeFear.svg'
import Fear from '../../svg/Fear.svg'
import Neutral from '../../svg/Neutral.svg'
import Greed from '../../svg/Greed.svg'
import ExtremeGreed from '../../svg/ExtremeGreed.svg'
import IndexPeriod from './Index_period'
import { useEffect, useState } from 'react'

function Section() {
  useEffect(() => {
    fetchTName()
  }, [])

  const [cost, setCost] = useState({})

  const fetchTName = async () => {
    const data = await fetch('http://localhost:5000/spd')
    const co = await data.json()
    const temp = {
      t_v: co.t_v[0],
      a_d: co.a_d[0],
      a_w: co.a_w[0],
      t_d: co.t_d[0],
    }
    setCost(temp)
  }

  let value = 47.05 //.00자리
  let state = ''
  let previousCloseStateText = ''
  let oneStateText = ''
  let weekStateText = ''
  let tenStateText = ''

  function getState(value) {
    if (value < -100) {
      state = 'Extreme Fear'
    } else if (value >= -100 && value < -50) {
      state = 'Fear'
    } else if (value >= -50 && value < 0) {
      state = 'Neutral'
    } else if (value >= 0 && value < 50) {
      state = 'Greed'
    } else {
      state = 'Extreme Greed'
    }
    return state
  }

  value = parseInt(cost.t_v)
  let previousCloseState = parseInt(cost.t_v)
  let weekState = parseInt(cost.a_w)
  let oneState = parseInt(cost.a_d)
  let tenState = parseInt(cost.t_d)

  previousCloseStateText = getState(previousCloseState)
  oneStateText = getState(oneState)
  weekStateText = getState(weekState)
  tenStateText = getState(tenState)
  state = getState(value)

  return (
    <section id="1" class="text-gray-600 body-font">
      <div class="px-20 pt-6">
        <h1 class="mb-4 text-3xl font-bold title-font text-gray-900 text-left">
          Fear & Greed Index
        </h1>
        <h4 class="text-left title-font text-gray-400 ">
          What emotion is driving the market now?
        </h4>
        <h4 class="text-left title-font text-gray-400 underline">
          Greed means that the price of BitCoin will rise.
          <br /> Fear means that the price of Bitcoin will fall.
        </h4>
        <div class="flex flex-wrap justify-center">
          <div class="relative py-8 mt-4">
            <div class="sm:hidden">
              <Speedometer
                value={value}
                state={state}
                w={300}
                h={155}
                mini={50}
                font={'6px'}
              />
              <div class="absolute left-[127px] text-xl font-bold text-gray-400 ">
                {value}
              </div>
            </div>
            <div class="hidden sm:block md:hidden">
              <Speedometer
                value={value}
                state={state}
                w={160}
                h={80}
                mini={0}
                font={'10px'}
              />
              <div class="absolute left-[195px] text-xl font-bold text-gray-400 ">
                {value}
              </div>
            </div>
            <div class="hidden md:block lg:hidden">
              <Speedometer
                value={value}
                state={state}
                w={0}
                h={0}
                mini={0}
                font={'15px'}
              />
              <div class="absolute left-[273px] text-xl font-bold text-gray-400 ">
                {value}
              </div>
            </div>
            <div class="hidden lg:block xl:hidden ">
              <Speedometer
                value={value}
                state={state}
                w={100}
                h={44}
                mini={0}
                font={'13px'}
              />
              <div class="absolute left-[224px] text-xl font-bold text-gray-400 ">
                {value}
              </div>
            </div>
            <div class="hidden xl:block">
              <Speedometer
                value={value}
                state={state}
                w={0}
                h={0}
                mini={0}
                font={'15px'}
              />
              <div class="absolute left-[273px] text-xl font-bold text-gray-400 ">
                {value}
              </div>
            </div>
          </div>
          <div class="block xl:w-[2%]"></div>
          <div class="sm:px-8 pt-4 pb-8 lg:w-[40%] mobile:w-5/6 w-full">
            <div>
              <IndexPeriod
                textPeriod="previous close"
                StateText={previousCloseStateText}
                State={previousCloseState}
              />
              <IndexPeriod
                textPeriod="1 day ago"
                StateText={oneStateText}
                State={oneState}
              />
              <IndexPeriod
                textPeriod="7 days ago"
                StateText={weekStateText}
                State={weekState}
              />
              <IndexPeriod
                textPeriod="10 days ago"
                StateText={tenStateText}
                State={tenState}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pr-24 pb-4 text-sm text-right ">Last updated</div>
      <div class=" mt-2 mb-6 ml-12 mr-12 border-t border-gray-700"></div>
    </section>
  )
}
export default Section
