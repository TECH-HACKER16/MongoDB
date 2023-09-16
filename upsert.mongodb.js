use('Company')

db.getCollection('Employees3').insertMany
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
db.Employees3.updateOne( 
    { Sno:6 }, 
    {
      $set: 
        {
            Sno:6,
            Name: "Anthony",
            Joined:"7 years ago"
        }
    }, 
    // Using upsert command to add document if the given data didn't exists
    { upsert: true }// given true as value allows to add document 
  )        