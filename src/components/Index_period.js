function IndexPeriod(props) {
  const { textPeriod, StateText, State } = props
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
  return (
    <div>
      <p class="leading-relaxed text-lg text-gray-500 text-left">
        {textPeriod}
      </p>
      <p class="flex text-xl text-gray-500 title-font font-medium ">
        <div class=" ml-14 mr-4 py-4">{StateText}</div>
        <div class="grow border-t border-black mt-8 mr-2"></div>
        <div class={getCondition(State)}>{State}</div>
      </p>
    </div>
  )
}
export default IndexPeriod
