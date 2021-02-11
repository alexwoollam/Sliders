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
  edit: function edit(attributes, setAttributes) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlkZXJzLy4vQXBwL3NyYy9qcy9Db21wb25lbnRzL1NsaWRlcnMvZWRpdC50c3giLCJ3ZWJwYWNrOi8vc2xpZGVycy8uL0FwcC9zcmMvanMvQ29tcG9uZW50cy9TbGlkZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zbGlkZXJzLy4vQXBwL3NyYy9qcy9Db21wb25lbnRzL1NsaWRlcnMvcHJldmlldy50c3giLCJ3ZWJwYWNrOi8vc2xpZGVycy8uL0FwcC9zcmMvanMvc2xpZGVycy50cyIsIndlYnBhY2s6Ly9zbGlkZXJzLy4vQXBwL3NyYy9jc3Mvc2xpZGVycy5zY3NzIiwid2VicGFjazovL3NsaWRlcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2xpZGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NsaWRlcnMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQTs7QUFDTyxxQkFBaUIsR0FBSSxFQUFFLENBQUMsV0FBSCxDQUFKLGlCQUFqQixDLENBQ1A7O0FBQ00sU0FBcUQsRUFBRSxDQUFDLFVBQXhEO0FBQUEsSUFBQyxXQUFXLGlCQUFaO0FBQUEsSUFBYyxhQUFhLG1CQUEzQjtBQUFBLElBQTZCLFNBQVMsZUFBdEM7QUFBQSxJQUF3QyxRQUFRLGNBQWhEOztBQUVDLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFDLEVBQUQsRUFBNEI7TUFBMUIsYUFBYSxtQjtNQUFFLFVBQVUsZ0I7QUFFbEQsU0FFSSx5QkFBQyxpQkFBRCxFQUFrQixJQUFsQixFQUNJLHlCQUFDLFNBQUQsRUFBVTtBQUNOLFNBQUssRUFBQyxrQkFEQTtBQUVOLGVBQVcsRUFBRTtBQUZQLEdBQVYsRUFHSSx5QkFBQyxRQUFELEVBQVMsSUFBVCxFQUNJLHlCQUFDLFdBQUQsRUFBWTtBQUNSLFNBQUssRUFBQyxXQURFO0FBRVIsTUFBRSxF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Ozs7OztnQ0NQQTs7QUFDTyxZQUFRLEdBQUksRUFBRSxDQUFDLE9BQUgsQ0FBSixRQUFSOztBQUVBLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWdCO0FBQ3pCLFNBQ0k7QUFDQSw2QkFBQyxRQUFELEVBQVMsSUFBVCxFQUNJLDhDQURKO0FBRko7QUFNSCxDQVBNOztBQUFNLHdCQUFhLGFBQWIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hiOztBQUNBLHVHOzs7Ozs7Ozs7OztBQ0RBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYXNzZXQtU2xpZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcclxuY29uc3Qge0luc3BlY3RvckNvbnRyb2xzfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IHtUZXh0Q29udHJvbCwgVG9nZ2xlQ29udHJvbCwgUGFuZWxCb2R5LCBQYW5lbFJvdyB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXJzRWRpdCA9ICh7c2V0QXR0cmlidXRlcywgYXR0cmlidXRlc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cclxuICAgICAgICAgICAgPFBhbmVsQm9keVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJTbGlkZXJzIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbGlkZXIgSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNsaWRlci1pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthdHRyaWJ1dGVzWydzbGlkZXItaWQnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7J3NsaWRlci1pZCc6IG5ld1ZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IFRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93LXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YXR0cmlidXRlc1snc2hvdy10aXRsZSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QXR0cmlidXRlcyh7J3Nob3ctdGl0bGUnOiAhYXR0cmlidXRlc1snc2hvdy10aXRsZSddfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93LWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YXR0cmlidXRlc1snc2hvdy1kZXNjcmlwdGlvbiddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QXR0cmlidXRlcyh7J3Nob3ctZGVzY3JpcHRpb24nOiAhYXR0cmlidXRlc1snc2hvdy1kZXNjcmlwdGlvbiddfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XHJcbiAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxyXG4gICAgICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPVwiTWFuYWdlIFNpemVcIj5cclxuICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlZmF1bHQgKHVzZSBhbGwgYXZhaWxhYmxlIHNwYWNlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlLWRlZmF1bHQtd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthdHRyaWJ1dGVzWyd1c2UtZGVmYXVsdC13aWR0aCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QXR0cmlidXRlcyh7J3VzZS1kZWZhdWx0LXdpZHRoJzogIWF0dHJpYnV0ZXNbJ3VzZS1kZWZhdWx0LXdpZHRoJ119KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhYXR0cmlidXRlc1sndXNlLWRlZmF1bHQtd2lkdGgnXSAmJlxyXG5cdFx0XHRcdFx0PFBhbmVsUm93PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIldpZHRoIG9mIHNsaWRlciAoJSlcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwid2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzWyd3aWR0aCddfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3VmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyd3aWR0aCc6IHBhcnNlSW50KG5ld1ZhbHVlKX0pfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9QYW5lbEJvZHk+XHJcbiAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IHtTbGlkZXJzRWRpdH0gZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHtTbGlkZXJQcmV2aWV3fSBmcm9tICcuL3ByZXZpZXcnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCB7cmVnaXN0ZXJCbG9ja1R5cGV9ID0gd3AuYmxvY2tzO1xyXG5cclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKFxyXG4gICAgU2xpZGVycy5uYW1lc3BhY2UrJy8nK1NsaWRlcnMubmFtZSwgeyBcclxuICAgICAgICB0aXRsZTogU2xpZGVycy50aXRsZSxcclxuICAgICAgICBpY29uOiBTbGlkZXJzLmljb24sXHJcbiAgICAgICAgY2F0ZWdvcnk6IFNsaWRlcnMuY2F0ZWdvcnksXHJcbiAgICAgICAgYXR0cmlidXRlczogU2xpZGVycy5hdHRyaWJ1dGVzLFxyXG4gICAgICAgIGVkaXQ6IChhdHRyaWJ1dGVzLHNldEF0dHJpYnV0ZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIDxTbGlkZXJQcmV2aWV3IC8+LFxyXG4gICAgICAgICAgICAgICAgPFNsaWRlcnNFZGl0IGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9IHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9IC8+ICAgICAgICAgIFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2F2ZTogKCkgPT4gbnVsbFxyXG4gICAgfVxyXG4pOyIsIi8vIEB0cy1pZ25vcmVcclxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyUHJldmlldyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGgyPkhlbGxvbzwvaDI+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0ICcuLi9jc3Mvc2xpZGVycy5zY3NzJztcclxuaW1wb3J0ICcuL0NvbXBvbmVudHMvU2xpZGVycy9pbmRleC50c3gnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vQXBwL3NyYy9qcy9zbGlkZXJzLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==