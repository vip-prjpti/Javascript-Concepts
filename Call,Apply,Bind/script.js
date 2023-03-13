//this is self referencing.
//It is used to point to the object and can access the properties of that object.


let userDetails={
    name:"Vipul Prajapati",
    Age:22,
    Designation:"Front End Engineer",
    printDetails:function(state,country){
        console.log(this.name+" "+state+" "+country);
    }
}

let userDetails2={
    name:"Sahil Prajapati",
    Age:30,
    Designation:"Front End Engineer",
    
}

let userDetails3={
    name:"Dhruv Prajapati",
    Age:18,
    Designation:"Back End Engineer",
    
}


// userDetails.printDetails();
// userDetails.printDetails.call(userDetails2,"Delhi","India");
// userDetails.printDetails.apply(userDetails3,["Punjab","India"]);
// let newFun = userDetails.printDetails.bind(userDetails,"Bangalore","India");
// console.log(newFun());



//*****************************pollyfill for call*****************************
Function.prototype.myCall = function(context = {}, ...args){
    //error handling - if context received is not a function
    if(typeof this!=='function')
    {
        throw new Error(this + "It's not a function");
    }
    context.fn=this;
    context.fn(...args);
};

userDetails.printDetails.myCall(userDetails2,"Delhi","India");


// *******************************pollyfill for Apply**************************
Function.prototype.myApply = function(context = {}, args=[]){
    //error handling - if context received is not a function
    if(typeof this!=='function')
    {
        throw new Error(this + "It's not a function");
    }
    if(!Array.isArray(args)) {
        throw new TypeError("Cannot call a non-object on a nonArray");
    }
    context.fn=this;
    context.fn(...args);
};

userDetails.printDetails.myApply(userDetails3,["Delhi","India"]);
