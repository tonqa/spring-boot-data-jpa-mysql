function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <a href=\"#\" class=\"navbar-brand\">bezKoder</a>\n    <div class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a routerLink=\"login\" class=\"nav-link\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"tutorials\" class=\"nav-link\">Tutorials</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"add\" class=\"nav-link\">Add</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"upload\" class=\"nav-link\">Upload</a>\n      </li>\n    </div>\n  </nav>\n\n  <div class=\"container mt-3\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-tutorial/add-tutorial.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-tutorial/add-tutorial.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddTutorialAddTutorialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"submit-form\">\n  <div *ngIf=\"!submitted\">\n    <form (ngSubmit)=\"saveTutorial()\" #tutorialForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"title\"\n          required\n          [(ngModel)]=\"tutorial.title\"\n          name=\"title\"\n          #title=\"ngModel\"\n        />\n        <div [hidden]=\"title.valid || title.pristine\" \n          class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input\n          class=\"form-control\"\n          id=\"description\"\n          required\n          [(ngModel)]=\"tutorial.description\"\n          name=\"description\"\n          #description=\"ngModel\"\n        />\n        <div [hidden]=\"description.valid || description.pristine\" \n          class=\"alert alert-danger\">\n          Description is required\n        </div>\n      </div>\n\n      <button type=\"submit\" \n        class=\"btn btn-success\"\n        [disabled]=\"!tutorialForm.form.valid\">\n        Submit\n      </button>\n    </form>\n  </div>\n\n  <div *ngIf=\"submitted\">\n    <h4>You submitted successfully!</h4>\n    <button class=\"btn btn-success\" (click)=\"newTutorial()\">Add</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-page/login-page.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-page/login-page.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginPageLoginPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"submit-form\">\n    <form *ngIf=\"!userInfo\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input \n            type=\"text\"\n            name=\"username\"\n            class=\"form-control\"\n            id=\"username\"\n            [(ngModel)]=\"username\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Passwort</label>\n        <input \n            type=\"password\"\n            name=\"password\"\n            class=\"form-control\"\n            id=\"password\"\n            [(ngModel)]=\"password\"\n        />\n      </div>\n      <button type=\"submit\" \n        class=\"btn btn-success\">\n        Login\n      </button>\n      {{ loggedInAs }}\n    </form>\n\n    <div *ngIf=\"userInfo\">\n      <h4>You are logged in as {{ userInfo.username }}</h4>\n      <button type=\"button\" \n        class=\"btn btn-danger\"\n        (click)=\"logout()\">\n        Logout\n      </button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-details/tutorial-details.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-details/tutorial-details.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialDetailsTutorialDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"currentTutorial\" class=\"edit-form\">\n  <h4>Tutorial</h4>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"title\"\n        [(ngModel)]=\"currentTutorial.title\"\n        name=\"title\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"description\"\n        [(ngModel)]=\"currentTutorial.description\"\n        name=\"description\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label><strong>Status:</strong></label>\n      {{ currentTutorial.published ? \"Published\" : \"Pending\" }}\n    </div>\n  </form>\n\n  <button\n    class=\"badge badge-primary mr-2\"\n    *ngIf=\"currentTutorial.published\"\n    (click)=\"updatePublished(false)\"\n  >\n    UnPublish\n  </button>\n  <button\n    *ngIf=\"!currentTutorial.published\"\n    class=\"badge badge-primary mr-2\"\n    (click)=\"updatePublished(true)\"\n  >\n    Publish\n  </button>\n\n  <button class=\"badge badge-danger mr-2\" (click)=\"deleteTutorial()\">\n    Delete\n  </button>\n\n  <button type=\"submit\" class=\"badge badge-success\" (click)=\"updateTutorial()\">\n    Update\n  </button>\n  <p>{{ message }}</p>\n</div>\n\n<div *ngIf=\"!currentTutorial\">\n  <br />\n  <p>Cannot access this Tutorial...</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials-list/tutorials-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials-list/tutorials-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialsListTutorialsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list row\">\n  <div class=\"col-md-8\">\n    <div class=\"input-group mb-3\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"Search by title\"\n        [(ngModel)]=\"title\"\n      />\n      <div class=\"input-group-append\">\n        <button\n          class=\"btn btn-outline-secondary\"\n          type=\"button\"\n          (click)=\"searchTitle()\"\n        >\n          Search\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <h4>Tutorials List</h4>\n    <ul class=\"list-group\">\n      <li\n        class=\"list-group-item\"\n        *ngFor=\"let tutorial of tutorials; let i = index\"\n        [class.active]=\"i == currentIndex\"\n        (click)=\"setActiveTutorial(tutorial, i)\"\n      >\n        {{ tutorial.title }}\n        <app-progress-widget \n          [currentValue]=\"tutorial.clicks\" \n          [overallValue]=\"clicks\"\n          (submitted)=\"submitted($event, i)\"></app-progress-widget>\n      </li>\n    </ul>\n\n    <button class=\"m-3 btn btn-sm btn-danger\" (click)=\"removeAllTutorials()\">\n      Remove All\n    </button>\n  </div>\n  <div class=\"col-md-6\">\n    <div *ngIf=\"currentTutorial\">\n      <h4>Tutorial</h4>\n      <div>\n        <label><strong>Title:</strong></label> {{ currentTutorial.title }}\n      </div>\n      <div>\n        <label><strong>Description:</strong></label>\n        {{ currentTutorial.description }}\n      </div>\n      <div>\n        <label><strong>Status:</strong></label>\n        {{ currentTutorial.published ? \"Published\" : \"Pending\" }}\n      </div>\n\n      <a class=\"badge badge-warning\" routerLink=\"/tutorials/{{ currentTutorial.id }}\">\n        Edit\n      </a>\n    </div>\n\n    <div *ngIf=\"!currentTutorial\">\n      <br />\n      <p>Please click on a Tutorial...</p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-files/upload-files.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-files/upload-files.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUploadFilesUploadFilesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"currentFile\" class=\"progress\">\n  <div\n    class=\"progress-bar progress-bar-info progress-bar-striped\"\n    role=\"progressbar\"\n    attr.aria-valuenow=\"{{ progress }}\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    [ngStyle]=\"{ width: progress + '%' }\"\n  >\n    {{ progress }}%\n  </div>\n</div>\n\n<label class=\"btn btn-default\">\n  <input type=\"file\" (change)=\"selectFile($event)\" />\n</label>\n\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">\n  Upload\n</button>\n\n<div class=\"alert alert-light\" role=\"alert\">{{ message }}</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">List of Files</div>\n  <ul\n    class=\"list-group list-group-flush\"\n    *ngFor=\"let file of fileInfos | async\"\n  >\n    <li class=\"list-group-item\">\n      <a href=\"{{ file.url }}\">{{ file.name }}</a>\n    </li>\n  </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/progress-widget/progress-widget.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/progress-widget/progress-widget.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWidgetsProgressWidgetProgressWidgetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"progress\">\n\t<div class=\"progress-bar\" \n\t\trole=\"progressbar\" \n\t\t[style.width.%]=\"100*currentValue/overallValue\" \n\t\taria-valuenow=\"100\" \n\t\taria-valuemin=\"0\" \n\t\taria-valuemax=\"100\"></div>\n</div>\n<button (click)=\"clicked($event)\">Submit</button>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/tutorials-list/tutorials-list.component */
    "./src/app/components/tutorials-list/tutorials-list.component.ts");
    /* harmony import */


    var _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/tutorial-details/tutorial-details.component */
    "./src/app/components/tutorial-details/tutorial-details.component.ts");
    /* harmony import */


    var _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/add-tutorial/add-tutorial.component */
    "./src/app/components/add-tutorial/add-tutorial.component.ts");
    /* harmony import */


    var _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/upload-files/upload-files.component */
    "./src/app/components/upload-files/upload-files.component.ts");
    /* harmony import */


    var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login-page/login-page.component */
    "./src/app/components/login-page/login-page.component.ts");
    /* harmony import */


    var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/authentication.guard */
    "./src/app/services/authentication.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'tutorials',
      pathMatch: 'full'
    }, {
      path: 'tutorials',
      component: _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_3__["TutorialsListComponent"]
    }, {
      path: 'tutorials/:id',
      component: _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_4__["TutorialDetailsComponent"]
    }, {
      path: 'add',
      component: _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["AddTutorialComponent"]
    }, {
      path: 'upload',
      component: _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_6__["UploadFilesComponent"],
      canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"]]
    }, {
      path: 'login',
      component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Angular8ClientCrud';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-tutorial/add-tutorial.component */
    "./src/app/components/add-tutorial/add-tutorial.component.ts");
    /* harmony import */


    var _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/tutorial-details/tutorial-details.component */
    "./src/app/components/tutorial-details/tutorial-details.component.ts");
    /* harmony import */


    var _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/tutorials-list/tutorials-list.component */
    "./src/app/components/tutorials-list/tutorials-list.component.ts");
    /* harmony import */


    var _widgets_progress_widget_progress_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./widgets/progress-widget/progress-widget.component */
    "./src/app/widgets/progress-widget/progress-widget.component.ts");
    /* harmony import */


    var _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/upload-files/upload-files.component */
    "./src/app/components/upload-files/upload-files.component.ts");
    /* harmony import */


    var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/token-interceptor */
    "./src/app/services/token-interceptor.ts");
    /* harmony import */


    var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/login-page/login-page.component */
    "./src/app/components/login-page/login-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_add_tutorial_add_tutorial_component__WEBPACK_IMPORTED_MODULE_8__["AddTutorialComponent"], _components_tutorial_details_tutorial_details_component__WEBPACK_IMPORTED_MODULE_9__["TutorialDetailsComponent"], _components_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_10__["TutorialsListComponent"], _widgets_progress_widget_progress_widget_component__WEBPACK_IMPORTED_MODULE_11__["ProgressWidgetComponent"], _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_12__["UploadFilesComponent"], _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-tutorial/add-tutorial.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/add-tutorial/add-tutorial.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddTutorialAddTutorialComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".submit-form {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdHV0b3JpYWwvYWRkLXR1dG9yaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtdHV0b3JpYWwvYWRkLXR1dG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWZvcm0ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/add-tutorial/add-tutorial.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/add-tutorial/add-tutorial.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddTutorialComponent */

  /***/
  function srcAppComponentsAddTutorialAddTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTutorialComponent", function () {
      return AddTutorialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tutorial.service */
    "./src/app/services/tutorial.service.ts");
    /* harmony import */


    var src_app_services_tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/tutorial */
    "./src/app/services/tutorial.ts");

    var AddTutorialComponent =
    /*#__PURE__*/
    function () {
      function AddTutorialComponent(tutorialService) {
        _classCallCheck(this, AddTutorialComponent);

        this.tutorialService = tutorialService;
        this.tutorial = new src_app_services_tutorial__WEBPACK_IMPORTED_MODULE_3__["Tutorial"]('', '', false);
        this.submitted = false;
      }

      _createClass(AddTutorialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveTutorial",
        value: function saveTutorial() {
          var _this = this;

          var data = new src_app_services_tutorial__WEBPACK_IMPORTED_MODULE_3__["Tutorial"](this.tutorial.title, this.tutorial.description, this.tutorial.published);
          this.tutorialService.create(data).subscribe(function (response) {
            console.log(response);
            _this.submitted = true;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "newTutorial",
        value: function newTutorial() {
          this.submitted = false;
          this.tutorial = new src_app_services_tutorial__WEBPACK_IMPORTED_MODULE_3__["Tutorial"]('', '', false);
        }
      }]);

      return AddTutorialComponent;
    }();

    AddTutorialComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]
      }];
    };

    AddTutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-tutorial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-tutorial.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-tutorial/add-tutorial.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-tutorial.component.css */
      "./src/app/components/add-tutorial/add-tutorial.component.css")).default]
    })], AddTutorialComponent);
    /***/
  },

  /***/
  "./src/app/components/login-page/login-page.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/login-page/login-page.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginPageLoginPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/login-page/login-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/login-page/login-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppComponentsLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(authenticationService, router) {
        _classCallCheck(this, LoginPageComponent);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userInfo = this.authenticationService.getUserInfo();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authenticationService.redirectUrl = null;
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this.authenticationService.doLogin(this.username, this.password).subscribe(function (_) {
            _this2.loggedInAs = 'Logged in as ' + _this2.authenticationService.getUserInfo().username;
            _this2.userInfo = _this2.authenticationService.getUserInfo();

            if (_this2.authenticationService.redirectUrl) {
              // Redirect the user
              _this2.router.navigate([_this2.authenticationService.redirectUrl]);
            }
          }, function (_) {
            return _this2.loggedInAs = 'Login failed';
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.doLogout();
          this.userInfo = null;
          this.loggedInAs = 'Logged out';
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-page/login-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-page.component.css */
      "./src/app/components/login-page/login-page.component.css")).default]
    })], LoginPageComponent);
    /***/
  },

  /***/
  "./src/app/components/tutorial-details/tutorial-details.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/tutorial-details/tutorial-details.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialDetailsTutorialDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-form {\n  max-width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC1kZXRhaWxzL3R1dG9yaWFsLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsLWRldGFpbHMvdHV0b3JpYWwtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtZm9ybSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tutorial-details/tutorial-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/tutorial-details/tutorial-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TutorialDetailsComponent */

  /***/
  function srcAppComponentsTutorialDetailsTutorialDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialDetailsComponent", function () {
      return TutorialDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tutorial.service */
    "./src/app/services/tutorial.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/tutorial */
    "./src/app/services/tutorial.ts");

    var TutorialDetailsComponent =
    /*#__PURE__*/
    function () {
      function TutorialDetailsComponent(tutorialService, route, router) {
        _classCallCheck(this, TutorialDetailsComponent);

        this.tutorialService = tutorialService;
        this.route = route;
        this.router = router;
        this.currentTutorial = null;
        this.message = '';
      }

      _createClass(TutorialDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message = '';
          this.getTutorial(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "getTutorial",
        value: function getTutorial(id) {
          var _this3 = this;

          this.tutorialService.get(id).subscribe(function (data) {
            _this3.currentTutorial = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updatePublished",
        value: function updatePublished(status) {
          var _this4 = this;

          var data = new src_app_services_tutorial__WEBPACK_IMPORTED_MODULE_4__["Tutorial"](this.currentTutorial.title, this.currentTutorial.description, status);
          this.tutorialService.update(this.currentTutorial.id, data).subscribe(function (response) {
            _this4.currentTutorial.published = status;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updateTutorial",
        value: function updateTutorial() {
          var _this5 = this;

          this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe(function (response) {
            console.log(response);
            _this5.message = 'The tutorial was updated successfully!';
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteTutorial",
        value: function deleteTutorial() {
          var _this6 = this;

          this.tutorialService.delete(this.currentTutorial.id).subscribe(function (response) {
            console.log(response);

            _this6.router.navigate(['/tutorials']);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return TutorialDetailsComponent;
    }();

    TutorialDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TutorialDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorial-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorial-details/tutorial-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial-details.component.css */
      "./src/app/components/tutorial-details/tutorial-details.component.css")).default]
    })], TutorialDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/tutorials-list/tutorials-list.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/tutorials-list/tutorials-list.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTutorialsListTutorialsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list {\n  text-align: left;\n  max-width: 750px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbHMtbGlzdC90dXRvcmlhbHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFscy1saXN0L3R1dG9yaWFscy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/tutorials-list/tutorials-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/tutorials-list/tutorials-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TutorialsListComponent */

  /***/
  function srcAppComponentsTutorialsListTutorialsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialsListComponent", function () {
      return TutorialsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tutorial.service */
    "./src/app/services/tutorial.service.ts");

    var TutorialsListComponent =
    /*#__PURE__*/
    function () {
      function TutorialsListComponent(tutorialService) {
        _classCallCheck(this, TutorialsListComponent);

        this.tutorialService = tutorialService;
        this.currentTutorial = null;
        this.currentIndex = -1;
        this.title = '';
        this.clicks = 0;
      }

      _createClass(TutorialsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.retrieveTutorials();
        }
      }, {
        key: "retrieveTutorials",
        value: function retrieveTutorials() {
          var _this7 = this;

          this.tutorialService.getAll().subscribe(function (data) {
            _this7.tutorials = data;

            _this7.tutorials.forEach(function (element) {
              element.clicks = 0;
            });

            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          this.retrieveTutorials();
          this.currentTutorial = null;
          this.currentIndex = -1;
        }
      }, {
        key: "setActiveTutorial",
        value: function setActiveTutorial(tutorial, index) {
          this.currentTutorial = tutorial;
          this.currentIndex = index;
        }
      }, {
        key: "removeAllTutorials",
        value: function removeAllTutorials() {
          var _this8 = this;

          this.tutorialService.deleteAll().subscribe(function (response) {
            console.log(response);

            _this8.refreshList();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "searchTitle",
        value: function searchTitle() {
          var _this9 = this;

          this.tutorialService.findByTitle(this.title).subscribe(function (data) {
            _this9.tutorials = data;
            console.log(data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "submitted",
        value: function submitted(_, index) {
          this.tutorials[index].clicks++;
          this.clicks++;
        }
      }]);

      return TutorialsListComponent;
    }();

    TutorialsListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_tutorial_service__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]
      }];
    };

    TutorialsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tutorials-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorials-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials-list/tutorials-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorials-list.component.css */
      "./src/app/components/tutorials-list/tutorials-list.component.css")).default]
    })], TutorialsListComponent);
    /***/
  },

  /***/
  "./src/app/components/upload-files/upload-files.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/upload-files/upload-files.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUploadFilesUploadFilesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkLWZpbGVzL3VwbG9hZC1maWxlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/upload-files/upload-files.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/upload-files/upload-files.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UploadFilesComponent */

  /***/
  function srcAppComponentsUploadFilesUploadFilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFilesComponent", function () {
      return UploadFilesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/upload-file.service */
    "./src/app/services/upload-file.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UploadFilesComponent =
    /*#__PURE__*/
    function () {
      function UploadFilesComponent(uploadService) {
        _classCallCheck(this, UploadFilesComponent);

        this.uploadService = uploadService;
        this.progress = 0;
        this.message = '';
      }

      _createClass(UploadFilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fileInfos = this.uploadService.getFiles();
        }
      }, {
        key: "selectFile",
        value: function selectFile(event) {
          this.selectedFiles = event.target.files;
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this10 = this;

          this.progress = 0;
          this.currentFile = this.selectedFiles.item(0);
          this.uploadService.upload(this.currentFile).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
              _this10.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
              _this10.message = event.body.message;
              _this10.fileInfos = _this10.uploadService.getFiles();
            }
          }, function (err) {
            _this10.progress = 0;
            _this10.message = 'Could not upload the file!';
            _this10.currentFile = undefined;
          });
          this.selectedFiles = undefined;
        }
      }]);

      return UploadFilesComponent;
    }();

    UploadFilesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_upload_file_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]
      }];
    };

    UploadFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-files',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-files.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-files/upload-files.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-files.component.css */
      "./src/app/components/upload-files/upload-files.component.css")).default]
    })], UploadFilesComponent);
    /***/
  },

  /***/
  "./src/app/services/authentication.guard.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/authentication.guard.ts ***!
    \**************************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppServicesAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");

    var AuthenticationGuard =
    /*#__PURE__*/
    function () {
      function AuthenticationGuard(authenticationService, router) {
        _classCallCheck(this, AuthenticationGuard);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          console.log('AuthGuard#canActivate called');
          var url = state.url;
          return this.forwardToLogin(url);
        }
      }, {
        key: "forwardToLogin",
        value: function forwardToLogin(url) {
          if (this.authenticationService.userInfo != null) {
            return true;
          }

          this.authenticationService.redirectUrl = url;
          return this.router.parseUrl('/login');
        }
      }]);

      return AuthenticationGuard;
    }();

    AuthenticationGuard.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationGuard);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var baseUrl = 'http://localhost:8080/user';

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(cookieService, http) {
        _classCallCheck(this, AuthenticationService);

        this.cookieService = cookieService;
        this.http = http; // initialize token from cookie

        this.basicHeaderValue = cookieService.get('basicHeaderValue');

        if (this.basicHeaderValue) {
          this.checkLogin();
        }
      }

      _createClass(AuthenticationService, [{
        key: "doLogin",
        value: function doLogin(username, password) {
          var _this11 = this;

          this.basicHeaderValue = null;
          this.cookieService.delete('basicHeaderValue');
          this.userInfo = null;
          return this.http.get(baseUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: 'Basic ' + btoa(username + ':' + password)
            })
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            console.log(event);
            _this11.basicHeaderValue = btoa(username + ':' + password); // save token into cookie

            _this11.cookieService.set('basicHeaderValue', _this11.basicHeaderValue);

            _this11.userInfo = event;
          }, function (error) {
            console.log(error);
          }));
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          this.basicHeaderValue = null;
          this.cookieService.delete('basicHeaderValue');
          this.userInfo = null;
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this12 = this;

          return this.http.get(baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            console.log(event);
            _this12.userInfo = event;
          }, function (error) {
            console.log(error);
            _this12.basicHeaderValue = null; // delete token from cookie if not valid

            _this12.cookieService.delete('basicHeaderValue');

            _this12.userInfo = null;
          }));
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return this.userInfo;
        }
      }, {
        key: "getAuthorizationHeader",
        value: function getAuthorizationHeader() {
          if (this.basicHeaderValue) {
            return 'Basic ' + this.basicHeaderValue;
          }

          return null;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/token-interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/token-interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppServicesTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(authenticationService) {
        _classCallCheck(this, TokenInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var authHeader = this.authenticationService.getAuthorizationHeader();

          if (authHeader) {
            request = request.clone({
              setHeaders: {
                Authorization: authHeader
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/services/tutorial.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/tutorial.service.ts ***!
    \**********************************************/

  /*! exports provided: TutorialService */

  /***/
  function srcAppServicesTutorialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialService", function () {
      return TutorialService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var baseUrl = 'http://localhost:8080/api/tutorials';

    var TutorialService =
    /*#__PURE__*/
    function () {
      function TutorialService(http) {
        _classCallCheck(this, TutorialService);

        this.http = http;
      }

      _createClass(TutorialService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(baseUrl);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post(baseUrl, data);
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.put("".concat(baseUrl, "/").concat(id), data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http.delete(baseUrl);
        }
      }, {
        key: "findByTitle",
        value: function findByTitle(title) {
          return this.http.get("".concat(baseUrl, "?title=").concat(title));
        }
      }]);

      return TutorialService;
    }();

    TutorialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TutorialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TutorialService);
    /***/
  },

  /***/
  "./src/app/services/tutorial.ts":
  /*!**************************************!*\
    !*** ./src/app/services/tutorial.ts ***!
    \**************************************/

  /*! exports provided: Tutorial */

  /***/
  function srcAppServicesTutorialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tutorial", function () {
      return Tutorial;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Tutorial = function Tutorial(title, description, published) {
      _classCallCheck(this, Tutorial);

      this.title = title;
      this.description = description;
      this.published = published;
    };
    /***/

  },

  /***/
  "./src/app/services/upload-file.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/upload-file.service.ts ***!
    \*************************************************/

  /*! exports provided: UploadFileService */

  /***/
  function srcAppServicesUploadFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileService", function () {
      return UploadFileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UploadFileService =
    /*#__PURE__*/
    function () {
      function UploadFileService(http) {
        _classCallCheck(this, UploadFileService);

        this.http = http;
        this.baseUrl = 'http://localhost:8080';
      }

      _createClass(UploadFileService, [{
        key: "upload",
        value: function upload(file) {
          var formData = new FormData();
          formData.append('file', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', "".concat(this.baseUrl, "/upload"), formData, {
            reportProgress: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Accept: 'application/json'
            })
          });
          return this.http.request(req);
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          return this.http.get("".concat(this.baseUrl, "/files"), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Accept: 'application/json'
            })
          });
        }
      }]);

      return UploadFileService;
    }();

    UploadFileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UploadFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadFileService);
    /***/
  },

  /***/
  "./src/app/widgets/progress-widget/progress-widget.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/widgets/progress-widget/progress-widget.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWidgetsProgressWidgetProgressWidgetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvcHJvZ3Jlc3Mtd2lkZ2V0L3Byb2dyZXNzLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/widgets/progress-widget/progress-widget.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/widgets/progress-widget/progress-widget.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProgressWidgetComponent */

  /***/
  function srcAppWidgetsProgressWidgetProgressWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressWidgetComponent", function () {
      return ProgressWidgetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressWidgetComponent =
    /*#__PURE__*/
    function () {
      function ProgressWidgetComponent() {
        _classCallCheck(this, ProgressWidgetComponent);

        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProgressWidgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('Current value: ' + this.currentValue);
          console.log('Overall value: ' + this.overallValue);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log('After view init');
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          console.log('After content init');
        }
      }, {
        key: "clicked",
        value: function clicked($event) {
          this.submitted.emit($event);
        }
      }]);

      return ProgressWidgetComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressWidgetComponent.prototype, "currentValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgressWidgetComponent.prototype, "overallValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProgressWidgetComponent.prototype, "submitted", void 0);
    ProgressWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress-widget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress-widget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/progress-widget/progress-widget.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-widget.component.css */
      "./src/app/widgets/progress-widget/progress-widget.component.css")).default]
    })], ProgressWidgetComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/alexanderkoglin/Projects/angular-8-crud-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map