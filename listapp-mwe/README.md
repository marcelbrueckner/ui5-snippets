## README
This is a (nearly) minimum working example for demonstrating an error I get during developing of this SAPUI5 list app:

    Cannot remove aggregated child without aggregation name. -  Element sap.uxap.ObjectPageSubSection#__section1

### Situation
The app consists of an overview page (currently displaying the text *Overview page* only) and two lists.

Each list has a number of items (currently one) for which a detail view (an object page) can be displayed.

In the background, the lists share a common view and controller. Depending on the route (either *list/a* oder *list/b*) the corresponding JSON model is loaded from a file.

An list item has a property *References* which is an object with two attributes, *Primary* and *Secondary*.
Every attribute carry an array of objects.

```
[
	{
		"ItemID": 1,
		"References": {
			Primary: [
				{}
			],
			Secondary: [
				{},
				{},
				{}
			]
		}	
	}
]
```

Those objects should be shown in the detail view as [blocks](https://sapui5.hana.ondemand.com/explored.html#/entity/sap.uxap.BlockBase/about) in an [Object Page SubSection](https://sapui5.hana.ondemand.com/explored.html#/entity/sap.uxap.ObjectPageSubSection/about).

The item in List A does have three secondary references, the item in List B does have four secondary references (see [ASet.json](webapp/localService/mockdata/ASet.json) and [BSet.json](webapp/localService/mockdata/BSet.json)).

### Steps to reproduce the error
After starting the app simply click on the navigation list item *List A* and choose the only available item to get to the detail view.

![Overview](screenshots/screen-01.png?raw=true "Overview")
![List A](screenshots/screen-02.png?raw=true "List A")
![Item of List A](screenshots/screen-03.png?raw=true "Item of List A 1/2")
![Item of List A](screenshots/screen-04.png?raw=true "Item of List A 2/2")

After that, click on the navigation list item *List B* and select the item on this list.

![List B](screenshots/screen-05.png?raw=true "List B")
![Item of List B](screenshots/screen-06.png?raw=true "Item of List B")

Et voilà, the aforementioned error occurs.

![List B](screenshots/screen-07.png?raw=true "Error")

This error only occurs if you view an item with less references before. If you reload the app and directly navigate to *list item B* all four references are shown:
![All four references in list item B](screenshots/screen-08.png?raw=true "All references in list item B")

### Demo
A demo is available on [Plunker](http://run.plnkr.co/plunks/42tLCcdbNxBDtcQ5MUY1/).