// import posts from "./tuits.js";
// let tuits = posts;

import * as tuitsDao from './tuits-dao.js'

const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    console.log(tuits)
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    console.log("from node server, createTuit tuit-controller, print new tuit");
    console.log(newTuit);
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter(t =>
    //     t._id !== tuitdIdToDelete);
    res.json(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}


// const findTuits = (req, res) =>
//     res.json(tuits);


// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = parseInt(new Date().getTime()+'');
//     newTuit.likes = 0;
//     newTuit.liked = false;
//     newTuit.dislikes = 0;
//     newTuit.disliked = false;
//     newTuit.replies = 0;
//     newTuit.retuits = 0;
//     tuits.push(newTuit);
//     res.json(newTuit);
// }



// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = parseInt(req.params.tid);
//     const updates = req.body;
//     const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
//     tuits[tuitIndex] =
//         {...tuits[tuitIndex], ...updates};
//     res.json(tuits);
//     // res.sendStatus(200);
// }


// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = parseInt(req.params['tid']);
//     tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }

export default TuitsController





