use('Company')

db.getCollection('Employees1').insertMany
(
    [
        {
            'Sno': '1','Name':'George','Joined':'3 years ago'
        },
        {
            'Sno': '2','Name':'Patrick','Joined':'4 years ago'
        },
        {
            'Sno': '3','Name':'John','Joined':'4 years ago'
        },
        {
            'Sno': '4','Name':'David','Joined':'3 years ago'
        },
        {
            'Sno': '5','Name':'Chadvick','Joined':'5 years ago'
        }
    ]
)
//Searching documents using 'find' function
db.Employees1.find( { Sno: "4" } )  