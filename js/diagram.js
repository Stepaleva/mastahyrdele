var popCanvas = document.getElementById("popChart");

Chart.defaults.global.defaultFontFamily = "PT Sans";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = 'rgba(79, 23, 73, 1)';

var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: {
    labels: ["Иванов Иван", "Петров Петр", "Алексеева Алиса", "Алексеева Анна", "Семенов Семен", "Васильева Василиса", "Михайлов Михаил", "Максимова Мария", "Яковлев Яков", "Андреева Алина"],
    datasets: [{
      label: 'Уровень',
      data: [93, 88, 77, 74, 71, 64, 59, 50, 48, 41],
      backgroundColor: [
        'rgba(197, 199, 53, 0.8)',
        'rgba(197, 199, 53, 0.8)',
        'rgba(197, 199, 53, 0.8)',
        'rgba(197, 199, 53, 0.8)',
        'rgba(197, 199, 53, 0.8)',
        'rgba(112, 112, 106, 0.8)',
        'rgba(112, 112, 106, 0.8)',
        'rgba(112, 112, 106, 0.8)',
        'rgba(112, 112, 106, 0.8)',
        'rgba(112, 112, 106, 0.8)',
        'rgba(112, 112, 106, 0.8)'
      ]
    }]
  }
});