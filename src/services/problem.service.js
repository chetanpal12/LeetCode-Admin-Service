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
}

module.exports=ProblemService