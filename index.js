function receivesAFunction(goToTheGym){
    goToTheGym();
}

function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction(){
    return function(){};
}