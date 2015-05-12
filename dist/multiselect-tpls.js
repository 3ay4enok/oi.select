angular.module('oi.multiselect', ['template/multiselect/template.html']);

angular.module("template/multiselect/template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/multiselect/template.html",
    "<div class=\"multiselect-search\" ng-class=\"{open: isOpen, focused: isFocused, loading: showLoader}\" ng-click=\"setFocus($event)\">\n" +
    "    <ul class=\"multiselect-search-list\">\n" +
    "        <li class=\"btn btn-default btn-xs multiselect-search-list-item multiselect-search-list-item_selection\"\n" +
    "            ng-repeat=\"item in output track by $index\"\n" +
    "            ng-class=\"{focused: backspaceFocus && $last}\"\n" +
    "            ng-click=\"removeItem($index)\"\n" +
    "            ng-bind-html=\"getSearchLabel(item)\"></li>\n" +
    "        <li class=\"multiselect-search-list-item multiselect-search-list-item_input\"><input autocomplete=\"off\"\n" +
    "                                                                                           ng-model=\"query\"\n" +
    "                                                                                           ng-style=\"{'width': inputWidth + 'px'}\"\n" +
    "                                                                                           ng-keydown=\"keyParser($event)\"\n" +
    "                                                                                           ng-focus=\"setFocus($event)\"/></li>\n" +
    "        <li class=\"multiselect-search-list-item multiselect-search-list-item_loader\" ng-show=\"showLoader\"></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div class=\"multiselect-dropdown\" ng-show=\"isOpen\" ng-click=\"setFocus($event)\">\n" +
    "    <ul ng-if=\"isOpen\" class=\"multiselect-dropdown-optgroup\" ng-repeat=\"(group, options) in groups\">\n" +
    "        <div class=\"multiselect-dropdown-optgroup-header\"\n" +
    "            ng-if=\"group && options.length\"\n" +
    "            ng-bind=\"group\"></div><!-- we use fast getElementsByTagName('li')-->\n" +
    "        <li class=\"multiselect-dropdown-optgroup-option\"\n" +
    "            ng-repeat=\"option in options\"\n" +
    "            ng-class=\"{'active': selectorPosition === groupPos[group] + $index}\"\n" +
    "            ng-click=\"addItem(option)\"\n" +
    "            ng-mouseenter=\"setSelection(groupPos[group] + $index)\"\n" +
    "            ng-bind-html=\"getDropdownLabel(option)\"></li>\n" +
    "    </ul>\n" +
    "</div>");
}]);
