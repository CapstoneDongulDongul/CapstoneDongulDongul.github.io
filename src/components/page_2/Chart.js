import ApexChart from 'react-apexcharts'

function Chart(props) {
  const { w, h } = props
  return (
    <ApexChart
      type="line"
      height={400 - h}
      width={950 - w}
      series={[
        {
          name: 'Predict Price',
          data: [
            10, 41, 23, 35, 51, 49, 62, 69, 43, 91, 48, 33, 45, 15, 23, 3, 32,
            15, 54, 23, 63, 55, 45, 12, 25, 13, 132, 35, 46, 52, 6, 116,
          ],
          color: '#4F46E5',
        },
        {
          name: 'Greed & Fear',
          data: [
            0, 4, 2, 5, 1, 9, 2, 9, 3, 1, 8, 3, 5, 5, 3, 0, 2, 5, 4, 2, 3, 5, 4,
            2, 5, 3, 12, 5, 6, 2, 6, 16,
          ],
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
