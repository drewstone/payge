webpackHotUpdate("static/development/pages/books.js",{

/***/ "./pages/books/index.js":
/*!******************************!*\
  !*** ./pages/books/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/nav */ "./components/nav.js");
var _jsxFileName = "/Users/drewstone/code/myblog/pages/books/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var haveRead = function haveRead() {
  return [{
    title: 'Wild Sheep Chase',
    href: 'https://www.amazon.com/Wild-Sheep-Chase-Novel/dp/037571894X'
  }, {
    title: 'The Jew in the Lotus: A Poet\'s Rediscovery of Jewish Identity in Buddhist India',
    href: 'https://www.amazon.com/Jew-Lotus-Rediscovery-Identity-Buddhist-ebook/dp/B000Z4JQNS'
  }, {
    title: 'Joyful Wisdom',
    href: 'https://www.amazon.com/Joyful-Wisdom-Embracing-Finding-Freedom/dp/B00262UAYQ'
  }, {
    title: 'What I Talk About When I Talk About Running',
    href: 'https://www.amazon.com/What-Talk-About-When-Running/dp/0307389839'
  }, {
    title: 'Exhalation',
    href: 'https://www.amazon.com/Exhalation-Stories-Ted-Chiang-ebook/dp/B07GD46PQZ'
  }, {
    title: 'The Pisces',
    href: 'https://www.amazon.com/Pisces-Novel-Melissa-Broder-ebook/dp/B074LVLHF2'
  }, {
    title: 'Man\'s Search for Meaning (audio)',
    href: 'https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273'
  }, {
    title: 'Principles (audio)',
    href: 'https://www.amazon.com/Simon-Schuster-Audio-Principles-Life/dp/B074B2CZJG'
  }, {
    title: 'How to Change Your Mind',
    href: 'https://www.amazon.com/Change-Your-Mind-Consciousness-Transcendence/dp/B07B1V3RF5'
  }];
};

var amReading = function amReading() {
  return [{
    title: 'Killing Commendatore',
    href: 'https://www.amazon.com/dp/B079WM2HMV'
  }, {
    title: 'Shrinks (audio)',
    href: 'https://www.amazon.com/dp/B00LLIJ0OC'
  }, {
    title: 'Adaptive Markets (audio)',
    href: 'https://www.amazon.com/Adaptive-Markets-Financial-Evolution-Thought-ebook/dp/B07R4C6PDZ'
  }, {
    title: 'Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel',
    href: 'https://www.amazon.com/Vagabonding-Uncommon-Guide-Long-Term-Travel-ebook/dp/B000FBFMKM'
  }];
};

var planneingToRead = function planneingToRead() {
  return [{
    title: 'Barbarian Days',
    href: 'https://www.amazon.com/dp/B00G3L6JMS'
  }, {
    title: 'Radical Acceptance',
    href: 'https://www.amazon.com/Radical-Acceptance-Tara-Brach-ebook/dp/B000FC2NHG'
  }, {
    title: 'Good Profit',
    href: 'https://www.amazon.com/Good-Profit-Creating-Successful-Companies-ebook/dp/B00TWEMGE8'
  }, {
    title: 'The Coming Anarchy',
    href: 'https://www.theatlantic.com/magazine/archive/1994/02/the-coming-anarchy/304670/'
  }, {
    title: 'The Long Boom: A History of the Future, 1980–2020',
    href: 'https://www.wired.com/1997/07/longboom/'
  }, {
    title: 'Sources of the Self: The Making of the Modern Identity',
    href: 'https://www.amazon.com/Sources-Self-Making-Modern-Identity/dp/0674824261'
  }];
};

var Books = function Books() {
  return __jsx("div", {
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Books"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@1.0.1/build/pure-min.css",
    integrity: "sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47",
    crossorigin: "anonymous",
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap",
    rel: "stylesheet",
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), Object(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"])(true), __jsx("div", {
    className: "jsx-2112865231" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2112865231" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2112865231" + " " + "pure-g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2112865231" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Books"), __jsx("div", {
    className: "jsx-2112865231" + " " + "pure-u-1-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2112865231" + " " + "row-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2112865231" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Here you can find what I've read and am currently reading, this list starts from the year 2020."), __jsx("div", {
    className: "jsx-2112865231" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("input", {
    id: "cb",
    type: "checkbox",
    checked: true,
    disabled: true,
    readOnly: true,
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "Disabled grey boxes indicate books I've finished"), __jsx("div", {
    className: "jsx-2112865231" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("input", {
    id: "cb",
    type: "checkbox",
    checked: true,
    readOnly: true,
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), "Checked white boxes indicate books I'm currently reading"), __jsx("div", {
    className: "jsx-2112865231" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("input", {
    id: "cb",
    type: "checkbox",
    readOnly: true,
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "Unchecked white boxes indicate books I hope to read soon"), __jsx("ul", {
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2112865231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "2020"))), __jsx("ul", {
    className: "jsx-2112865231" + " " + "pure-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, haveRead().map(function (book, inx) {
    return __jsx("li", {
      key: inx,
      className: "jsx-2112865231" + " " + "card-grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2112865231" + " " + "book-title pure-u-7-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("input", {
      id: "cb",
      type: "checkbox",
      checked: true,
      disabled: true,
      readOnly: true,
      className: "jsx-2112865231",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), book.title), __jsx("div", {
      className: "jsx-2112865231" + " " + "read pure-u-1-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2112865231" + " " + "read-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: book.href,
      className: "jsx-2112865231",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Read"))));
  }), amReading().map(function (book, inx) {
    return __jsx("li", {
      key: inx,
      className: "jsx-2112865231" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2112865231" + " " + "book-title pure-u-7-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("input", {
      id: "cb",
      type: "checkbox",
      checked: true,
      readOnly: true,
      className: "jsx-2112865231",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), book.title), __jsx("div", {
      className: "jsx-2112865231" + " " + "read pure-u-1-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2112865231" + " " + "read-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: book.href,
      className: "jsx-2112865231",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Read"))));
  }), planneingToRead().map(function (book, inx) {
    return __jsx("li", {
      key: inx,
      className: "jsx-2112865231" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2112865231" + " " + "book-title pure-u-7-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("input", {
      id: "cb",
      type: "checkbox",
      readOnly: true,
      className: "jsx-2112865231",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), book.title), __jsx("div", {
      className: "jsx-2112865231" + " " + "read pure-u-1-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2112865231" + " " + "read-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: book.href,
      className: "jsx-2112865231",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Read"))));
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2112865231",
    __self: this
  }, "html.jsx-2112865231,button.jsx-2112865231,input.jsx-2112865231,select.jsx-2112865231,textarea.jsx-2112865231,.pure-g.jsx-2112865231 [class *= \"pure-u\"].jsx-2112865231{font-family:'Roboto Mono',monospace;}.hero.jsx-2112865231{width:100%;color:#333;}.title.jsx-2112865231{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:30px;text-align:center;font-family:'Roboto Mono',serif;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.description.jsx-2112865231{text-align:left;font-family:'Roboto Mono',monospace;}.row.jsx-2112865231{max-width:880px;margin:20px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.row-content.jsx-2112865231{margin:0 0.5rem;}.card.jsx-2112865231{padding:9px 9px 12px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card-grey.jsx-2112865231{padding:9px 9px 9px;text-align:left;-webkit-text-decoration:none;text-decoration:none;background-color:#F0F0F0;border:1px solid #9b9b9b;}.card.jsx-2112865231:hover{border-color:#067df7;}.card-grey.jsx-2112865231:hover{border-color:#067df7;}.card.jsx-2112865231 h3.jsx-2112865231{margin:0;color:#067df7;font-size:18px;}.card.jsx-2112865231 p.jsx-2112865231{margin:0;padding:12px 0 0;font-size:13px;color:#333;}ul.jsx-2112865231{padding-left:0px;}li.jsx-2112865231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Roboto Mono',monospace;}input.jsx-2112865231{float:left;margin-top:5px;margin-right:20px;}a.jsx-2112865231{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:20px;}.book-title.jsx-2112865231{width:100%;}.read.jsx-2112865231{margin-left:auto;margin-right:0;}.read-link.jsx-2112865231{margin:1px;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcmV3c3RvbmUvY29kZS9teWJsb2cvcGFnZXMvYm9va3MvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhnQixBQUlnRCxBQUc1QixBQUlGLEFBVU8sQUFJQSxBQU9BLEFBR0ssQUFPRCxBQU9DLEFBR0EsQUFHWixBQUtBLEFBTVEsQUFHSixBQUlGLEFBS0csQUFLSCxBQUdLLEFBSUwsU0E5RUEsQUE0Q0csQUFLRyxFQXJETixBQWtFSSxBQVVqQixBQU91QixHQVpBLEVBekRnQixBQUlmLEFBT3hCLENBa0NBLEFBb0JnQixHQTFFRyxBQThCRCxDQVBBLEFBY2xCLEFBR0EsQ0E1Q0EsQ0FnRGlCLEdBS0EsQUFhRyxNQWFwQixBQUlBLElBdkZBLEFBdUN1QixDQTlCSixBQXVCSSxDQVZSLEFBK0JmLEdBS2EsR0FhYixRQXJEQSxBQXlDQSxFQWpEaUIsVUFpRUEsS0FoRUcsS0FzRG1CLEtBV3ZDLE9BcEMyQixDQTVCUSxBQXFCbkIsY0FDVyxTQWdDM0IsQ0F6QjJCLENBbEJOLE9BVkEsT0FzQnJCLFVBT0EsNkNBbEIrQiwrQkFWL0IsNEZBV0EiLCJmaWxlIjoiL1VzZXJzL2RyZXdzdG9uZS9jb2RlL215YmxvZy9wYWdlcy9ib29rcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2JztcblxuY29uc3QgaGF2ZVJlYWQgPSAoKSA9PiAoW1xuICB7IHRpdGxlOiAnV2lsZCBTaGVlcCBDaGFzZScsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL1dpbGQtU2hlZXAtQ2hhc2UtTm92ZWwvZHAvMDM3NTcxODk0WCcgfSxcbiAgeyB0aXRsZTogJ1RoZSBKZXcgaW4gdGhlIExvdHVzOiBBIFBvZXRcXCdzIFJlZGlzY292ZXJ5IG9mIEpld2lzaCBJZGVudGl0eSBpbiBCdWRkaGlzdCBJbmRpYScsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL0pldy1Mb3R1cy1SZWRpc2NvdmVyeS1JZGVudGl0eS1CdWRkaGlzdC1lYm9vay9kcC9CMDAwWjRKUU5TJyB9LFxuICB7IHRpdGxlOiAnSm95ZnVsIFdpc2RvbScsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL0pveWZ1bC1XaXNkb20tRW1icmFjaW5nLUZpbmRpbmctRnJlZWRvbS9kcC9CMDAyNjJVQVlRJyB9LFxuICB7IHRpdGxlOiAnV2hhdCBJIFRhbGsgQWJvdXQgV2hlbiBJIFRhbGsgQWJvdXQgUnVubmluZycsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL1doYXQtVGFsay1BYm91dC1XaGVuLVJ1bm5pbmcvZHAvMDMwNzM4OTgzOScgfSxcbiAgeyB0aXRsZTogJ0V4aGFsYXRpb24nLCBocmVmOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9FeGhhbGF0aW9uLVN0b3JpZXMtVGVkLUNoaWFuZy1lYm9vay9kcC9CMDdHRDQ2UFFaJyB9LFxuICB7IHRpdGxlOiAnVGhlIFBpc2NlcycsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL1Bpc2Nlcy1Ob3ZlbC1NZWxpc3NhLUJyb2Rlci1lYm9vay9kcC9CMDc0TFZMSEYyJyB9LFxuICB7IHRpdGxlOiAnTWFuXFwncyBTZWFyY2ggZm9yIE1lYW5pbmcgKGF1ZGlvKScsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL01hbnMtU2VhcmNoLU1lYW5pbmctVmlrdG9yLUZyYW5rbC9kcC8wODA3MDE0MjczJyB9LFxuICB7IHRpdGxlOiAnUHJpbmNpcGxlcyAoYXVkaW8pJywgaHJlZjogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vU2ltb24tU2NodXN0ZXItQXVkaW8tUHJpbmNpcGxlcy1MaWZlL2RwL0IwNzRCMkNaSkcnIH0sXG4gIHsgdGl0bGU6ICdIb3cgdG8gQ2hhbmdlIFlvdXIgTWluZCcsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL0NoYW5nZS1Zb3VyLU1pbmQtQ29uc2Npb3VzbmVzcy1UcmFuc2NlbmRlbmNlL2RwL0IwN0IxVjNSRjUnIH0sXG5dKVxuXG5jb25zdCBhbVJlYWRpbmcgPSAoKSA9PiAoW1xuICB7IHRpdGxlOiAnS2lsbGluZyBDb21tZW5kYXRvcmUnLCBocmVmOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9kcC9CMDc5V00ySE1WJyB9LFxuICB7IHRpdGxlOiAnU2hyaW5rcyAoYXVkaW8pJywgaHJlZjogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZHAvQjAwTExJSjBPQycgfSxcbiAgeyB0aXRsZTogJ0FkYXB0aXZlIE1hcmtldHMgKGF1ZGlvKScsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL0FkYXB0aXZlLU1hcmtldHMtRmluYW5jaWFsLUV2b2x1dGlvbi1UaG91Z2h0LWVib29rL2RwL0IwN1I0QzZQRFonIH0sXG4gIHsgdGl0bGU6ICdWYWdhYm9uZGluZzogQW4gVW5jb21tb24gR3VpZGUgdG8gdGhlIEFydCBvZiBMb25nLVRlcm0gV29ybGQgVHJhdmVsJywgaHJlZjogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vVmFnYWJvbmRpbmctVW5jb21tb24tR3VpZGUtTG9uZy1UZXJtLVRyYXZlbC1lYm9vay9kcC9CMDAwRkJGTUtNJyB9LFxuXSk7XG5cbmNvbnN0IHBsYW5uZWluZ1RvUmVhZCA9ICgpID0+IChbXG4gIHsgdGl0bGU6ICdCYXJiYXJpYW4gRGF5cycsIGhyZWY6ICdodHRwczovL3d3dy5hbWF6b24uY29tL2RwL0IwMEczTDZKTVMnIH0sXG4gIHsgdGl0bGU6ICdSYWRpY2FsIEFjY2VwdGFuY2UnLCBocmVmOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9SYWRpY2FsLUFjY2VwdGFuY2UtVGFyYS1CcmFjaC1lYm9vay9kcC9CMDAwRkMyTkhHJyB9LFxuICB7IHRpdGxlOiAnR29vZCBQcm9maXQnLCBocmVmOiAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9Hb29kLVByb2ZpdC1DcmVhdGluZy1TdWNjZXNzZnVsLUNvbXBhbmllcy1lYm9vay9kcC9CMDBUV0VNR0U4JyB9LFxuICB7IHRpdGxlOiAnVGhlIENvbWluZyBBbmFyY2h5JywgaHJlZjogJ2h0dHBzOi8vd3d3LnRoZWF0bGFudGljLmNvbS9tYWdhemluZS9hcmNoaXZlLzE5OTQvMDIvdGhlLWNvbWluZy1hbmFyY2h5LzMwNDY3MC8nIH0sXG4gIHsgdGl0bGU6ICdUaGUgTG9uZyBCb29tOiBBIEhpc3Rvcnkgb2YgdGhlIEZ1dHVyZSwgMTk4MOKAkzIwMjAnLCBocmVmOiAnaHR0cHM6Ly93d3cud2lyZWQuY29tLzE5OTcvMDcvbG9uZ2Jvb20vJyB9LFxuICB7IHRpdGxlOiAnU291cmNlcyBvZiB0aGUgU2VsZjogVGhlIE1ha2luZyBvZiB0aGUgTW9kZXJuIElkZW50aXR5JywgaHJlZjogJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vU291cmNlcy1TZWxmLU1ha2luZy1Nb2Rlcm4tSWRlbnRpdHkvZHAvMDY3NDgyNDI2MScgfVxuXSk7XG5cbmNvbnN0IEJvb2tzID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkJvb2tzPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AxLjAuMS9idWlsZC9wdXJlLW1pbi5jc3NcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtb0FPeFFSNkRrQ29NbGlJaDh5Rm51MjVkN0VxL1BIUzIxUENscHdqT1RlVTJqUlNxMTF2dTY2cmY5MC9jWnI0N1wiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgeyBOYXYodHJ1ZSkgfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Cb29rczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgSGVyZSB5b3UgY2FuIGZpbmQgd2hhdCBJJ3ZlIHJlYWQgYW5kIGFtIGN1cnJlbnRseSByZWFkaW5nLCB0aGlzIGxpc3Qgc3RhcnRzIGZyb20gdGhlIHllYXIgMjAyMC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0cnVlfSBkaXNhYmxlZCByZWFkT25seS8+XG4gICAgICAgICAgICAgICAgRGlzYWJsZWQgZ3JleSBib3hlcyBpbmRpY2F0ZSBib29rcyBJJ3ZlIGZpbmlzaGVkXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0cnVlfSByZWFkT25seS8+XG4gICAgICAgICAgICAgICAgQ2hlY2tlZCB3aGl0ZSBib3hlcyBpbmRpY2F0ZSBib29rcyBJJ20gY3VycmVudGx5IHJlYWRpbmdcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjYlwiIHR5cGU9XCJjaGVja2JveFwiIHJlYWRPbmx5Lz5cbiAgICAgICAgICAgICAgICBVbmNoZWNrZWQgd2hpdGUgYm94ZXMgaW5kaWNhdGUgYm9va3MgSSBob3BlIHRvIHJlYWQgc29vblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhPjIwMjA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB1cmUtY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBoYXZlUmVhZCgpLm1hcCgoYm9vaywgaW54KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wiY2FyZC1ncmV5XCJ9IGtleT17aW54fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stdGl0bGUgcHVyZS11LTctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNiXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dHJ1ZX0gZGlzYWJsZWQgcmVhZE9ubHkvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkIHB1cmUtdS0xLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtib29rLmhyZWZ9PlJlYWQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGFtUmVhZGluZygpLm1hcCgoYm9vaywgaW54KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtpbnh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay10aXRsZSBwdXJlLXUtNy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0cnVlfSByZWFkT25seS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQgcHVyZS11LTEtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e2Jvb2suaHJlZn0+UmVhZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGxhbm5laW5nVG9SZWFkKCkubWFwKChib29rLCBpbngpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2lueH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLXRpdGxlIHB1cmUtdS03LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNiXCIgdHlwZT1cImNoZWNrYm94XCIgcmVhZE9ubHkvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkIHB1cmUtdS0xLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtib29rLmhyZWZ9PlJlYWQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBodG1sLCBidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLFxuICAgICAgLnB1cmUtZyBbY2xhc3MgKj0gXCJwdXJlLXVcIl0ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICB9XG4gICAgICAuaGVybyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBzZXJpZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIH1cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAucm93LWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiA5cHggOXB4IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuY2FyZC1ncmV5IHtcbiAgICAgICAgcGFkZGluZzogOXB4IDlweCA5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgIH1cbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgfVxuICAgICAgLmNhcmQtZ3JleTpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmJvb2stdGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5yZWFkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjA7XG4gICAgICB9XG4gICAgICAucmVhZC1saW5rIHtcbiAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBCb29rc1xuIl19 */\n/*@ sourceURL=/Users/drewstone/code/myblog/pages/books/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ })

})
//# sourceMappingURL=books.js.8e6d99a3b55bc8329e33.hot-update.js.map