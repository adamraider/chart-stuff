export default Object.freeze({
  quincy_building: {
    unthrottle: { mean: 1654.7, median: 1664.4 },
    throttled_everything: { mean: 23937.53, median: 22571.6 },
    throttle_cpu: { mean: 7408.39, median: 7419.55 },
    throttle_bw: { mean: 12081.94, median: 11511.25 },
    throttle_latency: { mean: 12911.07, median: 12876.0 }
  },
  quincy_empty: {
    unthrottle: { mean: 922.07, median: 927.95 },
    throttled_everything: { mean: 12031.13, median: 11970.8 },
    throttle_cpu: { mean: 4093.1, median: 4107.65 },
    throttle_bw: { mean: 14906.2, median: 14921.05 },
    throttle_latency: { mean: 6808.14, median: 6829.0 }
  },
  next_building: {
    unthrottle: { mean: 310.56, median: 308.2 },
    throttled_everything: { mean: 8656.03, median: 8537.75 },
    throttle_cpu: { mean: 1014.74, median: 1014.05 },
    throttle_bw: { mean: 2245.87, median: 2252.85 },
    throttle_latency: { mean: 4845.23, median: 4840.4 }
  },
  next_empty: {
    unthrottle: { mean: 17.67, median: 18.0 },
    throttled_everything: { mean: 4105.64, median: 4094.45 },
    throttle_cpu: { mean: 401.82, median: 400.8 },
    throttle_bw: { mean: 36.0, median: 36.0 },
    throttle_latency: { mean: 1026.5, median: 1026.5 }
  },
  vanilla_building: {
    unthrottle: { mean: 61.44, median: 49.0 },
    throttled_everything: { mean: 3193.11, median: 3173.0 },
    throttle_cpu: { mean: 368.79, median: 369.6 },
    throttle_bw: { mean: 200.22, median: 200.5 },
    throttle_latency: { mean: 3051.56, median: 3060.5 }
  },
  vanilla_empty: {
    unthrottle: { mean: 21.44, median: 21.0 },
    throttled_everything: { mean: 1081.5, median: 1081.0 },
    throttle_cpu: { mean: 41.11, median: 41.0 },
    throttle_bw: { mean: 58.0, median: 58.0 },
    throttle_latency: { mean: 1028.78, median: 1028.5 }
  }
});
