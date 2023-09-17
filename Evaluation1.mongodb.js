use('Market')

db.getCollection('Vegetables').insertMany
(
  [
    {
      "Sno" : "1", "Vegetable_Name" : "Tomato", "Old_Price": "100", "New_Price": "175" 
    },
    {
      "Sno" : "2", "Vegetable_Name" : "Brinjal", "Old_Price": "80", "New_Price": "90" 
    },
    {
      "Sno" : "3", "Vegetable_Name" : "Drumsticks", "Old_Price": "30", "New_Price": "20"
    },
    {
      "Sno" : "4", "Vegetable_Name" : "Potatoes", "Old_Price": "120", "New_Price": "150" 
    },
    {
      "Sno" : "5", "Vegetable_Name" : "Carrot", "Old_Price": "90", "New_Price": "85" 
    }
  ]
)
//Using '$expr' function to compare given two fields
db.Vegetables.find( { $expr: { $gt: [ "$Old_Price" , "$New_Price" ] } } )//Compares old price & new price and gives decreased price in new price field

db.Vegetables.find( { $expr: { $gt: [ "$New_Price" , "$Old_Price" ] } } )//Compares old price & new price and gives increased price in new price field