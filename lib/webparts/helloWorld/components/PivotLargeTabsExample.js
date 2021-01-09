var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
var PivotTabsLargeExample = /** @class */ (function (_super) {
    __extends(PivotTabsLargeExample, _super);
    function PivotTabsLargeExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PivotTabsLargeExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Pivot, { "aria-label": "Links of Large Tabs Pivot Example", linkFormat: PivotLinkFormat.tabs, linkSize: PivotLinkSize.large },
                React.createElement(PivotItem, { headerText: "Foo" },
                    React.createElement(Label, null, "Pivot #1..")),
                React.createElement(PivotItem, { headerText: "Bar" },
                    React.createElement(Label, null, "Pivot #2")),
                React.createElement(PivotItem, { headerText: "Bas" },
                    React.createElement(Label, null, "Pivot #3")),
                React.createElement(PivotItem, { headerText: "Biz" },
                    React.createElement(Label, null, "Pivot #4")))));
    };
    return PivotTabsLargeExample;
}(React.Component));
export default PivotTabsLargeExample;
//# sourceMappingURL=PivotLargeTabsExample.js.map