function CoinItem({ name, upDown, index }) {
  let temp = []
  let temp2 = []
  let p = []
  let gfs = []

  for (let i = 0; i < name.length; i++) {
    temp.push(name[i][0])
    gfs.push(parseInt(index[temp[i]]))
    if (upDown[temp[i]] > 0) {
      p.push('+' + upDown[temp[i]])
    } else {
      p.push(upDown[temp[i]])
    }
  }
  for (let i = 0; i < name.length; i++) {
    temp2.push(name[i][1])
  }
  let condition = ''
  let percent = ''
  function coinCondition(value) {
    if (value < -100) {
      condition = 'w-2 h-16 bg-red-500 rounded-l mr-2 mobile:mr-6 ' //Extreme Fear
    } else if (value >= -100 && value < -50) {
      condition = 'w-2 h-16 bg-orange-400 rounded-l mr-2 mobile:mr-6' //Fear
    } else if (value >= -50 && value < 0) {
      condition = 'w-2 h-16 bg-yellow-300 rounded-l mr-2 mobile:mr-6' //Neutral
    } else if (value >= 0 && value < 50) {
      condition = 'w-2 h-16 bg-lime-400 rounded-l mr-2 mobile:mr-6' //Greed
    } else {
      condition = 'w-2 h-16 bg-green-600 rounded-l mr-2 mobile:mr-6' //Extreme Greed
    }
    return condition
  }
  function getPercent(val) {
    if (val < 0) {
      percent =
        'basis-[22%] text-red-500 font-semibold text-[10px] mobile:text-sm text-center'
    } else {
      percent =
        'basis-[22%] text-green-500 font-semibold text-[10px] mobile:text-sm text-center'
    }
    return percent
  }
  return (
    <div class="flex-row px-2">
      <div class="flex items-center pb-3">
        <div class={coinCondition(gfs[0])}></div>
        <div class="font-bold basis-[30%] text-[12px] mobile:text-base text-left">
          {temp[0]}
        </div>
        <div class="basis-[30%] text-left text-[12px] mobile:text-base text-gray-400">
          {temp2[0]}
        </div>
        <div class={getPercent(p[0])}>{p[0]}%</div>
        <div class="basis-[10%] text-[10px] mobile:text-sm font-bold text-center">
          {gfs[0]}
        </div>
      </div>
      <div class="flex items-center pb-3">
        <div class={coinCondition(gfs[1])}></div>
        <div class="font-bold basis-[30%] text-[12px] mobile:text-base text-left">
          {temp[1]}
        </div>
        <div class="basis-[30%] text-left text-[12px] mobile:text-base text-gray-400">
          {temp2[1]}
        </div>
        <div class={getPercent(p[1])}>{p[1]}%</div>
        <div class="basis-[10%] text-[10px] mobile:text-sm font-bold text-center">
          {gfs[1]}
        </div>
      </div>
      <div class="flex items-center pb-3">
        <div class={coinCondition(gfs[2])}></div>
        <div class="font-bold basis-[30%] text-[12px] mobile:text-base text-left">
          {temp[2]}
        </div>
        <div class="basis-[30%] text-left text-[12px] mobile:text-base text-gray-400">
          {temp2[2]}
        </div>
        <div class={getPercent(p[2])}>{p[2]}%</div>
        <div class="basis-[10%] text-[10px] mobile:text-sm font-bold text-center">
          {gfs[2]}
        </div>
      </div>
      <div class="flex items-center pb-3">
        <div class={coinCondition(gfs[3])}></div>
        <div class="font-bold basis-[30%] text-[12px] mobile:text-base text-left">
          {temp[3]}
        </div>
        <div class="basis-[30%] text-left text-[12px] mobile:text-base text-gray-400">
          {temp2[3]}
        </div>
        <div class={getPercent(p[3])}>{p[3]}%</div>
        <div class="basis-[10%] text-[10px] mobile:text-sm font-bold text-center">
          {gfs[3]}
        </div>
      </div>
      <div class="flex items-center pb-3">
        <div class={coinCondition(gfs[4])}></div>
        <div class="font-bold basis-[30%] text-[12px] mobile:text-base text-left">
          {temp[4]}
        </div>
        <div class="basis-[30%] text-left text-[12px] mobile:text-base text-gray-400">
          {temp2[4]}
        </div>
        <div class={getPercent(p[4])}>{p[4]}%</div>
        <div class="basis-[10%] text-[10px] mobile:text-sm font-bold text-center">
          {gfs[4]}
        </div>
      </div>
    </div>
  )
}
export default CoinItem
