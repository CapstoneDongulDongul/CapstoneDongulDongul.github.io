function CoinItem({ coinName, price, upDown, index }) {
  let condition = ''
  let percent = ''
  function coinCondition(value) {
    if (value > 0) {
      condition = 'w-2 h-16 bg-red-500 rounded-l mr-2 mobile:mr-6 ' //Extreme Fear
      if (value > 20) {
        condition = 'w-2 h-16 bg-orange-400 rounded-l mr-2 mobile:mr-6' //Fear
        if (value > 40) {
          condition = 'w-2 h-16 bg-yellow-300 rounded-l mr-2 mobile:mr-6' //Neutral
          if (value > 60) {
            condition = 'w-2 h-16 bg-lime-400 rounded-l mr-2 mobile:mr-6' //Greed
            if (value > 80) {
              condition = 'w-2 h-16 bg-green-600 rounded-l mr-2 mobile:mr-6' //Extreme Greed
            }
          }
        }
      }
    }
    return condition
  }
  function getPercent(val) {
    if (val[0] === '+') {
      percent =
        'basis-[22%] text-green-500 font-semibold text-[10px] mobile:text-sm text-center'
    } else {
      percent =
        'basis-[22%] text-red-500 font-semibold text-[10px] mobile:text-sm text-center'
    }
    return percent
  }
  return (
    <div class="flex-row px-2">
      <div class="flex items-center pb-3">
        <div class={coinCondition(index)}></div>
        <div class="font-bold basis-[30%] text-[12px] mobile:text-base text-left">
          {coinName}
        </div>
        <div class="basis-[30%] text-left text-[12px] mobile:text-base text-gray-400">
          {price}
        </div>
        <div class={getPercent(upDown)}>{upDown}</div>
        <div class="basis-[10%] text-[10px] mobile:text-sm font-bold text-center">
          {index}
        </div>
      </div>
    </div>
  )
}
export default CoinItem
