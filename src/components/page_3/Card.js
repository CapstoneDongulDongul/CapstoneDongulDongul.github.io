function Card(props) {
  const { title, img, List } = props
  let temp = []
  let temp2 = []

  for (let i = 0; i < List.length; i++) {
    temp.push(List[i][0])
  }
  for (let i = 0; i < List.length; i++) {
    temp2.push(List[i][1])
    
  }
  if (title =='Trending'){
    return (
      <div class="my-2 mx-4 py-4 px-4 shadow-lg rounded-lg">
        <div class="flex items-center pb-3">
          <img class="w-[2rem] h-[2rem]" src={img} alt="Trending_Icon"></img>
          <div class="text-left basis-2/3 ml-2 font-title font-bold mobile:text-xl">
            {title}
          </div>
        </div>
        <div class="flex pb-2 text-[0.7rem] mobile:text-base ">
          <div class="pl-1 text-gray-400">1</div>
          {/* <div class="pl-3">coin image</div> */}
          <div class="pl-3 font-semibold ">{temp[0]}</div>
        </div>
        <div class="flex pb-2 text-[0.7rem] mobile:text-base ">
          <div class="pl-1 text-gray-400">2</div>
          {/* <div class="pl-3">coin image</div> */}
          <div class="pl-3 font-semibold">{temp[1]}</div>
        </div>
        <div class="flex text-[0.7rem] mobile:text-base ">
          <div class="pl-1 text-gray-400">3</div>
          {/* <div class="pl-3">coin image</div> */}
          <div class="pl-3 font-semibold">{temp[2]}</div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div class="my-2 mx-4 py-4 px-4 shadow-lg rounded-lg">
        <div class="flex items-center pb-3">
          <img class="w-[2rem] h-[2rem]" src={img} alt="Trending_Icon"></img>
          <div class="text-left basis-2/3 ml-2 font-title font-bold mobile:text-xl">
            {title}
          </div>
        </div>
        <div class="flex pb-2 text-[0.7rem] mobile:text-base ">
          <div class="pl-1 text-gray-400">1</div>
          {/* <div class="pl-3">coin image</div> */}
          <div class="pl-3 font-semibold ">{temp[0]}</div>
          <div class="pl-3 text-gray-400 ">{Number(temp2[0]).toFixed(2)}</div>
        </div>
        <div class="flex pb-2 text-[0.7rem] mobile:text-base ">
          <div class="pl-1 text-gray-400">2</div>
          {/* <div class="pl-3">coin image</div> */}
          <div class="pl-3 font-semibold">{temp[1]}</div>
          <div class="pl-3 text-gray-400">{Number(temp2[1]).toFixed(2)}</div>
        </div>
        <div class="flex text-[0.7rem] mobile:text-base ">
          <div class="pl-1 text-gray-400">3</div>
          {/* <div class="pl-3">coin image</div> */}
          <div class="pl-3 font-semibold">{temp[2]}</div>
          <div class="pl-3 text-gray-400">{Number(temp2[2]).toFixed(2)}</div>
        </div>
      </div>
    )
  }
  
  
}
export default Card
