(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <mat-sidenav-container class=\"example-container\" >\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n                (closed)=\"events.push('close!')\">\n  <div class=\"margin-div\">\n     <p> <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Output Image Width\" value=\"1000\" #outputImageWidth>\n        </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field #colorScheme>\n        <mat-label>Color Scheme</mat-label>\n        <select matNativeControl [(ngModel)]=\"selectedColorScheme\">\n          <option value=\"black-white\">Black on White</option>\n          <option value=\"white-black\">White on Black</option>\n          <option value=\"sepia\">Sepia</option>\n          <option value=\"sepia-inverse\">Sepia Inverse</option>\n          <option value=\"cool-grey\">Cool Grey</option>\n          <option value=\"cool-grey-inverse\">Cool Grey Inverse</option>\n        </select>\n      </mat-form-field>      \n    </p>\n  <p>\n        <mat-slider #lineThickness min=\"1\" max=\"20\" step=\"1\" value=\"3\"></mat-slider>Line Thickness\n    </p>\n    <p>\n      Min Cell Size: <mat-slider #minCellSize min=\"3\" max=\"100\" step=\"1\" value=\"3\"></mat-slider>\n    </p>\n    <p>\n        Cell Scale: <mat-slider #cellScale min=\"-8\" max=\"8\" step=\"1\" value=\"-3\"></mat-slider>\n    </p>\n    <p>\n        <button mat-raised-button color=\"primary\" (click)=\"onRegenerateClicked()\">Regenerate</button>\n    </p>\n    <p>\n      <button mat-raised-button color=\"primary\" (click)=\"onChoosePicClicked()\">Choose Picture...</button>\n  </p>\n  <p>\n      <input #chooseFileInput style=\"display:none\" type=\"file\" accept=\"image/png, image/jpeg\" (change)=\"onImageChange($event)\">\n    </p>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <img #workingGif style=\"display:none\" src=\"./assets/images/working2.gif\">\n    <canvas #myCanvas width=\"1000\" height=\"1000\" (click)=\"onToggleSideNav()\"></canvas>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"button-comp\" (click)=\"onClick()\">{{text}}</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/num-input/num-input.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/num-input/num-input.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <span>Label:</span>\n    <input  class=\"numinput\" type=\"text\" width=\"75px\"/>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    height:100%;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.margin-div {\r\n    margin: 10px 10px 10px 10px;\r\n}\r\n\r\n.item-settings {\r\n    flex: 1 200px;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    background-color: lightgray;\r\n}\r\n\r\n#testSlider {\r\n    width: 100%;\r\n}\r\n\r\n.testSlider {\r\n    width: 100%;\r\n}\r\n\r\n.divider {\r\n    background-color: grey;\r\n    flex: 1 5px;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n\r\n}\r\n\r\n.item-view {\r\n    margin-left: 10px;\r\n    flex: 1 auto;\r\n    height: 100%;\r\n}\r\n\r\n.example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.example-events {\r\n    width: 300px;\r\n    height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #555;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWRpdiB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVtLXNldHRpbmdzIHtcclxuICAgIGZsZXg6IDEgMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuI3Rlc3RTbGlkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXN0U2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgZmxleDogMSA1cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuXHJcbn1cclxuLml0ZW0tdmlldyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZsZXg6IDEgYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZXZlbnRzIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let White = "#FFFFFF";
let Black = "#000000";
class Settings {
    constructor(width, height, lineThickness, cellScale, minCellSize, invertSampling, foregroundColor, backgroundColor) {
        this.width = width;
        this.height = height;
        this.lineThickness = lineThickness;
        this.cellScale = cellScale;
        this.minCellSize = minCellSize;
        this.invertSampling = invertSampling;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(other) {
        let dx = other.x - this.x;
        let dy = other.y - this.y;
        return Math.sqrt((dx * dx) + (dy * dy));
    }
    toString() { return `(` + this.x + `,` + this.y + `)`; }
}
function findIntersectionAtY(y, p1, p2) {
    if (p1.y == p2.y)
        return NaN;
    let pt1 = p1, pt2 = p2;
    if (p1.y > p2.y) {
        pt2 = p1;
        pt1 = p2;
    }
    if (y < pt1.y)
        return NaN;
    if (y > pt2.y)
        return NaN;
    let t = (y - pt1.y) / (pt2.y - pt1.y);
    return pt1.x + t * (pt2.x - pt1.x);
}
class Quad {
    constructor(p1, p2, p3, p4) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }
    stroke(context, color) {
        //context.strokeStyle = color;
        context.beginPath();
        context.moveTo(this.p1.x, this.p1.y);
        context.lineTo(this.p2.x, this.p2.y);
        context.lineTo(this.p3.x, this.p3.y);
        context.lineTo(this.p4.x, this.p4.y);
        context.lineTo(this.p1.x, this.p1.y);
        context.stroke();
    }
    area() {
        function triArea(side1length, side2length, side3length) {
            var p = (side1length + side2length + side3length) / 2;
            var a = Math.sqrt(p * (p - side1length) * (p - side2length) * (p - side3length));
            return a;
        }
        let s1Length = this.p1.distance(this.p2);
        let s2Length = this.p2.distance(this.p3);
        let bisectLength = this.p1.distance(this.p3);
        let s3Length = this.p3.distance(this.p4);
        let s4Length = this.p4.distance(this.p1);
        return triArea(s1Length, s2Length, bisectLength) + triArea(s3Length, s4Length, bisectLength);
    }
    scale(sx, sy) {
        return new Quad(new Point(this.p1.x * sx, this.p1.y * sy), new Point(this.p2.x * sx, this.p2.y * sy), new Point(this.p3.x * sx, this.p3.y * sy), new Point(this.p4.x * sx, this.p4.y * sy));
    }
    minY() {
        return Math.min(this.p1.y, Math.min(this.p2.y, Math.min(this.p3.y, this.p4.y)));
    }
    maxY() {
        return Math.max(this.p1.y, Math.max(this.p2.y, Math.max(this.p3.y, this.p4.y)));
    }
    xSpan(y) {
        let xIntersections = [];
        // find which edges if any intersect the given Y value
        let intersection = findIntersectionAtY(y, this.p1, this.p2);
        if (!Number.isNaN(intersection))
            xIntersections.push(intersection);
        intersection = findIntersectionAtY(y, this.p2, this.p3);
        if (!Number.isNaN(intersection))
            xIntersections.push(intersection);
        intersection = findIntersectionAtY(y, this.p3, this.p4);
        if (!Number.isNaN(intersection))
            xIntersections.push(intersection);
        intersection = findIntersectionAtY(y, this.p4, this.p1);
        if (!Number.isNaN(intersection))
            xIntersections.push(intersection);
        if (xIntersections.length < 1)
            return [];
        if (xIntersections.length < 2)
            return [xIntersections[0], xIntersections[0]];
        if (xIntersections[0] < xIntersections[1])
            return [xIntersections[0], xIntersections[1]];
        return [xIntersections[1], xIntersections[0]];
    }
    toString() { return `[` + this.p1.toString() + `,` + this.p2.toString() + `,` + this.p3.toString() + `,` + this.p4.toString() + `]`; }
}
class Splinter {
    constructor(sampler) {
        this.quads = [];
        this.slantAmount = .3;
        this.minQuadArea = 30;
        this.cellScale = 0;
        this.sampler = sampler;
    }
    stroke(context, color) {
        context.strokeStyle = color;
        this.quads.forEach(function strokeAQuad(q) {
            q.stroke(context, color);
        }.bind(this));
    }
    findSplit(p1, p2, t) {
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        return new Point(p1.x + (t * dx), p1.y + (t * dy));
    }
    splitQuad(q) {
        let points = [];
        let area = q.area();
        if (area < this.minQuadArea) {
            return [q];
        }
        let value = this.sampler.sampleQuad(q); // this gives us a greyscale number from 0 to 255 of how dark an area should be
        let luminance = (value * value * value) / 50000; // since we're dealing with how dark a 2d area should be we'll square the value and dived by 255 to get a nice curve
        let scaledArea = area / this.cellScale;
        if (scaledArea < luminance) {
            return [q];
        }
        let t1 = Math.random() * this.slantAmount + ((1 - this.slantAmount) / 2);
        let t2 = Math.random() * this.slantAmount + ((1 - this.slantAmount) / 2);
        let l1 = q.p1.distance(q.p2) + q.p3.distance(q.p4);
        let l2 = q.p2.distance(q.p3) + q.p4.distance(q.p1);
        if (l1 < l2) { // split the quad vertically
            let splitPoint1 = this.findSplit(q.p2, q.p3, t1);
            let splitPoint2 = this.findSplit(q.p4, q.p1, t2);
            let q1h = new Quad(q.p1, q.p2, splitPoint1, splitPoint2);
            let q2h = new Quad(splitPoint2, splitPoint1, q.p3, q.p4);
            return [q1h, q2h];
        }
        else { // split the quad horizonatally
            let splitPoint1 = this.findSplit(q.p1, q.p2, t1);
            let splitPoint2 = this.findSplit(q.p3, q.p4, t2);
            ;
            let q1v = new Quad(q.p1, splitPoint1, splitPoint2, q.p4);
            let q2v = new Quad(splitPoint1, q.p2, q.p3, splitPoint2);
            return [q1v, q2v];
        }
    }
    splitAll() {
        let oldQuads = this.quads;
        this.quads = [];
        oldQuads.forEach(function splitIt(q) {
            let newQuads = this.splitQuad(q);
            this.quads.push(newQuads[0]);
            if (newQuads.length > 1) {
                this.quads.push(newQuads[1]);
            }
        }.bind(this));
    }
    addQuad(q) {
        this.quads.push(q);
    }
}
function fillCanvas(ctx, cWidth, cHeight, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cWidth, cHeight);
}
function Clamp(value, min, max) {
    let clamped = value < min ? min : value;
    clamped = clamped > max ? max : value;
    return clamped;
}
class Sampler {
    constructor(ctx, sourcewidth, sourceheight, targetwidth, targetheight) {
        this.greyscale = [];
        this.sourcewidth = 0;
        this.sourceheight = 0;
        this.targetwidth = 0;
        this.targetheight = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.invert = false;
        this.sourcewidth = sourcewidth;
        this.sourceheight = sourceheight;
        this.targetwidth = targetwidth;
        this.targetheight = targetheight;
        this.scaleX = this.sourcewidth / this.targetwidth;
        this.scaleY = this.sourceheight / this.targetheight;
        // convert to greyscale
        let imageData = ctx.getImageData(0, 0, sourcewidth, sourceheight);
        let data = imageData.data;
        let pixCount = sourcewidth * sourceheight;
        let index = 0;
        for (let pix = 0; pix < pixCount; pix++) {
            let value = data[index++] * .3 + data[index++] * .59 + data[index++] * .11;
            this.greyscale.push(value);
            index++; // skip the alpha
        }
    }
    sampleQuad(targetQuad) {
        // need to bounds check against image
        // need to figure out Y range
        let sourceQuad = targetQuad.scale(this.scaleX, this.scaleY);
        let minY = sourceQuad.minY();
        let maxY = sourceQuad.maxY();
        let total = 0;
        let count = 0;
        // scan from top to bottom of Y range
        for (let y = minY; y <= maxY; y++) {
            let xSpan = sourceQuad.xSpan(y);
            let yRow = Math.floor(y);
            let xCol = Math.floor(xSpan[0]);
            if (xSpan.length == 1) { // this probably isn't necessary, but the span checking code theoritically could return one intersection so...
                let index = yRow * this.sourcewidth + xCol;
                total += this.greyscale[index];
                count++;
            }
            else if (xSpan.length == 2) {
                length = xSpan[1] - xSpan[0];
                if (length < 1)
                    length = 1;
                let index = yRow * this.sourcewidth + xCol;
                // add up value of each pixel and also count number of pixels 
                while (length > 0) {
                    total += this.greyscale[index++];
                    count++;
                    length--;
                }
            }
            else {
                console.log("huh?");
            }
        }
        // return the average pixel value
        if (count == 0) {
            return 1;
        }
        let result = total / count;
        return this.invert ? 255 - result : result;
    }
}
function Render(ctx, sampler, settings) {
    fillCanvas(ctx, settings.width, settings.height, settings.backgroundColor);
    let qw = settings.width / 3;
    let qh = settings.height / 3;
    sampler.invert = settings.invertSampling;
    let splinter = new Splinter(sampler);
    { // full quad
        let q1 = new Quad(new Point(10, 10), new Point(settings.width - 10, 10), new Point(settings.width - 10, settings.height - 10), new Point(10, settings.height - 10));
        splinter.addQuad(q1);
    }
    splinter.minQuadArea = settings.minCellSize;
    splinter.slantAmount = .2; // Clamp(.5,.05,.49);
    let linearScale = settings.cellScale + Math.log2(Math.floor(settings.width / 500));
    splinter.cellScale = Math.pow(2, linearScale);
    let iterations = 24;
    for (let i = 0; i < iterations; i++) {
        splinter.splitAll();
    }
    splinter.stroke(ctx, settings.foregroundColor);
}
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'splinter';
        this.events = [];
        this.width = 1000;
        this.height = 1000;
        this.image = new Image;
        this.Regenerate = "Regenerate";
        this.selectedColorScheme = "black-white";
    }
    generateImage() {
        this.targetCanvas.nativeElement.style.display = "none";
        this.workingGif.nativeElement.style.display = "block";
        setTimeout(() => {
            let canvas = document.createElement('canvas');
            canvas.width = this.image.width;
            canvas.height = this.image.height;
            let ratio = this.image.height / this.image.width;
            let potentialWidth = parseFloat(this.outputImageWidth.nativeElement.value);
            if (!isNaN(potentialWidth) && potentialWidth > 100 && potentialWidth < 10000) {
                this.width = potentialWidth;
            }
            this.height = this.width * ratio;
            this.targetCanvas.nativeElement.width = this.width;
            this.targetCanvas.nativeElement.height = this.height;
            let context = canvas.getContext('2d');
            context.drawImage(this.image, 0, 0);
            let sampler = new Sampler(context, canvas.width, canvas.height, this.width, this.height);
            let ctx = this.targetCanvas.nativeElement.getContext('2d');
            ctx.lineWidth = (+this.lineThickness.value) / 10;
            let invert = false;
            let foregroundColor = Black;
            let backgroundColor = White;
            switch (this.selectedColorScheme) {
                case "black-white": {
                    break;
                }
                case "white-black": {
                    invert = true;
                    foregroundColor = White;
                    backgroundColor = Black;
                    break;
                }
                case "sepia": {
                    foregroundColor = "#704214";
                    backgroundColor = White;
                    break;
                }
                case "sepia-inverse": {
                    invert = true;
                    foregroundColor = White;
                    backgroundColor = "#704214";
                    break;
                }
                case "cool-grey": {
                    foregroundColor = "#000020";
                    backgroundColor = "#E0E0FF";
                    break;
                }
                case "cool-grey-inverse": {
                    invert = true;
                    foregroundColor = "#E0E0FF";
                    backgroundColor = "#000020";
                    break;
                }
            }
            let settings = new Settings(this.width, this.height, this.lineThickness.value, this.cellScale.value, this.minCellSize.value, invert, foregroundColor, backgroundColor);
            Render(ctx, sampler, settings);
            this.targetCanvas.nativeElement.style.display = "block";
            this.workingGif.nativeElement.style.display = "none";
        }, 100);
    }
    onRegenerateClicked() {
        this.generateImage();
    }
    onChoosePicClicked() {
        this.chooseFileInput.nativeElement.click();
    }
    onToggleSideNav() {
        this.opened = !this.opened;
    }
    onImageChange(event) {
        var reader = new FileReader();
        let imagePath = event.target.files;
        reader.readAsDataURL(imagePath[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            this.image.src = this.imgURL;
        };
    }
    ngOnInit() {
        let canvas = this.targetCanvas;
        canvas.nativeElement.width = this.width;
        canvas.nativeElement.height = this.height;
        this.image.onload = function () {
            this.generateImage();
        }.bind(this);
        this.image.src = "/assets/images/natalie.jpg";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas', { static: true })
], AppComponent.prototype, "targetCanvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('workingGif', { static: true })
], AppComponent.prototype, "workingGif", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chooseFileInput', { static: true })
], AppComponent.prototype, "chooseFileInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('outputImageWidth', { static: false })
], AppComponent.prototype, "outputImageWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cellScale', { static: false })
], AppComponent.prototype, "cellScale", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('minCellSize', { static: false })
], AppComponent.prototype, "minCellSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineThickness', { static: false })
], AppComponent.prototype, "lineThickness", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _num_input_num_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./num-input/num-input.component */ "./src/app/num-input/num-input.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");

















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _num_input_num_input_component__WEBPACK_IMPORTED_MODULE_5__["NumInputComponent"],
            _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_17__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/button/button.component.css":
/*!*********************************************!*\
  !*** ./src/app/button/button.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-comp {\r\n    margin: 10px;\r\n    border-radius: 2px;\r\n    background-color: white;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border-color: darkgray;\r\n    border-style: solid;\r\n    border-width: 1px ;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.button-comp:hover {\r\n    background-color: #F0F0F0;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb21wIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCA7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ1dHRvbi1jb21wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonComponent = class ButtonComponent {
    constructor() {
        this.onClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        console.log("Clicked");
        this.onClicked.emit(true);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ButtonComponent.prototype, "onClicked", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'button-comp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/button/button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.css */ "./src/app/button/button.component.css")).default]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/app/num-input/num-input.component.css":
/*!***************************************************!*\
  !*** ./src/app/num-input/num-input.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".numinput {\r\n    width: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVtLWlucHV0L251bS1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbnVtLWlucHV0L251bS1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51bWlucHV0IHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/num-input/num-input.component.ts":
/*!**************************************************!*\
  !*** ./src/app/num-input/num-input.component.ts ***!
  \**************************************************/
/*! exports provided: NumInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumInputComponent", function() { return NumInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumInputComponent = class NumInputComponent {
    constructor() { }
    ngOnInit() {
    }
    getValue() {
        return "testing"; // return the real value
    }
};
NumInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'num-input-comp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./num-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/num-input/num-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./num-input.component.css */ "./src/app/num-input/num-input.component.css")).default]
    })
], NumInputComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\ts\splinter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map