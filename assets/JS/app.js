const cl = console.log;

//HOF >> Array helping methods >> A function which accepts another function as argument is called HOF
//callback function >> A function which passed as argument in another function
//OR
//A function which we will call after something happend or execute

//forEach :
//can not returns 
//can not create new array automatically.

//map : 
//we have given array and we have to create new array
//it returns a new array
//by applying same functionality on every element of the given array

//filter:
//we have given array with at least one condition
//we have to create a array of those element who pass the given condition
//length of the new arrray may be or may not == length of the given array
//it will return the all element (in the form of array) who satisfied the given conditions
//if there is no element who satisfies given condition === [];
//it will gives us array not element
//filter ke callback function ke block me direct condition ko return karo

//find:
//we have given array with at least one condition 
//we have to find a element who pass the condition
//it will return the 1st element who satisfied the given condition 
//if there is no element who satisfied given condition === undefined
//it will give us single value / element (not array)

//findindex: 

//sort: it sort the numbers by lexico graphical comparision

//reduce:

//---------Example 1: do addition of the numbers given in the array----------------// 

//By using forEach
var age =[10,20,5,15,30];
let result = 0;
age.forEach((params) =>{
    result += params;
});
cl(result);//80

//By using for of
var age =[10,20,5,15,30];
let result1 = 0;
for(let key of age){
    result1 += key;
}
cl(result1);//80

//By using reduce
var age =[10,20,5,15,30];
let result2 = age.reduce((acc,cv) =>{ //acc = accumulator : cv = current value
    acc = acc + cv;
    return acc; // always return accumulator
})
cl(result2);//80

//By using reduce
var age =[10,20,5,15,30];
let result3 = age.reduce((acc,cv) =>{
    acc = acc + cv;
    return acc;
},0)
cl(result3);//80

//---------Example 2: do multiplication of the numbers given in the array----------------// 

//By using reduce
var age =[10,20,5,15,30];
let result4 = age.reduce((acc,cv) =>{
    acc = acc * cv;
    return acc;
},1)
cl(result4);//450000


//---------Example 3: do double of the numbers given in the array----------------// 

//By using reduce
var age =[10,20,5,15,30];
let result5 = age.reduce((acc,cv) =>{
    acc.push(cv * 2);
    return acc;
} , []);
cl(result5);//[20, 40, 10, 30, 60]


//---------Example 4: output will be ['the value is 10','the value is 20'.........]----------------// 

//By using reduce
var age =[10,20,5,15,30];
let result6 = age.reduce((acc,cv) =>{
    acc.push(`the value is ${cv}`);
    return acc;
},[]);
cl(result6);


//---------Example 5: return sqaure root of given array-----------------------------// 

//By using reduce
var age =[10,20,5,15,30];
let result7 = age.reduce((acc,cv) =>{
    acc.push(+Math.sqrt(cv).toFixed(2));
    return acc;
},[]);
cl(result7);


//---------Example 6:  output will be ['the value is 10','the value is 20' -----------------------------// 

//By using reduce
var age =[10,20,5,15,30];
let result8 = age.reduce((acc,cv,i) =>{
    if(i === age.length - 1){
        acc += `The value is ${cv}.`
    }else{
        acc += `The value is ${cv},`
    }
    return acc;
},'');
cl(result8); 


//---------Example 7: Find the total age of company -----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result9 = companies.reduce((acc,cv) =>{
    acc = acc + (cv.end - cv.start);
    return acc;
},0);
cl(result9);


//---------Example 8: return the company names -----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result01 = companies.reduce((acc,cv) =>{
    acc.push(cv.name);
    return acc;
},[]);
cl(result01);


//---------Example 9: return the company names with years -----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result02 = companies.reduce((acc, cv) =>{
    acc.push(`${cv.name} - ${cv.end - cv.start} years`);
    return acc;
},[]);
cl(result02);


//---------Example 10: return the company names with start and end years -----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result03 = companies.reduce((acc,cv) =>{
    acc.push(`${cv.name} (${cv.start} ${cv.end})`)
    return acc;
},[])
cl(result03);


//---------Example 11: return the company names with category , start and end years -----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result04 = companies.reduce((acc,cv) =>{
    acc.push(`${cv.name} - ${cv.category}(${cv.start} - ${cv.end})`)
    return acc;
},[]);
cl(result04);


//---------Example 12: return the company names with lifespan in array of objects-----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result05 = companies.reduce((acc,cv) =>{
    acc.push({
        compName : cv.name,
        lifespan : `${cv.start} - ${cv.end}`
    })
 return acc;
},[]);
cl(result05);


//---------Example 13: return the company names with duration in array of objects-----------------------------// 

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result06 = companies.reduce((acc,cv) =>{
    acc.push({
        compName : cv.name,
        duration : `${cv.end - cv.start} Years`
    })
    return acc;
},[]);
cl(result06);


//---------Example 14: return
//[
//    "The company name is company one and category is finance and it run for 22 years",
//    "The company name is company two and category is retail and it run for 16 years",
//]

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result07 = companies.reduce((acc, cv) =>{
    acc.push(`The company name is ${cv.name} and category is ${cv.category} and it run for ${cv.end - cv.start} years`)
    return acc;
},[]);
cl(result07);


//---------Example 15: return this type array of object and category must be retail
//[
//   {name: "company two", id = 2, category: retail, start : 1992, end:2008},
//   {name: "company four", id = 4, category: Retail, start : 1989, end:2010}
//]

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result08 = companies.reduce((acc,cv) =>{
    if(cv.category.toLowerCase().includes('retail')){
        acc.push(cv);
    }
    return acc;
},[]);
cl(result08);


//---------Example 16: create a array of comp who run for at least 10 years

//By using reduce
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];
let result09 = companies.reduce((acc,cv) =>{
    if(cv.end - cv.start >= 10){
        acc.push(cv);
    }
    return acc;
},[]);
cl(result09);

//By using filter
let result10 = companies.filter((params) =>{
    return(params.category.toLowerCase().includes('retail') && (params.end - params.start >= 10))
});
cl(result10);
