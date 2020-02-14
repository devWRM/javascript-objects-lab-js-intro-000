var recipes = {};
// var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
//  new Object({key: value});
//  object = {key: value};
  object.key = value;
}





function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign({key: value});
}
