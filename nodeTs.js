"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdult(user) {
    return user.age >= 18 || user.age == 28;
}
const justine = {
    name: 'Justine',
    age: 12,
};
const isJustineAnAdult = isAdult(justine);
console.log(isJustineAnAdult);
class baseController {
    getBody(name) {
        return name;
    }
}
exports.default = baseController;
