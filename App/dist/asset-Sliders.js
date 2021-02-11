/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./App/src/js/Components/Sliders/edit.tsx":
/*!************************************************!*\
  !*** ./App/src/js/Components/Sliders/edit.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SlidersEdit = void 0; // @ts-ignore

var InspectorControls = wp.blockEditor.InspectorControls; // @ts-ignore

var _a = wp.components,
    TextControl = _a.TextControl,
    ToggleControl = _a.ToggleControl,
    PanelBody = _a.PanelBody,
    PanelRow = _a.PanelRow;

var SlidersEdit = function SlidersEdit(_a) {
  var setAttributes = _a.setAttributes,
      attributes = _a.attributes;
  return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
    title: "Sliders Settings",
    initialOpen: true
  }, wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
    label: "Slider ID",
    id: "slider-id",
    value: attributes['slider-id'],
    onChange: function onChange(newValue) {
      return setAttributes({
        'slider-id': newValue
      });
    }
  })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
    label: "Show Title",
    id: "show-title",
    checked: attributes['show-title'],
    onChange: function onChange() {
      return setAttributes({
        'show-title': !attributes['show-title']
      });
    }
  })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
    label: "Show Description",
    id: "show-description",
    checked: attributes['show-description'],
    onChange: function onChange() {
      return setAttributes({
        'show-description': !attributes['show-description']
      });
    }
  }))), wp.element.createElement(PanelBody, {
    title: "Manage Size"
  }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
    label: "Default (use all available space)",
    id: "use-default-width",
    checked: attributes['use-default-width'],
    onChange: function onChange() {
      return setAttributes({
        'use-default-width': !attributes['use-default-width']
      });
    }
  })), !attributes['use-default-width'] && wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
    type: "number",
    label: "Width of slider (%)",
    id: "width",
    min: 1,
    max: 100,
    step: 1,
    value: attributes['width'],
    onChange: function onChange(newValue) {
      return setAttributes({
        'width': parseInt(newValue)
      });
    }
  }))));
};

exports.SlidersEdit = SlidersEdit;

/***/ }),

/***/ "./App/src/js/Components/Sliders/index.tsx":
/*!*************************************************!*\
  !*** ./App/src/js/Components/Sliders/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var edit_1 = __webpack_require__(/*! ./edit */ "./App/src/js/Components/Sliders/edit.tsx");

var preview_1 = __webpack_require__(/*! ./preview */ "./App/src/js/Components/Sliders/preview.tsx"); // @ts-ignore


var registerBlockType = wp.blocks.registerBlockType;
registerBlockType(Sliders.namespace + '/' + Sliders.name, {
  title: Sliders.title,
  icon: Sliders.icon,
  category: Sliders.category,
  attributes: Sliders.attributes,
  edit: function edit(_a) {
    var attributes = _a.attributes,
        setAttributes = _a.setAttributes;
    return [wp.element.createElement(preview_1.SliderPreview, null), wp.element.createElement(edit_1.SlidersEdit, {
      attributes: attributes,
      setAttributes: setAttributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./App/src/js/Components/Sliders/preview.tsx":
/*!***************************************************!*\
  !*** ./App/src/js/Components/Sliders/preview.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderPreview = void 0; // @ts-ignore

var Fragment = wp.element.Fragment;

var SliderPreview = function SliderPreview() {
  return (// @ts-ignore
    wp.element.createElement(Fragment, null, wp.element.createElement("h2", null, "Helloo"))
  );
};

exports.SliderPreview = SliderPreview;

/***/ }),

/***/ "./App/src/js/sliders.ts":
/*!*******************************!*\
  !*** ./App/src/js/sliders.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! ../css/sliders.scss */ "./App/src/css/sliders.scss");

__webpack_require__(/*! ./Components/Sliders/index.tsx */ "./App/src/js/Components/Sliders/index.tsx");

/***/ }),

/***/ "./App/src/css/sliders.scss":
/*!**********************************!*\
  !*** ./App/src/css/sliders.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./App/src/js/sliders.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlkZXJzLy4vQXBwL3NyYy9qcy9Db21wb25lbnRzL1NsaWRlcnMvZWRpdC50c3giLCJ3ZWJwYWNrOi8vc2xpZGVycy8uL0FwcC9zcmMvanMvQ29tcG9uZW50cy9TbGlkZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGlkZXJzLy4vQXBwL3NyYy9qcy9Db21wb25lbnRzL1NsaWRlcnMvcHJldmlldy50c3giLCJ3ZWJwYWNrOi8vc2xpZGVycy8uL0FwcC9zcmMvanMvc2xpZGVycy50cyIsIndlYnBhY2s6Ly9zbGlkZXJzLy4vQXBwL3NyYy9jc3Mvc2xpZGVycy5zY3NzIiwid2VicGFjazovL3NsaWRlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2xpZGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NsaWRlcnMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQTs7QUFDTyxxQkFBaUIsR0FBSSxFQUFFLENBQUMsV0FBSCxDQUFKLGlCQUFqQixDLENBQ1A7O0FBQ00sU0FBcUQsRUFBRSxDQUFDLFVBQXhEO0FBQUEsSUFBQyxXQUFXLGlCQUFaO0FBQUEsSUFBYyxhQUFhLG1CQUEzQjtBQUFBLElBQTZCLFNBQVMsZUFBdEM7QUFBQSxJQUF3QyxRQUFRLGNBQWhEOztBQUVDLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFDLEVBQUQsRUFBNEI7TUFBMUIsYUFBYSxtQjtNQUFFLFVBQVUsZ0I7QUFFbEQsU0FFSSx5QkFBQyxpQkFBRCxFQUFrQixJQUFsQixFQUNJLHlCQUFDLFNBQUQsRUFBVTtBQUNOLFNBQUssRUFBQyxrQkFEQTtBQUVOLGVBQVcsRUFBRTtBQUZQLEdBQVYsRUFHSSx5QkFBQyxRQUFELEVBQVMsSUFBVCxFQUNJLHlCQUFDLFdBQUQsRUFBWTtBQUNSLFNBQUssRUFBQyxXQURFO0FBRVIsTUFBRSxF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Q0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7O2dDQ1BBOztBQUNPLFlBQVEsR0FBSSxFQUFFLENBQUMsT0FBSCxDQUFKLFFBQVI7O0FBRUEsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0I7QUFDekIsU0FDSTtBQUNBLDZCQUFDLFFBQUQsRUFBUyxJQUFULEVBQ0ksOENBREo7QUFGSjtBQU1ILENBUE07O0FBQU0sd0JBQWEsYUFBYixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSGI7O0FBQ0EsdUc7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhc3NldC1TbGlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxyXG5jb25zdCB7SW5zcGVjdG9yQ29udHJvbHN9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3Qge1RleHRDb250cm9sLCBUb2dnbGVDb250cm9sLCBQYW5lbEJvZHksIFBhbmVsUm93IH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlcnNFZGl0ID0gKHtzZXRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgICAgICAgICA8UGFuZWxCb2R5XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNsaWRlcnMgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNsaWRlciBJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGVyLWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F0dHJpYnV0ZXNbJ3NsaWRlci1pZCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsnc2xpZGVyLWlkJzogbmV3VmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthdHRyaWJ1dGVzWydzaG93LXRpdGxlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRBdHRyaWJ1dGVzKHsnc2hvdy10aXRsZSc6ICFhdHRyaWJ1dGVzWydzaG93LXRpdGxlJ119KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNob3ctZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthdHRyaWJ1dGVzWydzaG93LWRlc2NyaXB0aW9uJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRBdHRyaWJ1dGVzKHsnc2hvdy1kZXNjcmlwdGlvbic6ICFhdHRyaWJ1dGVzWydzaG93LWRlc2NyaXB0aW9uJ119KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9XCJNYW5hZ2UgU2l6ZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVmYXVsdCAodXNlIGFsbCBhdmFpbGFibGUgc3BhY2UpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2UtZGVmYXVsdC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2F0dHJpYnV0ZXNbJ3VzZS1kZWZhdWx0LXdpZHRoJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRBdHRyaWJ1dGVzKHsndXNlLWRlZmF1bHQtd2lkdGgnOiAhYXR0cmlidXRlc1sndXNlLWRlZmF1bHQtd2lkdGgnXX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFhdHRyaWJ1dGVzWyd1c2UtZGVmYXVsdC13aWR0aCddICYmXHJcblx0XHRcdFx0XHQ8UGFuZWxSb3c+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiV2lkdGggb2Ygc2xpZGVyICglKVwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJ3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2F0dHJpYnV0ZXNbJ3dpZHRoJ119XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7J3dpZHRoJzogcGFyc2VJbnQobmV3VmFsdWUpfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1BhbmVsQm9keT5cclxuICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQge1NsaWRlcnNFZGl0fSBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQge1NsaWRlclByZXZpZXd9IGZyb20gJy4vcHJldmlldyc7XHJcbmltcG9ydCB7RnJvbnRlbmR9IGZyb20gJy4vZnJvbnRlbmQnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCB7cmVnaXN0ZXJCbG9ja1R5cGV9ID0gd3AuYmxvY2tzO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoXHJcbiAgICBTbGlkZXJzLm5hbWVzcGFjZSsnLycrU2xpZGVycy5uYW1lLCB7IFxyXG4gICAgICAgIHRpdGxlOiBTbGlkZXJzLnRpdGxlLFxyXG4gICAgICAgIGljb246IFNsaWRlcnMuaWNvbixcclxuICAgICAgICBjYXRlZ29yeTogU2xpZGVycy5jYXRlZ29yeSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiBTbGlkZXJzLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgZWRpdDogKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgPFNsaWRlclByZXZpZXcgLz4sXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyc0VkaXQgYXR0cmlidXRlcz17YXR0cmlidXRlc30gc2V0QXR0cmlidXRlcz17c2V0QXR0cmlidXRlc30gLz4gICAgICAgICAgXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzYXZlOiAoKSA9PiBudWxsXHJcbiAgICB9XHJcbik7IiwiLy8gQHRzLWlnbm9yZVxyXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXJQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDI+SGVsbG9vPC9oMj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgJy4uL2Nzcy9zbGlkZXJzLnNjc3MnO1xyXG5pbXBvcnQgJy4vQ29tcG9uZW50cy9TbGlkZXJzL2luZGV4LnRzeCc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9BcHAvc3JjL2pzL3NsaWRlcnMudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9