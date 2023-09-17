use('Company')

db.getCollection('Employees7').insertMany
(
  [
    {
      'ID': '1001','Sno': '1','Name':'George','Joined ':'3 years ago','Employee_rating':'7','Place_of_Living':'New York'
    },
    {
      'ID': '1002','Sno': '2','Name':'Patrick','Joined':'4 years ago','Employee_rating':'8','Place_of_Living':'Washinton'
    },
    {
      'ID': '1003','Sno': '3','Name':'John','Joined':'4 years ago','Employee_rating':'8','Place_of_Living':'New York'
    },
    {
      'ID': '1004','Sno': '4','Name':'David','Joined':'3 years ago','Employee_rating':'7','Place_of_Living':'Queens'
    },
    {
      'ID': '1005','Sno': '5','Name':'Chadvick','Joined':'5 years ago','Employee_rating':'9','Place_of_Living':'Paris'
    }
  ]
)
//Using '$regex' operator for displaying given word related documents
db.Employees7.find({"Name": {$regex: 'Chadvick'}})

//Using '$text' operator for displaying given word related documents by using field as filter

db.Employees7.createIndex({ "Place_of_Living": "text"})// Creating Index for field

db.Employees7.find({ $text: { $search: "York"}})

