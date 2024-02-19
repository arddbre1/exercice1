"use strict";
exports.__esModule = true;
function extractDates(customer) {
    var _a;
    var listOfPeriods = (_a = customer.ListOfPeriods) === null || _a === void 0 ? void 0 : _a.trim();
    if (!listOfPeriods || listOfPeriods === 'NUlL') {
        return [];
    }
    var periods = listOfPeriods.split('|').map(function (period) { return period.trim(); });
    var dates = [];
    for (var _i = 0, periods_1 = periods; _i < periods_1.length; _i++) {
        var period = periods_1[_i];
        var _b = period.split('-').map(function (date) { return date.trim(); }), startDate = _b[0], endDate = _b[1];
        if (startDate.length !== 10 || endDate.length !== 10) {
            return ['string length is invalid'];
        }
        dates.push({ startDate: startDate, endDate: endDate });
    }
    return dates;
}
exports["default"] = extractDates;
