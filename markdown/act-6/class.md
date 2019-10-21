* Class 란?
    * 자바스크립트는 프로토타입 기반(prototype-based) 객체지향 언어다. 비록 다른 객체지향 언어들과의 차이점에 대한 논쟁이 있긴 하지만, 자바스크립트는 강력한 객체지향 프로그래밍 능력을 지니고 있다.
    * 프로토타입 기반 프로그래밍은 클래스가 필요없는(class-free) 객체지향 프로그래밍 스타일로 프로토타입 체인과 클로저 등으로 객체 지향 언어의 상속, 캡슐화(정보 은닉) 등의 개념을 구현할 수 있다.
* 클래스 정의 (Class Definition)
    * ES6 클래스는 class 키워드를 사용하여 정의한다. 앞에서 살펴본 Person 생성자 함수를 클래스로 정의해 보자.
    * 클래스 이름은 성성자 함수와 마찬가지로 파스칼 케이스를 사용하는 것이 일반적이다. 파스칼 케이스를 사용하지 않아도 에러가 발생하지는 않는다.
    ```javascript
    class Person {      
      constructor(name) {
        this._name = name;
      }    
      sayHi() {
        console.log(`Hi! ${this._name}`);
      }
    }
    const me = new Person('Lee');
    me.sayHi(); // Hi! Lee
    
    console.log(me instanceof Person); // true    
    ```
    * 클래스는 클래스 선언문 이전에 참조할 수 없지만, 호이스팅은 발생한다. 
        * 클래스는 var 키워드로 선언한 변수처럼 호이스팅되지 않고 let, const 키워드로 선언한 변수처럼 호이스팅된다. 
        * 따라서 클래스 선언문 이전에 [TDZ](https://github.com/GodChiken/StudyES6toNew/blame/master/markdown/act-1/letAndConstAndBlockScope.md#L6-L15) 에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.
        ```javascript
        const Foo = '';        
        {          
          console.log(Foo);         
          class Foo {}  // ReferenceError: Cannot access 'Foo' before initialization
        }        
        ```