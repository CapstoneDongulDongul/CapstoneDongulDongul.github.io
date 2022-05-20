import ApexChart from 'react-apexcharts'

function Chart(props) {
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
            data: [10, 41, 23, 35, 51, 49, 62],
            color: '#4F46E5',
          },
          {
            name: 'Greed & Fear',
            data: [0, 4, 2, 5, 1, 9, 2],
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
          data: [10, 41, 23, 35, 51, 49, 62, 69, 43, 91, 48, 33, 45, 15],
          color: '#4F46E5',
        },
        {
          name: 'Greed & Fear',
          data: [0, 4, 2, 5, 1, 9, 2, 9, 3, 1, 8, 3, 5, 5],
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
      }}
    />
  )
}
export default Chart
