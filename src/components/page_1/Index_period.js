function IndexPeriod(props) {
  const { textPeriod, StateText, State } = props
  let condition = '' //5 level

  function getCondition(value) {
    if (value > 0) {
      condition = 'w-[62px] h-[62px] pt-4 text-center bg-ExtremeFear' //Extreme Fear
      if (value > 20) {
        condition = 'w-[62px] h-[62px] pt-4 text-center bg-Fear' //Fear
        if (value > 40) {
          condition = 'w-[62px] h-[62px] pt-4 text-center bg-Neutral' //Neutral
          if (value > 60) {
            condition = 'w-[62px] h-[62px] pt-4 text-center bg-Greed' //Greed
            if (value > 80) {
              condition = 'w-[62px] h-[62px] pt-4 text-center bg-ExtremeGreed' //Extreme Greed
            }
          }
        }
      }
    }
    return condition
  }
  return (
    <div>
      <p class="leading-relaxed text-medium sm:text-lg text-gray-500 text-left ">
        {textPeriod}
      </p>
      <p class="flex sm:text-xl text-gray-500 sm:title-font font-medium ">
        <div class="ml-6 sm:ml-14 mr-4 py-3 ">{StateText}</div>
        <div class="grow border-t border-black mt-7 mr-2"></div>
        <div class={getCondition(State)}>{State}</div>
      </p>
    </div>
  )
}
export default IndexPeriod
