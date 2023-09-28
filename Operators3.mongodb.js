use('Company')

db.getCollection('Employees9').insertMany
(
  [
    {
      'Sno': '1','Name':'George','Joined ':'3 years ago','Employee_rating':7,'Place_of_Living':'New York'
    },
    {
      'Sno': '2','Name':'Patrick','Joined':'4 years ago','Employee_rating':8,'Place_of_Living':'Washinton'
    },
    {
      'Sno': '3','Name':'John','Joined':'4 years ago','Employee_rating':8,'Place_of_Living':'New York'
    },
    {
      'Sno': '4','Name':'David','Joined':'3 years ago','Employee_rating':7,'Place_of_Living':'Queens'
    },
    {
      'Sno': '5','Name':'Chadvick','Joined':'5 years ago','Employee_rating':9,'Place_of_Living':'Paris'
    }
  ]
)
//Increases value given field or document data by given value
db.Employees9.updateOne({Sno:"1"},{$inc:{Employee_rating:1}})


