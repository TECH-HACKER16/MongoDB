use('Company')

db.getCollection('Employees5').insertMany
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
/*Using '$eq' operator to find and retrieve given condition result
Likewise use '$ne' for not equal to condition*/
db.Employees5.find({"Sno": { $eq: "5"}})       

/*Using '$gt' operator to find greater value than the given value
Likewise use '$lt' operator for lower values*/
db.Employees5.find({"Employee_rating": { $gt: "8"}})

/*Using '$gte' operator to greater than or equal to condition
Likewise use '$lte' for lesser than or equal to condition */
db.Employees5.find({"Employee_rating": { $gte: "8"}})