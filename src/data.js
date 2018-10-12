export default Object.freeze({
  quincy_building: {
    unthrottle: { mean: 1583.0, median: 1551.0 },
    throttle_everything: { mean: 25987.2, median: 25455.0 },
    throttle_cpu: { mean: 4433.2, median: 4388.0 },
    throttle_bw: { mean: 12924.11, median: 13111.5 },
    throttle_latency: { mean: 7251.0, median: 7238.0 },
    throttle_packet_loss: { mean: 1715.56, median: 1701.5 }
  },
  quincy_empty: {
    unthrottle: { mean: 960.67, median: 957.5 },
    throttle_everything: { mean: 9451.4, median: 8762.0 },
    throttle_cpu: { mean: 2560.5, median: 2560.5 },
    throttle_bw: { mean: 4967.11, median: 4104.5 },
    throttle_latency: { mean: 5877.44, median: 5915.0 },
    throttle_packet_loss: { mean: 1012.67, median: 985.5 }
  },
  next_building: {
    unthrottle: { mean: 344.56, median: 346.5 },
    throttle_everything: { mean: 11795.2, median: 11341.0 },
    throttle_cpu: { mean: 788.5, median: 775.0 },
    throttle_bw: { mean: 3627.7, median: 3606.5 },
    throttle_latency: { mean: 4311.89, median: 4284.5 },
    throttle_packet_loss: { mean: 546.11, median: 559.0 }
  },
  next_empty: {
    unthrottle: { mean: 106.44, median: 107.0 },
    throttle_everything: { mean: 2999.0, median: 3002.0 },
    throttle_cpu: { mean: 294.44, median: 294.0 },
    throttle_bw: { mean: 1331.11, median: 1346.5 },
    throttle_latency: { mean: 2161.0, median: 2184.5 },
    throttle_packet_loss: { mean: 110.78, median: 109.5 }
  },
  vanilla_building: {
    unthrottle: { mean: 262.9, median: 245.5 },
    throttle_everything: { mean: 6783.5, median: 6001.0 },
    throttle_cpu: { mean: 391.44, median: 407.5 },
    throttle_bw: { mean: 2134.44, median: 2137.0 },
    throttle_latency: { mean: 3375.44, median: 3371.0 },
    throttle_packet_loss: { mean: 294.89, median: 311.0 }
  },
  vanilla_empty: {
    unthrottle: { mean: 19.1, median: 19.0 },
    throttle_everything: { mean: 807.44, median: 807.0 },
    throttle_cpu: { mean: 37.4, median: 37.0 },
    throttle_bw: { mean: 49.7, median: 50.0 },
    throttle_latency: { mean: 768.11, median: 768.0 },
    throttle_packet_loss: { mean: 22.8, median: 24.0 }
  }
});
