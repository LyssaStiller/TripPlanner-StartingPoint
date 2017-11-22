var Sequelize = require("sequelize");
//var db = new Sequelize('postgres://localhost:5432'+'/tripplaner'); 
var db = new Sequelize("postgres://ubuntu:1234@localhost/tripplaner") ////it is for sazi

var Place = db.define("place", {
    
    address:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    city:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    state:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    phone:{
        type: Sequelize.STRING
    },
    
    location:{
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull:false
    }
});

var Hotel = db.define("hotel", {
    
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    num_stars:{
        type: Sequelize.FLOAT
        
    },
    
    amenities:{
        type: Sequelize.STRING
    }
});

var Activity = db.define("activity", {
    
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    age_range:{
        type: Sequelize.STRING
        
    }
});

var Restaurant = db.define("restaurant", {
    
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    cousine:{
        type: Sequelize.STRING
        
    },
    
    price:{
        type: Sequelize.INTEGER
    }
});




Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
    db: db,
    Activity : Activity,
    Restaurant : Restaurant,
    Hotel : Hotel,
    Place : Place
}
