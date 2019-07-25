'use strict';

// YOU KNOW WHAT TO DO //

/**
*identity: Designed to return values unchanged. The same value that is used as an arguement is the same 
* value that's returned.
* @param: {value} value
* @return {value} 
*/
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
* typeOf: Designed to return a string that indicates the type of the unevaluated value.
* @param: {value} value
* @return {string}: That indicates the "type" of the unevaluated value.
*/ 
function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    }else if(value === null){
        return "null";
    }else if(value instanceof Date){
        return "date";
    }else{
        return typeof value;
    }
    }
module.exports.typeOf = typeOf;

/**
 * first: Gets the first number of elements in an array.
 * @param: {Array}array: An array of elements.
 * @param:{number}num: A number value.
 * @return{Array}: Return the first number of elements in the array.
 */
function first(collection, value) {
    if (!Array.isArray(collection) || value < 0) {
        return [];

    }
    if (!value || value === 1) {
        return collection[0];
    }
        return collection.slice(0, value);
    }
module.exports.first = first;

/**
 * last: Gets the last number of elements in an array .
 * @param {Array} array
 * @return {Array}num: Returns the last number of elemets in an array.
 */
function last(collection, value){
    if(!Array.isArray(collection) || value < 0){
        return [];
    }
    if (typeof value !== "number" || value === 1) {
        return collection[collection.length-1];
    }
    if(value >= collection.length){
        return collection;
    }
        return collection.slice( - value);
    }
module.exports.last = last;    

/**
 *IndexOf: Gets the index at which the first occurence of value is found in the array.
 * @param {Array} array: to inspect 
 * @param {value} value: to search 
 * @return {value}: Returns the value at which the index is found or -1 if no index is found. 
 */ 
function indexOf(array, value){
    for(let i = 0; i < array.length; i++ ){
        if(array[i] === value){
            return 1;
        }
    }
    return -1;
    }
module.exports.indexOf = indexOf;

/**
 * contains: Designed to check if a value is in a collection. 
 * @param {Array or Object}array: collection to inspect 
 * @param {value}value: to search for
 * @returns {boolean}: if value is found in list
 */ 
function contains(array, value){
     let result = false;
    for(let i = 0; i < array.length; i++){
     if(value === array[i]){
     result = value === array[i] ? true: result;
         
     }
    }
 return result;
    }
module.exports.contains = contains;  

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return {Array or Object} collection
 */
 function each(collection, test){
 if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
            test(collection[i],i,collection);
        }
    }
    if(typeOf(collection) === "object"){
        for(var key in collection){
            test(collection[key], key, collection);
        }
    }
    
    }
module.exports.each = each;

/**
 * unique: Designed to create a duplicate-free version of an array and uses strictly equal to test
 * the object's equality.  
 * @param {Array} array: to inspect
 * @return {Array}: Returns a new duplicate free array
 */ 
function unique(array) {
    let newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (indexOf(newArr, array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
    }
module.exports.unique = unique;

/**
 * filter: Designed to look through each value in a list.
 * @param {Array or Object} array: The collection to iterate (filter) over.
 * @param {Function} test: invoked per iteration and returns a boolean.
 * @return {Array}: returns new filtered array of all elements that pass the test
 */ 
 function filter(array, test){
    var arrTrue = [];
    for(var i = 0; i < array.length; i++){
        if(test(array[i],i, array) === true){
            arrTrue.push(array[i]);
        }
    }
    return arrTrue;
    
    }
module.exports.filter = filter;

/**
 * reject: Is the opposite of filter. Instead of returning the elements that test truthy, reject returns the 
 * elements that don't test as truthy. 
 * @param {Array or Object}array: The collection to iterate over.
 * @param {Function}test: invoked per iteration and returns a boolean.
 * @return {Array}: returns new filtered array of nontruthy elements that pass the test.
 */ 
function reject(array, test){
    var arrFalse = [];
    for(var i = 0; i < array.length; i++){
        if(test(array[i],i, array) === false){
            arrFalse.push(array[i]);
        }
    }
    return arrFalse;
    }
module.exports.reject = reject;

/**
 *partition: Creates two lists of arrays. One list contains elements that the function (predicate) returned
 * truthy and the other list contains elements that the function returned falsey.
 * @param {Array or Object} array: The collection to iterate over.
 * @param {Function} test: invoked per iteration and test for truthy and falsey values.
 * @returns{Array}: returns the array of grouped elements.
 */
 function partition(array, test) {
     let arrTruthy = [];
     let arrFalsey = [];
     for (let i = 0; i < array.length; i++) {
         if (test(array[i], i, array)) {
             arrTruthy.push(array[i]);
         }
         else {
             arrFalsey.push(array[i]);
         }
     }
     return [arrTruthy, arrFalsey];
     }
module.exports.partition = partition;

/**
 *map: Designed to create an array of values by running each element in the collection through the
 * iteratee (function).
 * @param {Array or Object}collection: The collection to iterate over.
 * @param {Function} test: invoked per iteration.
 * @return {Array}: returns new mapped array 
 */ 
function map(collection, action) {
     let newArr = [];
     each(collection, function(e, i, c) {
         newArr.push(action(e, i, c));
     });
     return newArr;

     }
module.exports.map = map;


/**
*pluck: Designed to extract a list of property values of path from each element in the collection.
* @param {Array or Object} arrayObj: The collection to iterate over.
* @param {Function} property: The path of the property to pluck.
* @return {Array}: property values 
*/ 
function pluck(array, props){
    return map(array, function(element,index,array){
    return element[props]; 
    });
    }
module.exports.pluck = pluck;    

/**
*every: Designed to test if all the elements in the list return truthy. Stops the list (iteration)
* if falsey element is found. 
* @param {Array or Object} collection: The collection to iterate over.
* @param {Function} test: invoked per iteration and test if all elements in the list are truthy.
* @return {boolean}: returns true if value pass the predicate check, else false.
*/ 
function every(collection, action){
    if(action === undefined) 
        action = identity; 
        let passed = true;
  
    each(collection, function(element, index, collection){
         if(action(element,index,collection) && passed === true) {    
         passed = true;

         } else passed = false;

        
         });    
            return passed;
         }
module.exports.every = every;

/**
*some: Is the opposite of every. Designed to test if all value in the list pass the given test. Stops the list 
* if truthy element is found.  
* @param {Array or Object} collection: The collection to iterate over.
* @param {Function} func: invoked per iteration and test if all elements return falsey.
* @return{boolean}: returns true, else false 
*/ 
function some(collection, action){
        if(action === undefined) 
        action = identity; 
        let passed = false;
    each(collection, function(element,index,collection){
        if(action(element,index,collection) || passed === true) {    
         passed = true;
        } else 
           passed = false;
            
        });
        return passed;
        }
module.exports.some = some;

/**
*reduce: Designed to boil a list of values down to a single value. 
* Seed is the initial state of the reduction and each step thereafter is returned by the passed function.
* @param {Array} array: The collection to iterate over.
* @param {Function}action: function to call.
* @param{Seed} seed: Initial state of reduction.
* @returns {values}: Returns the accumulated values.
*/ 
function reduce(array, action, seed){
        if(seed === undefined){
          seed = array[0];    
    for(let i = 1; i < array.length; i++){
        seed = action(seed, array[i], i);
        }
    }else if(seed){
        for(let i = 0; i < array.length; i++){    
        seed = action(seed, array[i], i); 
    
      }
    }
      return seed;
    }
module.exports.reduce = reduce;

/**
*extend: Designed to copy / iterates over own and inherited source properties. Any nested objects or arrays 
* will be copied by reference and not duplicated.
* @param {...Objects} objects: The source objects.
* @return {Object}: Destination and source object 
*/ 
function extend(...objects){
    var oneObj = objects[0];
    each(objects, function(object,items,objects){
        if(items === 0)
        return 0;
    each(object, function(value, key,object){
        oneObj[key] = value;
    });
    });
    return oneObj;
    }
module.exports.extend = extend;    
    



    





    

     
 







