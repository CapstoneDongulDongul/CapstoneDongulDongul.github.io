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
          name: 'please',
          data: [
            10, 41, 23, 35, 51, 49, 62, 69, 43, 91, 48, 33, 45, 15, 23, 3, 32,
            15, 54, 23, 63, 55, 45, 12, 25, 13, 132, 35, 46, 52, 6, 116,
          ],
        },
      ]}
      options={{
        responsive: [
          {
            breakpoint: 1000,
            options: {
              height: 200,
              width: 425,
            },
          },
        ],
        chart: {
          toolbar: {
            show: false,
          },
          background: 'transparent',
        },
      }}
    />
  )
}
export default Chart
