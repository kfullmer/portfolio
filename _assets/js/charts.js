lightMode = false;

const milestoneChartOptions = {
	series: [{
		data: [200]
	}],
	chart: {
		type: 'bar',
		height: 150,
		stacked: true,
		stackType: 'normal',
		foreColor: '#282c36',
		toolbar: {
		show: false,
		},
	},
	title: {
		text: 'Total Cases Performed',
		align: 'center',
    margin: 10,
    offsetY: 30,
		style: {
			fontSize: '1.25rem',
			fontWeight: '400',
			fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			colors: {
				backgroundBarColors: ['#c9cacd'],
			},
		},
	},
	dataLabels: {
		dropShadow: {
		enabled: true,
		},
	},
	colors: ['#7215D8'],
	stroke: {
		show: false,
	},
	xaxis: {
		axisBorder: {
			show: false,
		},
		axisTicks: {
			color: '#282c36',
		},
	},
	yaxis: {
		min: 0,
		max: 500,
		labels: {
		show: false,
		},
		axisTicks: {
		show: false,
		},
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
	grid: {
		show: false,
		padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
		},
	},
	legend: {
		show: false,
	}
};

const secondaryCharts = {
	complexity: {
		series: [76, 67, 61, 90, 38],
	chart: {
		height: 300,
		type: 'radialBar',
		foreColor: '#282c36',
	},
	title: {
		text: 'Case Complexity',
		align: 'center',
    margin: 20,
    offsetY: 10,
		style: {
			fontSize: '1.25rem',
			fontWeight: '400',
			fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
		},
	},
	plotOptions: {
		radialBar: {
			offsetY: 20,
			startAngle: 0,
			endAngle: 270,
			hollow: {
				margin: 5,
				size: '20%',
				background: 'transparent',
				image: undefined,
			},
			track: {
				background: '#c9cacd',
			},
			dataLabels: {
				name: {
					show: false,
				},
				value: {
					show: false,
				}
			}
		}
	},
	colors: ['#F6EEFD', '#DBC0F9', '#9544ED', '#7215D8', '#520F9A'],
	labels: ['Very Low', 'Low', 'Moderate', 'High', 'Very High'],
	legend: {
		fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
		show: true,
		floating: true,
		fontSize: '14px',
		position: 'left',
		offsetY: 30,
		offsetX: -30,
		labels: {
			useSeriesColors: false,
		},
		markers: {
			size: 0
		},
		formatter: function (seriesName, opts) {
			return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
		},
		itemMargin: {
			vertical: 3
		}
	},
	responsive: [
		{
			breakpoint: 1400,
			options: {
				chart: {
					height: 250,
				},
				legend: {
					fontSize: '12px',
					offsetY: 10,
					offsetX: -40,
				},
			},
		},
		{
			breakpoint: 1200,
			options: {
				legend: {
					offsetY: 15,
					offsetX: 0,
				},
			},
		},
		// Temporary workaround for https://github.com/apexcharts/apexcharts.js/issues/2056
		{
			// 'Fake' breakpoint that will never apply
			breakpoint: 9001,
			options: {},
		},
	]
	},
	diagnosis: {
		chart: {
			height: 350,
			foreColor: '#282c36',
			type: "donut",
			fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
    },
		title: {
			text: 'Case Diagnosis',
			align: 'center',
      margin: 20,
      offsetY: 10,
			style: {
				fontSize: '1.25rem',
				fontWeight: '400',
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
		},
		colors: ['#DBC0F9', '#9544ED', '#7215D8'],
		stroke: {
			width: 2,
			colors: ['#0c2839']
		},
		legend: {
			position: 'bottom',
			fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			itemMargin: {
				vertical: 5,
			},
		},
		series: [32, 68],
		labels: ['Malignant', 'Nonmalignant'],
		dataLabels: {
			style: {
				fontSize: '0.9rem',
				fontWeight: 400,
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
			formatter: function (val, params) {
				return val + "%"
			},
		},
		tooltip: {
			fillSeriesColor: false,
			theme: true,
			y: [{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "%";
					}
					return y;
				}
			},
			{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "%";
					}
					return y;
				}
			}
			],
			style: {
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
		},
		responsive: [
			{
				breakpoint: 1400,
				options: {
					chart: {
						height: 300,
					},
				},
			},
			// Temporary workaround for https://github.com/apexcharts/apexcharts.js/issues/2056
			{
				// 'Fake' breakpoint that will never apply
				breakpoint: 9001,
				options: {},
			},
		]
	}
}

const chartOptions = {
	comparison: {
		series: [
			{
				name: 'My Times',
				data: [
					[1583049600000, 52],
					[1585551600000, 90],
					[1590649200000, 70],
					[1591945200000, 48],
					[1597215600000, 80],
					[1598079600000, 55],
					[1598230000000, 60],
					[1600758000000, 40],
					[1603830000000, 72],
					[1660830000000, 45],
					[1663830000000, 78],
				]
			},
			{
				name: 'Facility Average',
				data: [
					[1573049600000, 100],
					[1585551600000, 65],
					[1588230000000, 60],
					[1588402800000, 80],
					[1590649200000, 70],
					[1596215600000, 48],
					[1598079600000, 55],
					[1605168000000, 55],
					[1609574400000, 65],
					[1619574400000, 90],
					[1663830000000, 78],
				]
			},
			{
				name: 'National Average',
				data: [
					[1583049600000, 52],
					[1585551600000, 40],
					[1588230000000, 60],
					[1590002800000, 80],
					[1590649200000, 70],
					[1591945200000, 48],
					[1598079600000, 55],
					[1600758000000, 65],
					[1623830000000, 72],
					[1649830000000, 90],
					[1663830000000, 78],
				]
			}
		],
		chart: {
			type: 'line',
			height: 500,
			foreColor: '#282c36',
			stacked: false,
      parentHeightOffset: 0,
			events: {
				selection: function (chart, e) {
					console.log(new Date(e.xaxis.min))
				}
			},
			toolbar: {
				show: true,
				offsetY: 5,
				tools: {
					download: false,
					selection: true,
					zoom: false,
					zoomin: true,
					zoomout: true,
					pan: false,
					reset: ' '
				},
			},
		},
		title: {
			text: 'Personal vs Average Case Times',
			margin: 40,
      offsetY: 10,
			style: {
				fontSize: '1.25rem',
				fontWeight: '400',
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
		},
		colors: ['#DBC0F9', '#9544ED', '#7215D8'],
		dataLabels: {
			enabled: false
		},
		tooltip: {
			y: [{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "m";
					}
					return y;
				}
			},
			{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "m";
					}
					return y;
				}
			},
			{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "m";
					}
					return y;
				}
			}
			],
			style: {
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
		},
		stroke: {
			curve: 'smooth',
			lineCap: 'round',
		},
		fill: {
			type: 'solid',
		},
		legend: {
      show: true,
			position: 'bottom',
			horizontalAlign: 'center',
      height: '80',
		},
		xaxis: {
			type: 'datetime',
			min: new Date('01 Mar 2020').getTime(),
			tickAmount: 6,
		},
		yaxis: {
			min: 0,
			max: 120,
			title: {
				text: 'Minutes',
			}
		},
		responsive: [{
			breakpoint: 700,
			options: {
        chart: {
          height: 350,
        },
				title: {
					text: 'Personal vs Avg Case Times',
          margin: 10,
          offsetY: 20,
					style: {
						fontSize: '1rem',
					},
				},
        legend: {
          height: '40',
        },
			},
		},
		// Temporary workaround for https://github.com/apexcharts/apexcharts.js/issues/2056
		{
			// 'Fake' breakpoint that will never apply
			breakpoint: 9001,
			options: {},
		},
		]
	},
	caseQuantity: {
		series: [{
			name: 'Planned Cases',
			data: [3, 5, 4, 2, 8, 5, 6]
		}, {
			name: "Unplanned Cases",
			data: [0, 2, 1, 3, 0, 1, 1]
		}],
		chart: {
			type: 'bar',
			height: 500,
			foreColor: '#fff',
      parentHeightOffset: 0,
			toolbar: {
				show: false,
			},
		},
		title: {
			text: 'Case Volume',
			margin: 40,
      offsetY: 10,
			style: {
				fontSize: '1.25rem',
				fontWeight: '400',
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
		},
		colors: ['#DBC0F9', '#9544ED'],
		plotOptions: {
			bar: {
				borderRadius: 8,
				dataLabels: {
					position: 'top',
				},
			}
		},
		dataLabels: {
			enabled: false,
			offsetY: 0,
			style: {
				fontSize: '12px',
				colors: ['#fff']
			}
		},
		stroke: {
			show: false,
			width: 1,
			colors: ['#fff']
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			}
		},
		xaxis: {
			categories: ["January", "February", "March", "April", "May", "June", "July"],
		},
		legend: {
			show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      height: '80',
		},
		fill: {
			type: 'gradient',
			gradient: {
				type: "vertical",
				shadeIntensity: 0.5,
				gradientToColors: ['#DBC0F9', '#9544ED'],
				inverseColors: true,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 100]
			}
		},
    responsive: [{
      breakpoint: 700,
      options: {
        chart: {
          height: 350,
        },
        title: {
          margin: 10,
          offsetY: 20,
          style: {
            fontSize: '1rem',
          },
        },
        legend: {
          height: '40',
        },
      },
    },
		// Temporary workaround for https://github.com/apexcharts/apexcharts.js/issues/2056
		{
			// 'Fake' breakpoint that will never apply
			breakpoint: 9001,
			options: {},
		},
		]
	},
	caseTimes: {
		series: [{
			name: 'Max Duration',
			type: 'column',
			data: [31, 70, 122, 90, 55, 42, 67, 80, 65, 55, 107]
		}, {
			name: 'Average Duration',
			type: 'line',
			data: [31, 50, 92, 70, 55, 42, 67, 50, 65, 45, 90]
		}],
		chart: {
			type: 'line',
			height: 500,
			foreColor: '#fff',
			stacked: false,
      parentHeightOffset: 0,
			toolbar: {
				show: true,
				offsetY: 5,
				tools: {
					download: false,
					selection: true,
					zoom: false,
					zoomin: true,
					zoomout: true,
					pan: false,
					reset: ' '
				},
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 8,
				dataLabels: {
					position: 'top',
				},
			}
		},
		stroke: {
			width: [0, 4],
			lineCap: 'round',
		},
		legend: {
			show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      height: '80',
		},
		title: {
			text: 'Case Times',
			margin: 40,
      offsetY: 10,
			style: {
				fontSize: '1.25rem',
				fontWeight: '400',
				fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
			},
		},
		tooltip: {
			y: [{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "m";
					}
					return y;
				}
			},
			{
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "m";
					}
					return y;
				}
			}],
		},
		colors: ['#DBC0F9', '#9544ED', '#7215D8'],
		dataLabels: {
			enabled: false,
			enabledOnSeries: [1]
		},
		labels: ['Jan 2021', 'Feb 2021', 'March 2021', 'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021'],
		xaxis: {
			type: 'datetime'
		},
		yaxis: [{
			min: 0,
			max: 160,
			title: {
				text: 'Minutes',
			},
		}],
		responsive: [{
      breakpoint: 700,
      options: {
        chart: {
          height: 350,
        },
        title: {
          margin: 10,
          offsetY: 20,
          style: {
            fontSize: '1rem',
          },
        },
        legend: {
          height: '40',
        },
      },
    },
		// Temporary workaround for https://github.com/apexcharts/apexcharts.js/issues/2056
		{
			// 'Fake' breakpoint that will never apply
			breakpoint: 9001,
			options: {},
		},
		]
	}
};

const setForeColor = (lightMode) => {
	chartOptions.caseQuantity.dataLabels.style.colors[0] = lightMode ? '#282c36' : '#fff';
	chartOptions.caseQuantity.stroke[0] = lightMode ? '#282c36' : '#fff';
	chartOptions.comparison.chart.foreColor = lightMode ? '#282c36' : '#fff';
	chartOptions.caseQuantity.chart.foreColor = lightMode ? '#282c36' : '#fff';
	chartOptions.caseTimes.chart.foreColor = lightMode ? '#282c36' : '#fff';
	secondaryCharts.diagnosis.chart.foreColor = lightMode ? '#282c36' : '#fff';
	secondaryCharts.diagnosis.stroke.colors = lightMode ? '#fff' : '#0c2839';
	secondaryCharts.complexity.chart.foreColor = lightMode ? '#282c36' : '#fff';
	secondaryCharts.complexity.plotOptions.radialBar.track.background = lightMode ? '#c9cacd' : '#0d0d0d';
	milestoneChartOptions.plotOptions.bar.colors.backgroundBarColors[0] = lightMode ? '#c9cacd' : '#0d0d0d';
	milestoneChartOptions.chart.foreColor = lightMode ? '#282c36' : '#fff';
	milestoneChartOptions.xaxis.axisTicks.color = lightMode ? '#282c36' : '#fff';
}

(function () {

	let secondaryChart = new ApexCharts(document.querySelector("#secondary-chart"), secondaryCharts['complexity']);
	let secondaryChartName = 'complexity'
	secondaryChart.render();

	// Secondary Charts
	const secondaryChartToggles = document.querySelectorAll('.multi-chart-nav button')
	function toggleSecondaryChart(chartName) {
		secondaryChartName = chartName
		console.log(chartName)
		secondaryChart.destroy()
		var newChart = new ApexCharts(document.querySelector("#secondary-chart"), secondaryCharts[chartName]);
		newChart.render()
		secondaryChart = newChart
	}

	function handleSecondaryToggleClick(e) {
		secondaryChartToggles.forEach((toggle) => {
			toggle.classList.remove('current')
		})
		e.target.classList.add('current')
		toggleSecondaryChart(e.target.dataset.chartName)
	}
	secondaryChartToggles.forEach((toggle) => {
		toggle.addEventListener('click', handleSecondaryToggleClick)
	})

	var milestoneChart = new ApexCharts(document.querySelector("#milestone-chart"), milestoneChartOptions);
    milestoneChart.render();

	

	// Main Charts
	let currentChart = new ApexCharts(document.querySelector("#case-times"), chartOptions['comparison']);
	let currentChartName = 'comparison'
	currentChart.render();

	function toggleChart(chartName, currentChart) {
		currentChartName = chartName
		currentChart.destroy()
		var newChart = new ApexCharts(document.querySelector("#case-times"), chartOptions[chartName])
		newChart.render()
		currentChart = newChart
	}

	const chartButtons = document.querySelectorAll('.primary-charts-toggle')

	function handleChartToggleClick(e) {
		e.stopPropagation()
		chartButtons.forEach(button => {
			button.classList.remove('current')
		})
		e.target.classList.add('current');
		toggleChart(e.target.dataset.chartName, currentChart)
	}


	chartButtons.forEach(button => {
		button.addEventListener('click', handleChartToggleClick)
	})

	const handleLightModeToggle = (e) => {
		if (e.target.checked) {
			document.body.classList.remove('light-mode')
			lightMode = false
		} else {
			document.body.classList.add('light-mode')
			lightMode = true
		}

		setForeColor(lightMode)

		currentChart.destroy()
		secondaryChart.destroy()
		milestoneChart.destroy()
		var newChart = new ApexCharts(document.querySelector("#case-times"), chartOptions[currentChartName])
		var newModeChart = new ApexCharts(document.querySelector("#secondary-chart"), secondaryCharts[secondaryChartName]);
		var newMilestoneChart = new ApexCharts(document.querySelector("#milestone-chart"), milestoneChartOptions);
		secondaryChart = newModeChart
		milestoneChart = newMilestoneChart
		newModeChart.render();
		newChart.render();
		newMilestoneChart.render();
	}

	const lightModeToggle = document.getElementById('mode')
	lightModeToggle.addEventListener('change', handleLightModeToggle)

	// Animations for pinned / recent cases
	const toggleButtons = document.querySelectorAll('.case-toggle')
	const pinnedCaseCard = document.querySelector('.pinned-case')
	const recentCaseCard = document.querySelector('.recent-case')


	let cardsToHide;
	const animateInCases = (e) => {
		cardsToHide = e.target.id === 'recent' ? 'pinned' : 'recent';
		const cards = document.querySelectorAll(`.${cardsToHide}-case`)
		cards.forEach((card) => {
			card.classList.remove('animate__fadeInUp')
			card.classList.add('animate__fadeOut')
		})
	}

	pinnedCaseCard.addEventListener('animationend', () => {
		if (cardsToHide === 'pinned') {
			document.querySelector('.dashboard').classList.remove('pinned-visible')
			document.querySelectorAll(`.pinned-case`).forEach((card) => {
				card.classList.remove('animate__fadeOut')
			})
			document.querySelectorAll(`.recent-case`).forEach((card) => {
				card.classList.add('animate__fadeInUp')
			})
		}

	});

	recentCaseCard.addEventListener('animationend', () => {
		console.log('recent animation ended')
		if (cardsToHide === 'recent') {
			document.querySelector('.dashboard').classList.add('pinned-visible')
			document.querySelectorAll(`.recent-case`).forEach((card) => {
				card.classList.remove('animate__fadeOut')
			})
			document.querySelectorAll(`.pinned-case`).forEach((card) => {
				card.classList.add('animate__fadeInUp')
			})
		}
	});

	toggleButtons.forEach(button => {
		button.addEventListener('change', animateInCases)
	})


})();
