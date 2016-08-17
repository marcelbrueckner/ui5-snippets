sap.ui.define([
		"jquery.sap.global",
		"minimum/working/example/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function(jQuery, BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("minimum.working.example.controller.list.List", {

		onInit: function() {
		    // Set demo model
		    this.getRouter().getRoute("lists").attachPatternMatched(this._onObjectMatched, this);
		},
		
		/**
		 * Navigate to detail view
		 */
		onListItemPressed: function (oEvent) {
		    var oColumnListItem = oEvent.getSource(),
		        sItemId = oColumnListItem.getBindingContext().getProperty("ItemID");
            
            var oRouter = this.getRouter();
            oRouter.navTo("item", {
                listType: this._sListType,
				itemId: sItemId
			});
		},
				
		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */
		
		/**
		 * Binds the list of the matched object type to the view
		 * @memberOf minimum.working.example.view.list.List
		 */
		_onObjectMatched: function (oEvent) {
		    this._sListType = oEvent.getParameter("arguments").listType;
		    var oModel;
		
            switch (this._sListType) {
                case "a":
                    oModel = new JSONModel(jQuery.sap.getModulePath("minimum.working.example", "/localService/mockdata/ASet.json"));
                    break;
                case "b":
                    oModel = new JSONModel(jQuery.sap.getModulePath("minimum.working.example", "/localService/mockdata/BSet.json"));
                    break;
            }
            
            oModel.attachRequestCompleted(function () {
		        this.getView().setModel(oModel);
            }, this);
		}

	});

});