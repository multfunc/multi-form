const stringJudgement={
    isNull(string){
        return string===null
    },
    isEmpty(string){
        return string===''
    },
    isUndefined(string){
        return string===undefined
    },
    isNullOrEmptyUndefined(string){
        return string===null||string===''||string===undefined
    }
}

module.exports=stringJudgement
