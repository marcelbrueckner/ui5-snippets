sap.ui.define([
	"sap/uxap/BlockBase"
], function(BlockBase) {
	"use strict";

    return BlockBase.extend("minimum.working.example.block.ReferenceBlock", {
        metadata: {
			views: {
				Collapsed: {
					viewName: "minimum.working.example.block.ReferenceBlockCollapsed",
					type: "XML"
				},
				Expanded: {
					viewName: "minimum.working.example.block.ReferenceBlockExpanded",
					type: "XML"
				}
			}
		}
	});
}, true);