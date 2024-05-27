const {StatusCodes}=require('http-status-codes');
const {ProblemService}=require('../services');
const {ProblemRepository} = require('../repositories');
const BadRequest = require('../errors/badrequest.error');

const problemService=new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    return res.json({message:'problem contoller is up'})
}

async function addProblem(req,res,next){
    try {
        console.log("incoming req body",req.body)
       const newProblem=await problemService.createProblem(req.body);
       return res.status(StatusCodes.CREATED).json({
        success:true,
        message:'Successfully Created a new Problem',
        error:{},
        data:newProblem
       })
    } catch(error) {
        next(error);
    }
}
async function getProblem(req,res,next){
    try {
        // throw new NotImplemented('addProblem');
        const getProblem=await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:`Successfully find Problem with id-> ${req.params.id} `,
            error:{},
            data:getProblem
        })
    } catch(error) {
        next(error);
    }
}

async function getProblems(req,res,next){
    try {
        // throw new NotImplemented('addProblem');
        const allProblems=await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully find all Problems',
            error:{},
            data:allProblems
        })
    } catch(error) {
        next(error);
    }
}

async function deleteProblem(req,res,next){
    try {
        // throw new NotImplemented('addProblem');
        const deleteProblem=await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:`Successfully delete Problem with id-> ${req.params.id} `,
            error:{},
            data:deleteProblem
        })
    } catch(error) {
        next(error);
    }
}

async function updateProblem(req,res,next){
    try {
        // console.log("data in controller",req.body);
        if(Object.keys(req.body).length === 0){
            throw new BadRequest("update","which property to update is missing or not sent by the user")
        }
        const updateProblem=await problemService.updateProblem(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
        success:true,
        message:`Successfully update Problem with id-> ${req.params.id} `,
        error:{},
        data:updateProblem
        })
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
