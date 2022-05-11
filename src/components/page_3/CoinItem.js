function CoinItem({ coinName, price, upDown, index }) {
  let condition = ''
  let percent = ''
  function coinCondition(value) {
    if (value > 0) {
      condition = 'w-2 h-14 bg-red-500 rounded-l' //Extreme Fear
      if (value > 20) {
        condition = 'w-2 h-14 bg-orange-400 rounded-l' //Fear
        if (value > 40) {
          condition = 'w-2 h-14 bg-yellow-300 rounded-l' //Neutral
          if (value > 60) {
            condition = 'w-2 h-14 bg-lime-400 rounded-l' //Greed
            if (value > 80) {
              condition = 'w-2 h-14 bg-green-600 rounded-l' //Extreme Greed
            }
          }
        }
      }
    }
    return condition
  }
  function getPercent(val) {
    if (val[0] === '+') {
      percent = 'basis-[37%] text-green-500 font-semibold text-sm text-right'
    } else {
      percent = 'basis-[37%] text-red-500 font-semibold text-sm text-right'
    }
    return percent
  }
  return (
    <div class="flex-row pl-2">
      <div class="flex items-center pb-3 ">
        <div class={coinCondition(index)}></div>
        <div class="font-bold basis-[25%] text-left ml-6 ">{coinName}</div>
        <div class="basis-[10%] text-right ml-6  text-gray-400">{price}</div>
        <div class={getPercent(upDown)}>{upDown}</div>
        <div class="basis-[16%] text-sm font-bold text-center ml-4 ">
          {index}
        </div>
      </div>
    </div>
  )
}
export default CoinItem
