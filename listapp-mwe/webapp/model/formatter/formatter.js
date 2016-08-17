sap.ui.define([], function () {
	"use strict";
	
	return {
	    /**
	     * Date formatter functions
	     */
		DateFormat: {
	        fromJSONDate: function (sJSONDate) {
    			var sTimestamp = parseInt(sJSONDate.replace(/[^0-9]+/g,''), 10);
                var oDate = new Date(sTimestamp);
                var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({style: "medium"});
                return dateFormat.format(oDate);
	        }
		},
		DateTimeFormat: {
	        fromJSONDate: function (sJSONDate) {
    			var sTimestamp = parseInt(sJSONDate.replace(/[^0-9]+/g,''), 10);
                var oDate = new Date(sTimestamp);
                var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style: "medium"});
                return dateFormat.format(oDate);
	        }
		}
	};
});