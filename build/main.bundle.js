'use strict';

var _mortgage = require('./mortgage');

var mortgage = _interopRequireWildcard(_mortgage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

document.getElementById('calcBtn').addEventListener('click', function () {
  "use strict";

  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;

  var _mortgage$calculateMo = mortgage.calculateMonthlyPayment(principal, years, rate);

  var monthlyPayment = _mortgage$calculateMo.monthlyPayment;
  var monthlyRate = _mortgage$calculateMo.monthlyRate;

  document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
});
