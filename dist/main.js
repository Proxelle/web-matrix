/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"type\\\":1,\\\"day\\\":5,\\\"money\\\":12300},{\\\"type\\\":2,\\\"day\\\":10,\\\"money\\\":10},{\\\"type\\\":3,\\\"day\\\":1,\\\"money\\\":33450},{\\\"type\\\":4,\\\"day\\\":17,\\\"money\\\":400},{\\\"type\\\":5,\\\"day\\\":27,\\\"money\\\":1056}]\");\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/data.json\", 1);\n\n\nlet allMoney= []\n\nconst workTypes = [\n    { name: 'Ремонт трубы', value: 1 }, \n    { name: 'Починка телевизора', value: 2 },\n    { name: 'Ремонт компьютера', value: 3 },\n    { name: 'Ремонт холодильника', value: 4 },\n    { name: 'Починка стиральной машины', value: 5 }\n]\n\nconst months = ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август','Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']\n\n_data_json__WEBPACK_IMPORTED_MODULE_0__.forEach(item => allMoney.push(item))\ndocument.addEventListener('DOMContentLoaded', () => {\n    render()\n})\n\nfunction render () { \n    const currentDate = new Date\n    const deysOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()\n\n    for (let i = 0; i <= deysOfMonth; i++) {\n        const rowDate = document.getElementById('row-date')\n        const rowSum = document.getElementById('row-sum')\n\n        addCellDate(rowDate, i, currentDate)\n        addCellWork(i)\n        addCellSum(rowSum, i)            \n    }\n    addColumnSumWorks()  \n    addValuesInInputs()\n}\n\nfunction addCellDate (rowDate, i, currentDate) {    \n    const createdTd = document.createElement('td')\n    if (!i) createdTd.innerHTML = `Текущий месяц: ${months[currentDate.getMonth()]}` \n    else createdTd.innerHTML = i\n    rowDate.appendChild(createdTd)\n}\n\nfunction addCellWork (i) {\n    workTypes.forEach(item => {\n        const row = document.getElementById(`row${item.value}`)\n        const createdTd = document.createElement('td')\n\n        if (!i) createdTd.innerHTML = item.name\n        else {\n            const createdInput = document.createElement('input')\n            createdInput.setAttribute('id', `input-${item.value}-${i}`)\n            createdInput.onchange = changeInput.bind({ type: item.value, day: i })\n            createdInput.oninput = validateInput\n            createdTd.appendChild(createdInput)\n        }\n        row.appendChild(createdTd)                 \n    })\n}\n\nfunction addCellSum (addCellSum, i) {\n    const createdTd = document.createElement('td')\n    const sum = allMoney.reduce((sum, item) => item.day === i ? sum + item.money : sum, 0)\n    createdTd.setAttribute('id', `day-sum-${i}`)\n    if (!i) createdTd.innerHTML = 'Сумма за день:'  \n    else createdTd.innerHTML = sum\n    addCellSum.appendChild(createdTd)\n}\n\nfunction addColumnSumWorks () {\n    workTypes.forEach((item, i) => {\n        const row = document.getElementById(`row${item.value}`)\n        const createdTd = document.createElement('td')\n        const sum = allMoney.reduce((sum, item) => item.type === i + 1 ? sum + item.money : sum, 0)\n        createdTd.setAttribute('id', `work-sum-${item.value}`)\n        createdTd.innerHTML = sum        \n        row.appendChild(createdTd)                 \n    })\n    const rowDate = document.getElementById('row-date')\n    const createdTd = document.createElement('td')\n    createdTd.innerHTML = 'Сумма по типу работы:'\n    rowDate.appendChild(createdTd) \n}\n\nfunction addValuesInInputs () {\n    allMoney.forEach(item => {\n        let input = document.getElementById(`input-${item.type}-${item.day}`)\n        input.value = item.money\n    })\n}\n\nfunction changeInput (e) {\n    let value = Number(e.target.value)\n    if (!Number.isInteger(value)) {\n        e.target.value = (+e.target.value).toFixed(2)\n        value = Number(e.target.value)\n    } else {\n        e.target.value = (+e.target.value).toFixed(0)\n        // value = Number(e.target.value)    \n    }\n    const type = this.type\n    const day =  this.day\n    const index = allMoney.findIndex(item => item.type === type && item.day === day)\n\n    if (value && index > -1) allMoney[index].money = value\n    else if (value) allMoney.push({ type, day: day, money: value })\n    else allMoney.splice(index, 1)\n\n    renderSum({ type, day })\n}\n\nfunction validateInput() {\n    this.value = this.value.replace(/[^\\d.]/g, '')\n  }\n\nfunction renderSum ({ type, day }) {\n    let sumDay = 0\n    let sumWorkType = 0\n\n    allMoney.forEach(item =>{\n        if (item.day === day) sumDay += item.money\n        if (item.type === type) sumWorkType += item.money\n    })\n\n    const sumDayElement = document.getElementById(`day-sum-${day}`)\n    const sumWorkTypeElement = document.getElementById(`work-sum-${type}`)\n\n    sumDayElement.innerHTML = Number.isInteger(sumDay) ? sumDay : sumDay.toFixed(2)\n    sumWorkTypeElement.innerHTML = Number.isInteger(sumWorkType) ? sumWorkType : sumWorkType.toFixed(2)\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });