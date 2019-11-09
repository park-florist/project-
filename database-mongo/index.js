var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rbkres');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema =  mongoose.Schema({
  name :'',
      mobile :'',
      address : '',
      sandwicth : '',
      meat : ''

});

var Item = mongoose.model('Item', itemSchema);


let saving = data =>{
  console.log("this in Schema" , data)
  console.log('saving')
  var instances = new Item({
    name :data["name"],
      mobile :data["mobile"],
      address : data["address"],
      sandwicth : data["sandwicth"],
      meat : data["meat"]


  })
  instances.save()
}



var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      console.log(items     )
      callback(null, items);

    }
  });
  // Item.find({}, function(err, data) {})
  //  .exec(function(err, data) {
  //    console.log(data);
 
   };

  // const cursor = Item.find().cursor();

// for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
//   // Use `doc`
//   console.log(doc)
// }
// };

module.exports.selectAll = selectAll;
module.exports.saving = saving;
module.exports.Item = Item;




// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/islamtest");

// var db = mongoose.connection;

// db.on("error", function() {
//     console.log("mongoose connection error");
// });

// db.once("open", function() {
//     console.log("mongoose connected successfully");
// });

// var weatherSchema = mongoose.Schema({
//     i_user_id: { type: Number, unique: true },
//     d_latitude: String,
//     d_lonigtude: String,
//     s_user_name: { type: String, unique: true }
// });

// var User = mongoose.model("User", weatherSchema);
// var selectAll = function(callback) {
//     User.find({}, function(err, items) {
//         if (err) {
//             callback(err, null);
//         } else {
//           console.log(items)
//             callback(null, items);
//         }
//     });
// };

// var save = function(userData) {
//     var usr = new User({
//         i_user_id: new Date().getMilliseconds(),
//         d_latitude: userData.latitude,
//         d_lonigtude: userData.longitude,
//         s_user_name: userData.userName
//     });
//     usr.save();
// };

// module.exports.selectAll = selectAll;
// module.exports.save = save;