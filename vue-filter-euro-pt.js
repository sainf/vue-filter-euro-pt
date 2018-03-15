;(function () {

  var toEuroPT = {}

  toEuroPT.install = function (Vue) {

    /**
     *
     * @param {Number} number
     * @param {Number} decimal
     *
     */

     Vue.filter('toEuroPT', function (number, decimals = 2) {
        return parseFloat(number).toFixed(decimals).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") + ' €'
     })
  }

  if (typeof exports == "object") {
    module.exports = prettyBytes
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return prettyBytes })
  } else if (window.Vue) {
    window.prettyBytes = prettyBytes
    Vue.use(prettyBytes)
  }

})()
