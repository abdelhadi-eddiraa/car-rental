/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('car');

// Insert a few documents into the sales collection.
// db.getCollection('sales').insertMany([
//   { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
//   { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
// Retrieve location IDs
var locationYogyakarta = db.locations.findOne({ name_location: "Yogyakarta" });
var locationYogyakartaId = locationYogyakarta._id;

var locationJakarta = db.locations.findOne({ name_location: "Jakarta" });
var locationJakartaId = locationJakarta._id;

var locationBali = db.locations.findOne({ name_location: "Bali" });
var locationBaliId = locationBali._id;

var locationBandung = db.locations.findOne({ name_location: "Bandung" });
var locationBandungId = locationBandung._id;

var locationSurabaya = db.locations.findOne({ name_location: "Surabaya" });
var locationSurabayaId = locationSurabaya._id;

// Insert vehicles
db.vehicles.insertMany([
  {
    location_id: locationYogyakartaId,
    category_id: 2,
    name: "Trail",
    description: "Adventure ready",
    price: 100000,
    status: "Available",
    image: [
      "http://localhost:4000/file/1629469324244-dave-goudreau-8ZfrYgVcU6A-unsplash.jpg",
      "http://localhost:4000/file/1629469324268-iqx-azmi-jn01MSrsUpE-unsplash.jpg"
    ],
    stock: 10
  },
  {
    location_id: locationJakartaId,
    category_id: 1,
    name: "Urban Cruiser",
    description: "City vehicle",
    price: 80000,
    status: "Available",
    image: [
      "http://localhost:4000/file/1629469324244-urban-cruiser-1.jpg",
      "http://localhost:4000/file/1629469324268-urban-cruiser-2.jpg"
    ],
    stock: 5
  },
  {
    location_id: locationBaliId,
    category_id: 3,
    name: "Bali Beach Buggy",
    description: "For beach fun",
    price: 120000,
    status: "Available",
    image: [
      "http://localhost:4000/file/1629469324244-bali-beach-buggy-1.jpg",
      "http://localhost:4000/file/1629469324268-bali-beach-buggy-2.jpg"
    ],
    stock: 7
  },
  {
    location_id: locationBandungId,
    category_id: 2,
    name: "Bandung Explorer",
    description: "Exploration vehicle",
    price: 95000,
    status: "Available",
    image: [
      "http://localhost:4000/file/1629469324244-bandung-explorer-1.jpg",
      "http://localhost:4000/file/1629469324268-bandung-explorer-2.jpg"
    ],
    stock: 3
  },
  {
    location_id: locationSurabayaId,
    category_id: 1,
    name: "Surabaya Sedan",
    description: "Luxury sedan",
    price: 150000,
    status: "Available",
    image: [
      "http://localhost:4000/file/1629469324244-surabaya-sedan-1.jpg",
      "http://localhost:4000/file/1629469324268-surabaya-sedan-2.jpg"
    ],
    stock: 4
  }
]);