const kmeans = require('kmeans-node');
const _ = require('lodash');

const cluster = (array, means) => {
  var mapArrToObj = _.map(array, item => {
    return {
      x: item.latitude,
      y: item.longitude,
      data: item.distance
    }
  });
  var object = kmeans.object(mapArrToObj, means);
  return object;
}

module.exports = cluster;