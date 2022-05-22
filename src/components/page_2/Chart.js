import ApexChart from 'react-apexcharts'
import { useEffect, useState } from 'react'

function Chart(props) {
  useEffect(() => {
    fetchGraph()
  }, [])

  const [graph, setGraph] = useState({})

  const fetchGraph = async () => {
    const data = await fetch('http://localhost:5000/chart')
    const gp = await data.json()
    const temp = {
      normal_close: gp.normal,
      predict_close: gp.predict,
      date: gp.date,
    }
    setGraph(temp)
  }

  const { w, h, week } = props
  if (week === 1) {
    return (
      <ApexChart
        type="line"
        height={400 - h}
        width={950 - w}
        series={[
          {
            name: 'Predict Price',
            data: graph.predict_close.slice(0, 7),
            color: '#4F46E5',
          },
          {
            name: 'Coin Price',
            data: graph.normal_close.slice(0, 7),
            color: '#fb923c',
          },
        ]}
        options={{
          stroke: {
            curve: 'smooth',
            colors: ['#4F46E5', '#fb923c'],
            width: 2,
          },
          chart: {
            // toolbar: {
            //   show: false,
            // },
            background: 'transparent',
          },
          xaxis: {
            categories: graph.date.slice(0, 7),
          },
        }}
      />
    )
  }
  return (
    <ApexChart
      type="line"
      height={400 - h}
      width={950 - w}
      series={[
        {
          name: 'Predict Price',
          data: graph.predict_close,
          color: '#4F46E5',
        },
        {
          name: 'Coin Price',
          data: graph.normal_close,
          color: '#fb923c',
        },
      ]}
      options={{
        stroke: {
          curve: 'smooth',
          colors: ['#4F46E5', '#fb923c'],
          width: 2,
        },
        chart: {
          // toolbar: {
          //   show: false,
          // },
          background: 'transparent',
        },
        xaxis: {
          categories: graph.date,
        },
      }}
    />
  )
}
export default Chart
