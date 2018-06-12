// 自动解析字符串模板

function test(template: any, name: string, age: number) {
  console.log(template);
  console.log(name);
  console.log(age);
}

var myname = 'han shuo';

var getAge = function () {
  return 18;
}

test`hello my name is ${myname}, I'm ${getAge()} years old`;