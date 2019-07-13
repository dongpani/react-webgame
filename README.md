# react-webgame
제로초님 리액트 기초 웹게임 강좌

## 첫 번째 리액트 컴포넌트 생성

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>first React</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>

    <script>
        const e = React.createElement;

        // 실행 계획
        class LikeButton extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    liked: false,
                }
            }

            render() {
                return e(
                    'button',
                    { onClick: () => {this.setState({ liked: true})} , type: 'submit'}, 
                    this.state.liked === true ? 'Liked' : 'Like',
                );
            }
        }
    </script>

    <script>
        // 실행
        ReactDOM.render(e(LikeButton), document.querySelector('#root'));
    </script>
</body>
</html>
```

## 결과

<img src="img/Like.png" title="likeButton" alt="likeButton" />

- 리액트는 프레임워크 같은 라이브러리다.
- CDN 으로 리액트를 바로 사용할 수 있다.


## JSX 와 babel

- 리액트를 사용하기 위해서는 JSX 문법을 사용해야 한다.
- JSX 는 브라우저에서 읽을 수 없으므로 babel 을 통해 자바스크립트 문법으로 변환 후 렌더링 해야한다.


## npm 초기화
- 설치하려는 폴더에서 터미널 실행 (node, npm 이 설치 되어있어야 한다.)

```
npm init
```

- 기재부분 : author, license
- 설치 후 package.json 생김.

## 리엑트 & 리액트 DOM 설치

```
npm i react react-dom
```

## 웹팩 설치하기

```
npm i -D webpack webpack-cli
```

- 여기서 -D 는 개발할 때만 쓰겠다는 것.

## 웹팩 & 리액트 설정 파일 생성

- webpack-config.js

<img src = "img/webpack-config.png" />

```
module.exports = {
    
};
```

## 웹펙을 빌드 결과를 저장할 경로 설정

<img src = "img/dist.png" />

- client.jsx

<img src = "img/client-jsx.png" />

```
const React = require('react');
const ReactDom = require('react-dom');
```

- index.html 

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>끝말잇기</title>
</head>
<body>
    <div id="root"></div>
    <script src="./dist/app.js"></script>
</body>
</html>
```

## babel 설치

```
npm i -D @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react babel-loader
```

- webpack.config.js

```
const path = require('path');  // 현재 경로

module.exports = {
    name: 'wordrelay-setting', // 설정이름
    mode: 'development',       // 모드 
    devtool: 'eval',           // 빠르게
    resolve: {                 // js, jsx 확장자 인식
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader', 
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    entry: { // 입력
        app: ['./client'],
    },    

    output: {  // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },

};
```

## 웹팩 빌드

1. npx webpack
2. package.json > scripts 에 등록 시 : npm run dev

```
  "scripts": {
    "dev": "webpack"
  },
```

## 브라우저 호환 설정 : webpack.config.js

```
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader', 
            options: {
                presets: [
                    ['@babel/preset-env', {
                      targets: {
                          browsers: ['> 1% in KR'], // browswerslist
                      },
                      debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
```

## npm 자동빌드 설정

- npm 에서 다운받기.

```
npm i -D react-hot-loader
```

```
npm i -D webpack-dev-server
```

- package.json 설정

```
  "scripts": {
    "dev": "webpack-dev-server --hot"
  },
```  

- client.jsx 소스 수정

```
const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

// const WordRelay = require('./WordRelay');
const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector('#root'));
```

- webpack.config.js 수정

모둘 > babel-loader 의 플러그인에 추가

```
 plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loeader/babel']
```

- app.js 경로 변경

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>끝말잇기</title>
</head>
<body>
    <div id="root"></div>
    <script src="./dist/app.js"></script>
    <script src="./app.js"></script>
</body>
</html>
```

<hr>

## 리액트에서의 반복문

- map

```
    <ul>
        {[
            // 2차원 배열 (반복문)
            ['사과', '마시따'], ['바나나', '똥나옴'], ['포도', '달어'], ['귤', '귀차늠'], ['감', '안머금'], ['배', '흐어'], ['밤', '몰라!']
        ].map((v) => {
        return (
            <li <b>{v.fruit}</b> - {v.taste}</li>
        );
        })}
    </ul>
```             

- key

```
    <ul>
        {[

        // 객체 (반복문)
        { fruit: '사과', taste: '마시따'},
        { fruit: '포도', taste: '마시따'},
        { fruit: '딸기', taste: '마시따'},
        { fruit: '귤', taste: '마시따'},
        { fruit: '바나나', taste: '마시따'},
        { fruit: '참외', taste: '마시따'},
        { fruit: '배', taste: '마시따'},
        { fruit: '배', taste: '맛없다.'},

        ].map((v) => {
        return (
            <li key={v.fruit + v.taste}> <b>{v.fruit}</b> - {v.taste}</li>
        );
        })}
    </ul>
```       
- 중요한것은 반복믄을 key 로 사용할 때 반드시 태그안에 key 값을 지정해줘야 한다. (고유값 : PK 성질을 가짐.)
이것은 브라우저 성능 최적화를 위해서 이지만 작업을 하다보면 여간 귀찮은게 아니다.
주의할 점은 map 함수의 인덱스로 key 값을 지정하면 안된다.


### shouldComponentUpdate

리액트는 데이터가 다시 리바인딩 될 때 렌더링이 된다고 했지만, 실제로는 그렇지 않다.
이게 문제가 되는 것이 화면의 데이터가 바뀌는 것이 없는데도 이벤트가 일어날 때마다 계속 렌더링이 되기 때문에
엄청난 성능하락을 가져온다. 

그렇기에 수동으로 데이터가 변동되지 않았을 때는 렌더링이 되지 않도록 막아야한다.

- shouldComponentUpdate 메서드

```
state = {
    counter: 0,
}

shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.counter !== nextState.counter) {
        return true;
    }

    return false;
}
```

현재 데이터와 미래에 변동 될 데이터가 다를 때만 렌더링한다.

- pureComponent : 위에거 보다 간단함. 하지만 렌더링 분기처리는 불가능.


### 리액트 render에서 함수 호출 패턴


- 가위바위보게임(class)


onClick함수 호출하는 부분이 가독성이 좋지 않다.

```
<div>
	<button id="rock" className="btn" onClick={ () => this.onClickBtn('바위')}>바위</button>
	<button id="scissor" className="btn" onClick={ () => this.onClickBtn('가위')}>가위</button>
	<button id="paper" className="btn" onClick={ () => this.onClickBtn('보')}>보</button>
	<div>게임 결과: {result}</div>
	<div>현재: {score} 점</div>
</div>
```

- 함수 호출

```
  onClickBtn = (choice) =>   
```

아래처럼 가독성 좋게 변경할 수 있음. (이 패턴을 많이 사용)

```
<div>
	<button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
	<button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
	<button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
	<div>게임 결과: {result}</div>
	<div>현재: {score} 점</div>
</div>
```

- 함수 호출

```
  onClickBtn = (choice) => () =>
```