# todo-list

### linux 명령어

디렉토리 이동
```
cd <directory name>
```

디렉토리 생성
```
mkdir <directory name>
```

### git 명령어

git clone 명령어
```
git clone <repository url>
```

현재 디렉토리부터 커밋 대상으로 추가
```
git add .
```
커밋 대상을 커밋
```
git commit -m "msg"
```
github에 커밋을 올린다
```
git push <remote 별명> <branch 별명>
ex) git push origin master
```

### 이슈
문제
```
The requested URL returned error: 403
```
해결
```
git remote set-url https://cho-kyeongcheol@github.com/cho-kyeongcheol/todo-list
```

문제
```
error @typescript-eslint/eslint-plugin@4.5.0: The engine "node" is incompatible with this module. Expected version "^10.12.0 || >=12.0.0".

node.js 버전이 v10.9.0 였는데 너무 낮았다
12 버전 이상으로 업그레이드 할 필요가 있었다
```
해결
```
node -v
v10.9.0

sudo npm install -g n

node -v
v15.2.1
```


### 프로젝트 디렉토리 구성
```
cd ~
mkdir workspace
git clone https://github.com/cho-kyeongcheol/todo-list
cd todo-list
```
npm 패키지 초기화
```
npm init
```
init 한 후에는 package.json 이 생긴다

백엔드 모듈 설치
```
npm install express
```
프론트엔드 프로젝트 생성 모듈 설치
```
npm install -g create-react-app
```
프론트엔드 프로젝트 생성
```
create-react-app <project name>
ex) create-react-app frontend
```
백엔드 프로젝트 생성
```
mkdir backend
cd backend
vi app.js
```
```javascript
const  express = require('express')
const  app = express()
const  port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
```
백엔드 서버 실행
```
* backend 디렉토리로 이동 후 실행
node app.js
```

프론트엔드 서버 실행
```
* frontend 디렉토리로 이동 후 실행
npm start
```
프론트엔드의 client-side rendering
```
1. html 껍데기만 보낸 다음에 후에 그려진다
2. public/index.html
3. src/index.js
4. src/App.js
```
jsx 개념
```
javascript xml
```
arrow function 개념
```
function a(){
}

// es6
const a = () => {
}
```

state 개념
```
useState
```

비구조 할당 개념
```
찾아보기
```
spread 문법
```
...
```
