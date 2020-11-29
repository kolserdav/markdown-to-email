"use strict";

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@testing-library/react");

var _reactTestRenderer = require("react-test-renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(function () {
    (0, _react3.cleanup)();
});

describe("copyrights/index component", function () {

    test("renders without crashing", function () {
        var div = document.createElement('div');
        _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
        _reactDom2.default.unmountComponentAtNode(div);
    });

    test('renders correctly', function () {
        var tree = (0, _reactTestRenderer.create)(_react2.default.createElement(_index2.default, null));
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("<em> has correct text content", function () {
        var _render = (0, _react3.render)(_react2.default.createElement(_index2.default, null)),
            getByTestId = _render.getByTestId;

        var em = getByTestId("copyTest");

        var year = new Date().getFullYear();

        expect(em.textContent).toBe("Copyright \xA9 " + year + " Hacker Noon. All rights reserved.");
    });
});