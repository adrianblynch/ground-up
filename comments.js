/*

Meteor

What is it?

It's a Node application built from the ground up with support for real-time applications.

It's isomorphic - Your app runs on the server and the client.

It's an ecosystem with a package manager and deployment tools.

It's opinionated. But it won't ram everything down your throat.

It's a company, much like Joyent or MongoDB (formally 10gen) and they raised over $11 million from Andreessen Horowitz (Box, AirBNB and some site called Facebook)

It's growing. There are over 2500 packages available.

And today happens to be Meteor day! meteorday.com

There's a meetup tonight if you want to know more. www.meetup.com/Meteor-London/events/212413162/

It's being held up the road at Mind Candy, the company behind Moshi monsters. mindcandy.com

You'll need to...

- Download and install Meteor by running `curl https://install.meteor.com/ | sh`
- Create a new application with `meteor create myApp`
- Go into the newly created app directory and run `meteor`
- Browse to localhost:3000 to view the new app

Commands

- Fire up Mongo `meteor mongo`
- To deploy `meteor deploy ground-up.meteor.com`
- To remove deployment `meteor deploy --delete ground-up.meteor.com`
- To clear Mongo collection `db.things.drop()`
- To reset the project `meteor reset` - Which also drops the collections in Mongo

Things to note

By default, to aid development, the full Mongo DB is replicated on all clients and all changes are propergated straight away.

The router maps to a template and a layout. It can show a loading template whilst it waits on data to be loaded.

*/