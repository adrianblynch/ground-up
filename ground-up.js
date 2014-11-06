// 1. Setup for the incrementor, a helper and events

if (Meteor.isClient) {

	// Set default at the start
	Session.setDefault("counter", 0);

	// Provide the template with a way to get the current counter
	Template.hello.helpers({
		//counter: "sod all"
		counter: function () {
			return Session.get("counter");
		}
	});

	// Map a button click to some behaviour
	Template.hello.events({
		'click button': function () {
			Session.set("counter", Session.get("counter") + 1);
		}
	});

}

// 2. Loop over a collection

/*if (Meteor.isClient) {

	Template.body.helpers({
		things: [
			{text: "Thing 1"},
			{text: "Thing 2"},
			{text: "Thing 3"}
		]
	});

}*/

// 3a. Data in a database

// Creates a new `things` collection available to both client and server (not on the server till the first insert)
/*Things = new Mongo.Collection("things");

if (Meteor.isClient) {

	Template.body.helpers({
		things: function() {
			return Things.find();
		}
	});

	// 3b. Nothing is in this collection until we run the following in the Mongo shell:
	// db.things.insert({text: "Thing from the DB 1"});
	// db.things.insert({text: "Thing from the DB 2"});

	// 4. Event mapping to behaviour
	// Template.body.events({
	// 	"submit #newThing": function(event) {

	// 		var newThing = event.target.newThing.value;

	// 		Things.insert({text: newThing});

	// 		event.target.newThing.value = "";

	// 		return false;

	// 	}
	// });

}*/
