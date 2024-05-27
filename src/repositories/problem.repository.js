const {Problem}=require('../models');
const NotFound = require('../errors/notfound.error');
const BadRequest = require('../errors/badrequest.error');

class ProblemRepository{
    async createProblem(problemData){
        console.log("repository problemdata",problemData);
        try {
            const problem=await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases:(problemData.testCases)?problemData.testCases:[]
            })
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems=await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemId){
        try {
            const problem=await Problem.findById(problemId);
            if(!problem) {
                throw new NotFound("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId){
        try {
            const problem=await Problem.findByIdAndDelete(problemId);
            console.log("problem",problem)
            if(!problem) {
                throw new NotFound("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(problemId,dataToUpdate){
        try {
            // console.log("problemID",problemId,"dataToUpadate",dataToUpdate)
            const filter={_id:problemId};
            const problem=await Problem.findOneAndUpdate(filter,dataToUpdate,{new:true});
            // console.log("problem from repository",problem);
            if(!problem){
                throw new NotFound("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log("updateError from repository",error)
            if (error.name === 'CastError' && error.kind === 'ObjectId') {
                throw new BadRequest("update","Invalid id provided,Please provide the valid id");
            }
            throw error;
        }
    }
}

module.exports=ProblemRepository;