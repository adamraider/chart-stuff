import React, { Component } from 'react';
import Chart from 'chart.js';
import color from 'tinycolor2';
import data from './data';

const APPS = [
  'quincy_building',
  'quincy_empty',
  'next_building',
  'next_empty',
  'vanilla_building',
  'vanilla_empty'
];

const TYPES = {
  throttled_everything: {
    label: 'throttle everything'
  },
  throttle_latency: {
    label: 'throttle latency'
  },
  throttle_bw: {
    label: 'throttle bandwidth'
  },
  throttle_cpu: {
    label: 'throttle cpu'
  },
  unthrottle: {
    label: 'unthrottled'
  }
};

const LABELS = APPS.map(key => key.replace('_', ' '));
const COLORS = ['#8cc679', '#c27af7', '#4ea3e4', '#dd9666', '#e8587c'];

const DATASETS = Object.keys(TYPES).map((type, index) => ({
  label: TYPES[type].label,
  data: APPS.map(key => Math.round((data[key][type].mean / 1000) * 100) / 100),
  backgroundColor: color(COLORS[index]).setAlpha(0.5),
  hoverBackgroundColor: color(COLORS[index]).setAlpha(0.5),
  borderColor: color(COLORS[index]),
  hoverBorderColor: color(COLORS[index]).darken(),
  borderWidth: 1
}));

class App extends Component {
  state = {
    width: null,
    height: null
  };

  componentDidMount() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  rendered = false;
  componentDidUpdate() {
    if (!this.rendered) {
      this.rendered = true;

      this.myChart = new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: LABELS,
          datasets: DATASETS
        },
        options: {
          title: {
            display: true,
            text: 'Time to Interactive (TTI) in Seconds'
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  }

  render() {
    return this.state.width ? (
      <canvas
        id="myChart"
        width={this.state.width}
        height={this.state.height}
      />
    ) : null;
  }
}

export default App;
