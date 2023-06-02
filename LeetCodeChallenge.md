# LeetCode Question

var obj = {
a: {
b: {
c: 12
}
}
};

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined

# LeetCode Solutions

## Solution 1 - Recursive Function

var obj = {
a: {
b: {
c: 12
}
}
};

Object.prototype.findPath = function(path) {
var currentObj = this;
var keys = path.split('.');

    for (var i = 0; i < keys.length; i++) {
        if (currentObj[keys[i]] === undefined) {
            return undefined;
        }
        currentObj = currentObj[keys[i]];
    }

    return currentObj;

};

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined

## Solution 2 - Using reduce() method

var obj = {
a: {
b: {
c: 12
}
}
};

Object.prototype.findPath = function(path) {
return path.split('.').reduce(function(obj, key) {
return obj && obj[key] !== undefined ? obj[key] : undefined;
}, this);
};

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined

## Solution 3 - Using a loop

var obj = {
a: {
b: {
c: 12
}
}
};

Object.prototype.findPath = function(path) {
var keys = path.split('.');
var currentObj = this;

    for (var i = 0; i < keys.length; i++) {
        if (currentObj[keys[i]] === undefined) {
            return undefined;
        }
        currentObj = currentObj[keys[i]];
    }

    return currentObj;

};

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined
console.log(obj.findPath('a.b.c.d.e')); // undefined
