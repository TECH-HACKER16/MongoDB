use('Company')

db.getCollection('Employees6').insertMany
(
  [
    {
      'Sno': '1','Name':'George','Joined ':'3 years ago','Employee_rating':'7','Place_of_Living':'New York'
    },
    {
      'Sno': '2','Name':'Patrick','Joined':'4 years ago','Employee_rating':'8','Place_of_Living':'Washinton'
    },
    {
      'Sno': '3','Name':'John','Joined':'4 years ago','Employee_rating':'8','Place_of_Living':'New York'
    },
    {
      'Sno': '4','Name':'David','Joined':'3 years ago','Employee_rating':'7','Place_of_Living':'Queens'
    },
    {
      'Sno': '5','Name':'Chadvick','Joined':'5 years ago','Employee_rating':'9','Place_of_Living':'Paris'
    }
  ]
)
//Using '$and' operator for satifying two conditions
db.Employees6.find({$and: [{"Sno":"2"}, {"Joined":"4 years ago"}]})

//Using '$nor' operator for Excluding given two conditions
db.Employees6.find({$nor: [{"Sno":"6"}, {"Joined":"5 years ago"}]})

//Using '$or' operator for satifying any one condition
db.Employees6.find({$or: [{"Sno":"3"}, {"Joined":"5 years ago"}]})

//Using '$not' operator for satisfying given condition and that condition to be excluded
db.Employees6.find({"Employee_rating":{$not: {$gt:"8"}}})


