'use strict';
var assert = {
    isTrue: function (testName, assertionToCheck) {
        if (!assertionToCheck) {
            document.write("<div style = 'color: red;'>FAILED: " + testName + " returns " + assertionToCheck + "</div><br>");
        } else {
            document.write("<div style = 'color: green;'>PASSED: " + testName + " returns " + assertionToCheck + "</div><br>");
        }
    }
};