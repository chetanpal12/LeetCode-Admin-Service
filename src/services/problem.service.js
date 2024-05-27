const sanitizeMarkdownContent = require("../utils/markdownSanitizer")

class ProblemService{
    constructor(problemRepository){
        this.problemRepository=problemRepository
    }
                                        // we store business logic in service layer

    async createProblem(problemData){
        try {
            console.log("problemdata from service",problemData)
            //1. Sanitize the markdown for description
            problemData.description=sanitizeMarkdownContent(problemData.description);


            const problem =await this.problemRepository.createProblem(problemData);
            console.log("problem created",problem);

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async getAllProblems(){
        try {
            const problems=await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async getProblem(problemId){
        try {
            const problem=await this.problemRepository.getProblem(problemId);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async deleteProblem(problemId){
        try {
            const problem=await this.problemRepository.deleteProblem(problemId);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async updateProblem(problemId,dataToUpadate){
        try {
            // console.log("data from service for update",dataToUpadate,problemId);
            if(dataToUpadate.description){
                dataToUpadate.description=sanitizeMarkdownContent(dataToUpadate.description);
            }
            // console.log("data after sanitize",dataToUpadate);
            const problem=await this.problemRepository.updateProblem(problemId,dataToUpadate);
            return problem;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=ProblemService