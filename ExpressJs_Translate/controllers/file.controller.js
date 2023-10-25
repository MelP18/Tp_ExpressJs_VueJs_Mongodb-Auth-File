const fileModel = require('../models/file.model')
const multer = require('multer')
var fs = require('fs');
var path = require('path');

//const { Buffer } = require('buffer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });


const addFile = async (req, res, next) => {

    const pathFil = fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename))
    var file = new fileModel({
        title: req.body.title,
        description: req.body.description,
        file: pathFil
    })

    try {
        const newFile = await file.save()

        if (newFile) {
            res.status(201).send('Fichier ajouté avec succès')

        } else {
            res.status(400).send('Model/Schema non valid')
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const getFile = (req, res) => {
    fileModel.find({})
        .then((data, err) => {
            if (err) {
                console.log(err);
                res.status(400).send('Erreur lors de la récupération des fichiers')
            } 
            if(data.length === 0) {
                res.status(400).send('Acunn Fichier Trouvé')
            }

            const fileData = data.map(item =>{
                const buffer = item.file

                console.log(buffer);
                

                if(buffer){
                    const dataURL = `data:application/octet-stream;base64,${buffer.toString('base64')}`;
                    console.log(dataURL);
                    return{
                        title:item.title,
                        description: item.description,
                        file: dataURL
                    }            
                }   
            })
            
            res.status(200).json(fileData)
        })
        .catch((error)=>{
            res.status(500).json({message: error.message})
        })
}


module.exports =
{
    addFile,
    storage,
    upload,
    getFile
}