const router = require('express').Router();
const Resources = require('./resourceModel.js')

router.get('/', (req,res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error getting resources! `})
        })
})

router.get('/:id', (req,res) => {
    const {id} = req.params
    Resources.getById(id)
        .then(resource => {
            if(resource){
                res.status(200).json(resource);
            }
            else{
                res.status(404).json({message: `error retrieving the project.`})
            }
        })
})

router.post("/", (req, res) => {
    const resource = req.body;
    Resources.add(resource)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: "Error adding resource to database" });
      });
});

module.exports = router;