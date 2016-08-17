sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"minimum/working/example/model/formatter/formatter",
	"sap/ui/core/routing/History"
], function (Controller, Formatter, History) {
	"use strict";
	
	return Controller.extend("minimum.working.example.controller.BaseController", {
	    
	    /**
		 * Formatter functions for use in XML views
		 */
	    formatter: Formatter,
	    
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		getComponent: function () {  
            var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
            return sap.ui.component(sComponentId);  
        }, 

		/**
		 * Redirects to the previous hash via the browser’s native History API.
		 * In case there is no previous hash it navigates to the route overview which is our home view.
		 * @memberOf minimum.working.example
		 * @public
		 */
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			this.getView().unbindElement();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("overview", {}, true /*makes sure that the hash is replaced*/);
			}
		}
	});
});