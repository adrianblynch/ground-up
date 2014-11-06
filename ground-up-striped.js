/* Things = new Mongo.Collection("things");

if (Meteor.isClient) {

	Template.body.helpers({
		things: function() {
			return Things.find();
		}
	});

	Template.body.events({
		"submit #newThing": function(event) {

			var newThing = event.target.newThing.value;

			Things.insert({text: newThing});

			event.target.newThing.value = "";

			return false;
		}
	});

} */
