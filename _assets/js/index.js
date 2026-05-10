'use strict'

var statsNodes = document.querySelectorAll('.stat-bar')
var chartsNodes = document.querySelectorAll('.circle-chart')
var stats = Array.from(statsNodes)
var charts = Array.from(chartsNodes)

function initCharts () {
  stats.map(applyStatStyle)
  charts.map(staticCircleChart)
}

function animateCharts () {
  stats.map(applyStatStyle)
  inView('.stat-bar')
    .on('enter', n => n.classList.add('animate'))
    .on('exit', n => n.classList.remove('animate'))

  charts.map(base)
  inView('.circle-chart')
    .on('enter', applyCircleChart)
    .on('exit', setDefaultLength)
}

function getData (node, str) {
  return node.dataset[str]
}

function getStat (node) {
  return node.dataset.stat
}

function applyStatStyle (node) {
  var size = getData(node, 'stat')
  if (size) {
    var track = document.createElement('span')
    track.classList.add('stat-track')
    track.style.width = size + '%'
    node.querySelector('.stat-name').classList.remove('default')
    node.appendChild(track)
  }
}

function setDefaultLength (node) {
  var path = node.querySelector('.percent')
  path.style.strokeDashoffset = path.getTotalLength()
}

function setPct (val, total) {
  return total / 100 * (100 - val)
}

function securePercent (percent) {
    var val = percent
    if (percent < 0) { val = 0 }
    if (percent > 100) { val = 100 }
    return val
}

function base (node) {
  var path = node.querySelector('.percent')
  path.style.strokeDasharray = path.getTotalLength()
  path.style.strokeDashoffset = path.getTotalLength()
}

function staticCircleChart (node) {
  var path = node.querySelector('.percent')
  var text = node.querySelector('.text')
  var percent = securePercent(getData(node, 'chart'))
  text.textContent = percent
  path.style.strokeDasharray = path.getTotalLength()
  path.style.strokeDashoffset = setPct(percent, path.getTotalLength())
}

function applyCircleChart (node) {
  var path = node.querySelector('.percent')
  var text = node.querySelector('.text')
  var percent = securePercent(getData(node, 'chart'))
  var totalLength = path.getTotalLength()
  text.textContent = percent
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset .7s ease-in-out';
  path.style.strokeDasharray = totalLength
  path.style.strokeDashoffset = setPct(percent, totalLength)
}
