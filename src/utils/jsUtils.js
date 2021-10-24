"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.toggleListItem = exports.sortBy = exports.difference = void 0;
// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
function difference() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (a, b) { return a.filter(function (c) { return !b.includes(c); }); });
}
exports.difference = difference;
// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
function sortBy(array, getter) {
    function compareBy(getter) {
        return function (a, b) {
            return getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0;
        };
    }
    var sortedArray = __spreadArray([], array, true);
    sortedArray.sort(compareBy(getter));
    return sortedArray;
}
exports.sortBy = sortBy;
function toggleListItem(list, item) {
    var itemIndex = list.indexOf(item);
    if (itemIndex === -1) {
        return list.concat(item);
    }
    else {
        var newList = __spreadArray([], list, true);
        newList.splice(itemIndex, 1);
        return newList;
    }
}
exports.toggleListItem = toggleListItem;
