// 自动解析字符串模板
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = 'han shuo';
var getAge = function () {
    return 18;
};
test(__makeTemplateObject(["hello my name is ", ", I'm ", " years old"], ["hello my name is ", ", I'm ", " years old"]), myname, getAge());
