// Vector implementation
//

function Vector (list) { // :: [Int] -> Vector
    this.elems = list
}

Vector.prototype.add = function (other) { // :: Vector -> Vector
    if (this.elems.length !== other.elems.length) return null;
    return new Vector((function () {
        var v = other.elems, ret = [];
        for (var elem in v) {
            ret.push(v[elem] + this.elems[elem])
        }
        return ret;
    }).bind(this)())
}

Vector.prototype.subtract = function (other) {
    if (this.elems.length !== other.elems.length) return null;
    return new Vector((function () {
        var v = other.elems, ret = [];
        for (var elem in v) {
            ret.push(this.elems[elem] - v[elem])
        }
        return ret;
    }).bind(this)())
}

Vector.prototype.multiply = function (s) {
    for (var v in this.elems) {
        this.elems[v] = this.elems[v] * s
    }
    return new Vector(this.elems)
}

Vector.prototype.equals = function (other) {
    if (this.elems.length !== other.elems.length) return false;
    for (var v in other.elems) {
        if (other.elems[v] !== this.elems[v]) return false;
    }
    return true;
}

Vector.prototype.copy = function () {
}

Vector.prototype.dot = function (other) {
}

Vector.prototype.cross = function (other) {
}

Vector.prototype.max = function () {
}

Vector.prototype.modulus = function () {
}
