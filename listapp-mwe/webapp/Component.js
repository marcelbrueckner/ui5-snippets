sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"minimum/working/example/model/models"
], function(UIComponent, JSONModel, Device, Models) {
	"use strict";

	return UIComponent.extend("minimum.working.example.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// Call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// Create the views based on the url/hash
            this.getRouter().initialize();

			// Set the device model
			this.setModel(Models.createDeviceModel(), "device");
			
			// Simple "StringReturnModel" to pass parameters to formatters
			// http://stackoverflow.com/questions/27295385/passing-parameters-to-i18n-model-within-xml-view
			var stringModel = new JSONModel({});
			stringModel.getProperty = function (sPath) {
			    return sPath;
			};
			this.setModel(stringModel, "string");
		}
		
		/**
         * Reads out a string from the text domain.
         * The model i18n is defined in the manifest.json
         *
         * @param param text parameter
         * @param arr array for parameters
         * @link http://stackoverflow.com/questions/27295385/passing-parameters-to-i18n-model-within-xml-view
         * @return string
         */
        // i18n: function (param, arr) {
        //     var oBundle = this.getModel("i18n").getResourceBundle();
        //     return oBundle.getText(param, arr);
        // }
	});

});