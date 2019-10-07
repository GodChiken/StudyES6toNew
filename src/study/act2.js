/* Template Literal */

// 있는 그대로 white space 를 적용 가능하다.
let template = ` 
    "" 도 쓸 수 있고, 
    '' 도 쓸수있다.
`;
console.log(template);

// String Interpolation : 표현식으로 문자열 삽입이 가능하다.
let firstName = "Bo-Hun";
let lastName = "Kim";
let fullName = `${firstName} + ${lastName}`;
console.log(fullName);

// 중간의 계산식도 가능하지만, 최종 결과물은 문자열로 반환된다.
let exampleNumber1 = 1;
let exampleNumber2 = 2;
let sumOfExampleNumber = `${exampleNumber1 + exampleNumber2}`;
console.log(sumOfExampleNumber);

