;(function () {

  var toEuroPT = {}

  toEuroPT.install = function (Vue) {

    /**
     * @param {Number} number
     * @param {Number} decimal 
     */

     Vue.filter('toEuroPT', function (number, decimals) {
        decimals = decimals || 2
        return parseFloat(number).toFixed(decimals).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") + ' €'
     })
  }

  if (typeof exports == "object") {
    module.exports = toEuroPT
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return toEuroPT })
  } else if (window.Vue) {
    window.toEuroPT = toEuroPT
    Vue.use(toEuroPT)
  }

})()
