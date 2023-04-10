// examples:

let newCars = 
[
    {id:1, name:"Bugati ciron"},
    {id:2, name:"Bugati CR7"},
    {id:3, name:"Ferari "},

]

module.exports.getAllCars = (req, res, next) => {
    res.send(newCars)
}

module.exports.postAllCars = (req, res, nex) => {
    res.send("cars Added")
}

module.exports.carsDetails = (req,res)=>{
    const {id} = req.params;
   
    const foundCars = newCars.find(car => car.id == id)
    res.send(foundCars)
}

module.exports.updateTool = (req , res) => {
    // const newData = req.body;

    const {id} = req.params;
    const filter = {_id: id};

    const newData = newCars.find(car => car.id === Number(id));

    newData.id = id;
    newData.name = req.body.name;
    res.send(newData)


}

module.exports.deleteCar = (req, res) =>{
    const {id} = req.params;
    const filter = {_id:id};

    newCars =  newCars.filter(car => car.id !== Number(id))
    res.send(newCars)
}