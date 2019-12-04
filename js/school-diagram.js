var popSchoolCanvas = document.getElementById("popSchoolChart");

Chart.defaults.global.defaultFontFamily = "PT Sans";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'rgba(79, 23, 73, 1)';

var barSchoolChart = new Chart(popSchoolCanvas, {
  type: 'bar',
  data: {
    labels: ["Мастахская СОШ", "Хагынская СОШ", "Кыргыдайская СОШ"],
    datasets: [{
      label: 'Уровень школы',
      data: [73, 65.7, 59],
      backgroundColor: [
        'rgba(147, 39, 214, 0.9)',
        'rgba(147, 39, 214, 0.9)',
        'rgba(147, 39, 214, 0.9)',
        'rgba(147, 39, 214, 0.9)'
      ]
    }]
  }
});