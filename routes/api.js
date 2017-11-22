var express= require("express");
var router= express.Router();
var models= require("../server/models");
var db = models.db;
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;
var Promise =  require("bluebird");
module.exports=router;

router.get("/", function(req,res,next){
    console.log("ejkhagjşlrkhşg");
    var proArr=[];
    var hotels = Hotel.findAll({include : [Place]})
    var restaurants =  Restaurant.findAll({include : [Place]});
    var activities = Activity.findAll({include : [Place]});
    var places =  Place.findAll({}); 
    proArr.push(hotels,restaurants,activities,places);
    Promise.all(proArr).
    then(function(result){
        res.send(result);
    }).
    catch(function(err){
        next(err);
    });
    
}) ;





