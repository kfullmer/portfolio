lightMode = false;

var options = {
    series: [50],
    chart: {
      height: 400,
      type: 'radialBar',
	  foreColor: '#fff'
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#091F2C",
        },
        dataLabels: {
          name: {
            fontSize: '1.5rem',
            fontFamily: 'CircularTT, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
            color: '#fff',
            fontWeight: 400,
          },
          value: {
            show: false,
          }
        }
      }
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        }
      },
    },
    tooltip: {
      enabled: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
          colorStops: [
          {
            offset: 0,
            color: "#DD8547",
            opacity: 1
          },
          {
            offset: 50,
            color: "#DEAE60",
            opacity: 1
          },
          {
            offset: 100,
            color: "#DFD779",
            opacity: 1
          }
        ]
      }
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Moderate'],
    responsive: [
      {
        breakpoint: 1400,
        options: {
          chart: {
            height: 300,
          }
        },
      },
      // Temporary workaround for https://github.com/apexcharts/apexcharts.js/issues/2056
      {
        // 'Fake' breakpoint that will never apply
        breakpoint: 9001,
        options: {},
      },
    ]
};

const setForeColor = (lightMode) => {
	options.plotOptions.radialBar.dataLabels.name.color = lightMode ? '#212121' : '#fff';
	//secondaryCharts.diagnosis.stroke.colors = lightMode ? '#fff' : '#0c2839';
	options.chart.foreColor = lightMode ? '#212121' : '#fff';
	options.plotOptions.radialBar.track.background = lightMode ? '#dbdbe6' : '#091F2C'
}

const ellipsestext = "...";

const truncateText = (elementSelector, charCount) => {
	$(elementSelector).each(function() {
		var content = $(this).html();
		if (content.length > charCount) {
		  var c = content.substr(0, charCount);
		  var h = content;
		  var html =
			'<div class="truncate-text" style="display:block">' +
			c +
			'<span class="moreellipses">' +
			ellipsestext +
			'&nbsp;&nbsp;<a href="" class="moreless more">more</a></span></span></div><div class="truncate-text" style="display:none">' +
			h +
			'<a href="" class="moreless less"> Less</a></span></div>';
  
		  $(this).html(html);
		}
	});
}

$(document).ready(function() {
	// Toggle Target / Planned Path / Nav Path
	$('.multi-toggle-nav button').click((e) => {
		$(e.target).siblings().removeClass('current')
		$(e.target).addClass('current')
		const selectedTab = $(e.target).data('toggle-name')
		console.log(selectedTab)

		$('.images img').addClass('hidden');
		$(`#${selectedTab}`).removeClass('hidden')
	})

	// Render chart
	var complexityChart = new ApexCharts(document.querySelector("#case-complexity"), options);
    complexityChart.render();

	// Light mode
	const handleLightModeToggle = (e) => {
		if (e.target.checked) {
			$('body').removeClass('light-mode')
			lightMode = false
		} else {
			$('body').addClass('light-mode')
			lightMode = true
		}
	
		setForeColor(lightMode)
	
		complexityChart.destroy()
		var newChart = new ApexCharts(document.querySelector("#case-complexity"), options)
		newChart.render();
	}

	$('#mode').change((e) => {
		handleLightModeToggle(e)
	})

	// Truncate text
	truncateText('.truncate-pinned', 300)
	truncateText('.truncate-notes', 100)

	$(".moreless").click(function() {
		var thisEl = $(this);
		var cT = thisEl.closest(".truncate-text");
		var tX = ".truncate-text";
  
		if (thisEl.hasClass("less")) {
		  cT.prev(tX).toggle();
		  cT.slideToggle();
		} else {
		  cT.toggle();
		  cT.next(tX).fadeToggle();
		}
		return false;
	  });

})