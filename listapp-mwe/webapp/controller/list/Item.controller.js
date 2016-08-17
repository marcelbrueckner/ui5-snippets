sap.ui.define([
    "jquery.sap.global",
	"minimum/working/example/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(jQuery, BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("minimum.working.example.controller.list.Item", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf minimum.working.example.view.list.Item
		 */
		onInit: function () {
		    this.getRouter().getRoute("item").attachPatternMatched(this._onObjectMatched, this);
        },
		
		/**
		 * Binds the element of the matched route to the view
		 */
		_onObjectMatched: function (oEvent) {
		    var sListType = oEvent.getParameter("arguments").listType;
		    var sItemId = oEvent.getParameter("arguments").itemId;
		    var oModel;
		    
		    switch (sListType) {
                case "a":
                    oModel = new JSONModel(jQuery.sap.getModulePath("minimum.working.example", "/localService/mockdata/ASet.json"));
            		break;
                case "b":
                    oModel = new JSONModel(jQuery.sap.getModulePath("minimum.working.example", "/localService/mockdata/BSet.json"));
                    break;
            }
            
		    // Set demo model
		    oModel.attachRequestCompleted(function () {
		        this.getView().setModel(oModel);
                
                // Get index of itemId in array
                var sItemIndex;
                var aItems = oModel.getProperty("/");
                
                for (var i = 0; i < aItems.length; i++) {
                    if (parseInt(aItems[i].ItemID, 10) === parseInt(sItemId, 10)) {
                        sItemIndex = i;
                    }
                }
                
                this.getView().bindElement("/" + sItemIndex);
    		    
    		    this.getView().byId("listItemObject").setVisible(true);
    		    this.getView().byId("listItemPage").setBusy(false);
            }, this);
		}

	});

});