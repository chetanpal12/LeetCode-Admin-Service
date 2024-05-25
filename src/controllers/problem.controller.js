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
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    })
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    })
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    })
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:'Not Implemented'
    })
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
