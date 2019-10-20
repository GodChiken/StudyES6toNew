* 모듈이란?
    * 개별적인 요소로 구성되어 재사용이 가능한 코드 조각을 의미한다.
    * 세부사항을 캡슐화하고 공개가 필요한 API 만 외부에 노출한다.
    * 파일단위로 분리하고, 필요에 따라 명시적으로 로드하여 재사용한다.
    * 클라이언트 사이드의 자바스크립트에서는 파일별로 독립적인 스코프를 지니지 않고 하나의 전역 객체에 바인딩 되는 구조로 인하여 전역변수가 중복되는 문제가 발생했다.
    * [해서 다음과 같은 방법의 패턴](https://github.com/GodChiken/StudyES5/blob/master/src/main/resources/static/scope/scope.js)을 통해서 전역 변수의 중복을 피하는 방법을 고수해왔다.
    * 그러나 이마저도 남용을 하게되면 메모리 리소스를 많이 사용하게 되버린다.
    * ES6 이후 버전부터, 브라우저 내에 모듈을 사용하기 위해 CommonJS, AMD(Asynchronous Module Definition) 등을 구현한 모듈 라이브러리 로드를 사용해야한다고 한다.
    * 서버사이드 자바스크립트(Node.js)에서는 100% 동일하지 않지만 CommonJS 방식을 채택하고 있다. [다음 링크의 내용을 추후에 정리한다.](https://poiemaweb.com/nodejs-module)
    * 클라이언트 사이드에서의 ECMAScript 에서는 ES6의 모듈을 사용할 수 있다. [이곳에서 지원 브라우저 현황을 확인하여보자](https://caniuse.com/#search=module)
    * script tag 에서는 다음과 같은 방식과 파일형식으로 사용하기를 권장한다.
    ```javascript
    <script type="module" src="lib.mjs"></script>
    <script type="module" src="app.mjs"></script>
    ```
    * 그러나 아직까지는 브라우저가 지원하는 ES6 모듈기능보다 Webpack 등의 모듈 번들러를 사용하고 있다.
        * IE를 포함한 구형 브라우저는 ES6 모듈을 지원하지 않는다.
        * 브라우저의 ES6 모듈 기능을 사용하더라도 트랜스파일링이나 번들링이 필요하다.
        * 아직 지원하지 않는 기능(Bare import 등)이 있다. (ECMAScript modules in browsers 참고)
        * 점차 해결되고는 있지만 아직 몇가지 이슈가 있다. (ECMAScript modules in browsers 참고)    