use('Company')

db.getCollection('Employees4').insertMany
(
    [
        {
            'Sno': '1','Name':'George','Joined ':'3 years ago','Employee_rating':'7'
        },
        {
            'Sno': '2','Name':'Patrick','Joined':'4 years ago','Employee_rating':'8'
        },
        {
            'Sno': '3','Name':'John','Joined':'4 years ago','Employee_rating':'8'
        },
        {
            'Sno': '4','Name':'David','Joined':'3 years ago','Employee_rating':'7'
        },
        {
            'Sno': '5','Name':'Chadvick','Joined':'5 years ago','Employee_rating':'9'
        }
    ]
)
//Tip:-  Use 'deleteMany' function instead of 'deleteOne' to delete multiple documents
db.Employees4.deleteOne({ Name: "Chadvick" })
       
