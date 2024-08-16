/* global db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'car';
const collection = 'locations';


// const imagePaths = [
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',
//   'https://www.shutterstock.com/image-photo/modern-subcompact-crossover-suv-beautiful-600w-2265832113.jpg',

// ];
// Use the database.
db = db.getSiblingDB(database);

// Function to update all documents with the image paths
// const updateDocumentsWithImages = () => {
//   const cursor = db[collection].find();
//   let index = 0;
  
//   while (cursor.hasNext()) {
//     const doc = cursor.next();
//     const imagePath = imagePaths[index % imagePaths.length];
//     db[collection].updateOne(
//       { _id: doc._id },
//       { $set: { image: imagePath } }
//     );
//     index++;
//   }
// };

// updateDocumentsWithImages();

// db.locations.insertMany([
//   {
//     name_location: "Yogyakarta",
    
//   },
//   {
//     name_location: "Jakarta",
    
//   },
//   {
//     name_location: "Bali",
    
//   },
//   {
//     name_location: "Bandung",

//   },
//   {
//     name_location: "Surabaya",
   
//   }
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



// Create a new collection and insert documents.
// db.createCollection(collection);
// db.reservations.insertMany([
//     {
//       "_id": "1",
//       "userId": "66b2769c8aee332cac17b547",
//       "vehicleId": 165,
//       "qty": 3,
//       "subTotal": 20000,
//       "startDate": ISODate("2021-08-26T00:00:00Z"),
//       "expDate": ISODate("2021-08-26T00:00:00Z"),
//       "status": "pending",
//       "createdAt": ISODate("2021-08-26T00:00:00Z"),
//       "updatedAt": ISODate("2021-08-26T00:00:00Z")
//     }
//   ]);
 

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
