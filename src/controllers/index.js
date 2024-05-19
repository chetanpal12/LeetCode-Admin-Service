// why we make the index.js file in controller ?
// If we did't make the index.js file then there is a situation in which we have to import the multiple require statement for every function.


module.exports={
    ProblemController:require('./problem.controller')
}