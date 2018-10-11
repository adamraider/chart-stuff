import React, { Component } from 'react';
import Chart from 'chart.js';
import color from 'tinycolor2';
import _ from 'lodash';
import datafromnajati from './data';

const TYPES_MAP = {
  throttled_everything: {
    label: 'throttle everything'
  },
  throttle_everything: {
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

const COLORS = [
  '#8cc679',
  '#c27af7',
  '#4ea3e4',
  '#dd9666',
  '#e8587c',
  '#6D435A',
  '#FF6978'
];

function parseData(data) {
  const apps = Object.keys(data);
  const types = _.sortBy(
    _.uniq(
      _.reduce(apps, (memo, app) => memo.concat(Object.keys(data[app])), [])
    ),
    type => -_.get(data, `[${apps[0]}][${type}].mean`, 0)
  );
  const labels = apps.map(key => key.replace('_', ' '));
  const datasets = types.map((type, index) => {
    return {
      label: _.get(TYPES_MAP, `${type}.label`, type),
      data: apps
        .map(
          key =>
            data[key][type]
              ? Math.round((data[key][type].mean / 1000) * 100) / 100
              : null
        )
        .filter(Boolean),
      backgroundColor: color(COLORS[index]).setAlpha(0.5),
      hoverBackgroundColor: color(COLORS[index]).setAlpha(0.5),
      borderColor: color(COLORS[index]),
      hoverBorderColor: color(COLORS[index]).darken(),
      borderWidth: 1
    };
  });

  return { labels, datasets };
}

class App extends Component {
  constructor(props) {
    super(props);
    const data = decodeURIComponent(
      new URLSearchParams(window.location.search).get('q')
    );
    console.log(data);
    this.state = {
      width: null,
      height: null,
      data: JSON.parse(data) || datafromnajati
    };
  }

  componentDidMount() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => this.doWork()
    );
  }

  doWork() {
    const { labels, datasets } = parseData(this.state.data);

    if (this.myChart) {
      this.myChart.destroy();
    }

    this.myChart = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data: {
        labels,
        datasets
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

  render() {
    return (
      <React.Fragment>
        {this.state.width ? (
          <canvas
            id="myChart"
            width={this.state.width}
            height={this.state.height}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
