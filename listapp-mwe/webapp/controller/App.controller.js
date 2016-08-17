/**
 * @file The App's controller
 */
sap.ui.define([
	"minimum/working/example/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("minimum.working.example.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf minimum.working.example.view.Overview
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf minimum.working.example.view.Overview
		 */
		//	onBeforeRendering: function() {
		//
		//	},
	    
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf minimum.working.example.view.Overview
		 * @public
		 */
		onAfterRendering: function() {
            this._setSidebarToggleTooltip(sap.ui.Device.system.desktop);
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf minimum.working.example.view.Overview
		 */
		//	onExit: function() {
		//
		//	}
	    
        /**
		 * Toggles the toolpage's side content.
		 * @public
		 */
	    onSidebarToggle: function (oEvent) {
	        var oToolPage = this.getView().byId("toolPage");
	        oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
	        this._setSidebarToggleTooltip(oToolPage.getSideExpanded());
	    },
	    
	    onItemSelect: function (oEvent) {
	        // Check which navigation item was clicked and if navigation is necessary
	        var oItem = oEvent.getParameter("item");
	        
	        if (oItem.getItems().length) {
	            oItem.setExpanded(!oItem.getExpanded());
	            return;
	        }
	        
	        // Determine route
	        var aRouteComponents = oItem.getKey().split("/");
	        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	        oRouter.navTo(aRouteComponents[0], {
				listType: aRouteComponents[1]
			});
	    },
	    
        /**
		 * Set the sidebar toggle button's tooltip according to the current state.
		 * @param {boolean} bIsExpanded - The sidebar's current expanded state.
		 * @private
		 */
        _setSidebarToggleTooltip: function (bIsExpanded) {
            var sidebarToggle = this.getView().byId("sidebarToggle");
            var sMsg = "Toggle";
	        
            sMsg = bIsExpanded ? "Collapse" : "Expand";

            sidebarToggle.setTooltip(sMsg);
	    }

	});

});