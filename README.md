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



