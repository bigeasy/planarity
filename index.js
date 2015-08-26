// Vector implementation
//

function Vector (list) {
    this.elems = list
}

Vector.prototype.add = function (other) {
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
}

Vector.prototype.equals = function (other) {
}

Vector.prototype.copy = function () {
}

Vector.prototype.max = function () {
}

Vector.prototype.modulus = function () {
}

exports.Vector = Vector
