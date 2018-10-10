import React, { Component } from 'react';
import './App.css';
import Chart from 'chart.js';
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
  throttled_everything: {},
  throttle_latency: {},
  throttle_bw: {},
  throttle_cpu: {},
  unthrottle: {}
};

const COLORS = ['#8cc679', '#c27af7', '#4ea3e4', '#dd9666', '#e8587c'];

const datasets = Object.keys(TYPES).map((type, index) => ({
  label: type.replace('_', ' '),
  data: APPS.map(key => data[key][type].mean / 1000),
  backgroundColor: COLORS[index]
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

      const ctx = document.getElementById('myChart').getContext('2d');
      const labels = APPS.map(key => key.replace('_', ' '));
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets
        },
        options: {
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
