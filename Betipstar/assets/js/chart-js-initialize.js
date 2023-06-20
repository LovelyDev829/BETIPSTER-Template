
function profitChart() {
    var densityCanvas = document.getElementById("myChart");

    Chart.defaults.global.defaultFontFamily = "Ubuntu";
    Chart.defaults.global.defaultFontSize = 16;
    
    var densityData = {
      label: 'hg',
      data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638, 3000, 4000, 5000, 6000],
      backgroundColor: [
        'rgba(230, 90, 67, 0.6)',
        'rgba(260, 80, 67, 0.6)',
        'rgba(290, 70, 67, 0.6)',
        'rgba(320, 60, 67, 0.6)',
        'rgba(350, 50, 67, 0.6)',
        'rgba(380, 40, 67, 0.6)',
        'rgba(410, 30, 67, 0.6)',
        'rgba(530, 20, 67, 0.6)',
        'rgba(560, 10, 67, 0.6)',
        'rgba(590, 20, 67, 0.6)',
        'rgba(620, 30, 67, 0.6)',
        'rgba(650, 40, 67, 0.6)',
      ],
      borderColor: [
        'rgba(0, 99, 132, 1)',
        'rgba(30, 99, 132, 1)',
        'rgba(60, 99, 132, 1)',
        'rgba(90, 99, 132, 1)',
        'rgba(120, 99, 132, 1)',
        'rgba(150, 99, 132, 1)',
        'rgba(180, 99, 132, 1)',
        'rgba(210, 99, 132, 1)',
        'rgba(240, 99, 132, 1)'
      ],
      borderWidth: 0,
      hoverBorderWidth: 0
    };
    
    var chartOptions = {
      scales: {
        yAxes: [{
          barPercentage: 1.0
        }]
      },
      elements: {
        rectangle: {
          borderSkipped: 'left',
        }
      },
      legend: false,
    };
    
    var barChart = new Chart(densityCanvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [densityData],
      },
      options: chartOptions
    });
}

profitChart();

    function doghnut() {
        var ctx = document.getElementById("doghnutChart");

    var data = {
        labels: [
            "Wining Parcent",
            "Lossing Parcent"
        ],
        datasets: [
            {
                data: [70, 30],
                backgroundColor: [
                    "#21b957",
                    "#fc7b8c"
                ],
                hoverBackgroundColor: [
                    "#2aa93c",
                    "#fc7b8c"
                ],
                borderColor: [
                  "#2aa93c",
                  "#e86a7f"
                ]
                            
                            
            }]
    };

    var options = { 
        cutoutPercentage: 60, 
        legend: false
    };


    var myDoughnutChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}

doghnut();