function calculateAverage(array) {
    const sum = array.reduce((acc, value) => acc + value, 0);
    return sum / array.length;
}

const southData = [13, 15, 19, 26, 21, 22, 23];
const westData = [15, 14, 16, 18, 17, 24, 25];
const eastData = [20, 17, 19, 15, 24, 25, 26];
const northData = [19, 18, 23, 20, 23, 19, 31];
const allData = [...southData, ...westData, ...eastData, ...northData];
const averageTemperature = calculateAverage(allData);
alert(`Средняя температура: ${averageTemperature.toFixed(2)}°C`);