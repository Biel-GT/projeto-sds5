import Chart from 'react-apexcharts';

const DonutChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }    
    
    return (
        <Chart 
            options={{ ...options, labels: mockData.labels}}//{ ...objeto, objeto} fala para pegar o 1º objeto e incluir mais coisas nele, no caso, o 2º objeto
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;