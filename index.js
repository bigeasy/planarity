// Vector implementation
//

function Vector (list) { // :: [Int] -> Vector
    this.elems = list
}

Vector.prototype.add = function (other) { // :: Vector -> Vector
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return null
    return new Vector((function () {
        var v = other.elems, ret = []
        for (var elem in v) {
            ret.push(v[elem] + this.elems[elem])
        }
        return ret
    }).bind(this)())
}

Vector.prototype.subtract = function (other) {
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return null
    return new Vector((function () {
        var v = other.elems, ret = []
        for (var elem in v) {
            ret.push(this.elems[elem] - v[elem])
        }
        return ret
    }).bind(this)())
}

Vector.prototype.multiply = function (s) {
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return null
    for (var v in this.elems) {
        this.elems[v] = this.elems[v] * s
    }
    return new Vector(this.elems)
}

Vector.prototype.equals = function (other) {
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return false
    for (var v in other.elems) {
        if (other.elems[v] !== this.elems[v]) return false
    }
    return true
}

Vector.prototype.divide = function (other) {
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return null
}

Vector.prototype.copy = function () {
}

Vector.prototype.dot = function (other) {
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return null
    var ret = 0
    for (var v in this.elems) {
        ret += this.elems[v] * other.elems[v]
    }
    return ret
}

Vector.prototype.cross = function (other) {
    if (!(other instanceof Array)) return null
    if (this.elems.length !== other.elems.length) return null
    var stuff = []
    for (var v in this.elems) {
        stuff.push(this.elems[v] * other.elems[v])
    }
    return new Vector(stuff)
}

Vector.prototype.max = function () {
    return Math.max(this.elems)
}

Vector.prototype.min = function () {
    return Math.min(this.elems)
}

Vector.prototype.modulus = function () {
}
