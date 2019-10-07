* Template Literal
    * 있는 그대로 white space 를 적용 가능하다.
    ```javascript
        let template = ` 
            "" 도 쓸 수 있고, 
            '' 도 쓸수있다.
        `;
        console.log(template);
    ```
    * String Interpolation : 표현식으로 문자열 삽입이 가능하다.
    ```javascript
        let firstName = "Bo-Hun";
        let lastName = "Kim";
        let fullName = `${firstName} + ${lastName}`;
        console.log(fullName);    
    ```
    * 중간의 계산식도 가능하지만, 최종 결과물은 문자열로 반환된다.
    ```javascript
        let exampleNumber1 = 1;
        let exampleNumber2 = 2;
        let sumOfExampleNumber = `${exampleNumber1 + exampleNumber2}`;
        console.log(sumOfExampleNumber);
    ```
* Arrow Function
    * 간단한 사용법 코드
    ```javascript
        let noParameter = () => { console.log("매개 변수가 없는경우");};
        let oneParameter = x => {console.log(x);};
        let multiParameter = (x,y) => { console.log(x+y)};
        let oneLineFunction = x => x*x;
        let returnObjectFunction = () => ({ x : 5 });
        let multiLineArrowFunction = () => {
            console.log("여러줄 선언이 된다.");
            console.log("여러줄 선언이 된다.");
            console.log("여러줄 선언이 된다.");
            console.log("여러줄 선언이 된다.");
            console.log("여러줄 선언이 된다.");
        }
        
        noParameter();
        oneParameter(5);
        multiParameter(1,3);
        console.log(oneLineFunction(5));
        console.log(returnObjectFunction());
        console.log(multiLineArrowFunction()());
    ```
    * ES5 방식보다 훨씬 간결해졌다.
    ```javascript
        // ES5
        var arr = [1, 2, 3];
        var pow = arr.map(function (x) { // x는 요소값
            return x * x;
        });

        console.log(pow); // [ 1, 4, 9 ]

        // ES6
        const arr = [1, 2, 3];
        const pow = arr.map(x => x * x);

        console.log(pow); 
    ```
    * 기존 함수와의 차이점은 문법적인 것도 분명하나 사실은 this binding 부분에서 차이점이 있다.
        * 기존 함수는 호출방식에 따라 바인딩이 결정된다.
        * 일반 함수는 함수를 선언할 때 this 에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this 에 바인딩할 객체가 동적으로 결정된다고 하였다.
        * 화살표 함수는 함수를 선언할 때 this 에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this 를 가리킨다. 이를 Lexical this라 한다.
        * 화살표 함수는 call, apply, bind 메소드를 사용하여 this 를 변경할 수 없다.
    * Arrow Function 으로 메서드 등 선언하는 것은 자제하자. 전역 스코프를 가르키기 때문이다.
        * 메서드를 선언시 축약 표현으로 메서드를 사용하자.
        ```javascript            
            let person = {
              name: 'Lee',
              sayHi: () => console.log(`Hi ${this.name}`)
            };            
            person.sayHi(); // undefined            
            
            person = {
              name: 'Lee',
              sayHi() { console.log(`Hi ${this.name}`); } // 축약 메서드 표현
            };
            
            person.sayHi(); // Hi Lee
        ```
        * 이벤트 할당도 동일한 문제를 가지고 있으니 일반 함수로 사용을 권장한다. 
        * 생성자 함수로 사용할 수 없다. 프로토타입을 가지고 있지 않기 때문이다.
        
