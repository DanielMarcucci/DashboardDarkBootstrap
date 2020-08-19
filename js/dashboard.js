
$(document).ready(function() {
  var fixHeight = function() {
    console.log(document.documentElement.clientHeight)
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };

  fixHeight();

  $(window).resize(function() {
    fixHeight();
  });

  $('.navbar .nav-icon-toggler').on('click', function() {
    fixHeight();
  });

  $('.nav-icon-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay, .nav-icon-toggler').toggleClass('open');
  });

});


/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())