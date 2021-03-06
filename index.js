var recipes = {};
// var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}


function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object[key]);

  // return Object.assign({}, object, key);

}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
