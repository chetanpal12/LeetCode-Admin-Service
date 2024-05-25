const {StatusCodes}=require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req,res){
    return res.json({message:'problem contoller is up'})
}

function addProblem(req,res,next){
    try {
        // nothing implemented
        // throw new BadRequest('Problem Name', {missing: ["Problem Name"]});
        throw new NotImplemented('addProblem');
    } catch(error) {
        next(error);
    }
}

function getProblem(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch(error) {
        next(error);
    }
}

function getProblems(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch(error) {
        next(error);
    }
}

function deleteProblem(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch(error) {
        next(error);
    }
}

function updateProblem(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch(error) {
        next(error);
    }
}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}




/**
 * 
 * res
 * 
 * res.status -> returns the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 * 
 */
