# vue3-vite-typescript-jest

## Getting started

### Starting App
```
pnpm dev
# or
pnpm serve

```

### Other script
`pnpm build` : app build

`pnpm preview` : starting preview version app

`pnpm test` : starting test


## Core

`Vue ver` : 3.2.22

`package manager` : pnpm

`typescript` : 4.5.2

`vite` : 2.6.14

`jest` : 27.3.1


## Library

`vue-query`, `vuex`


## Directory
```
├── public : default folder 
├── src
	 ├── api
		  ├── index : fetch api function
		  └── api module files...
	 ├── assets : 정적 파일 관리 (img, font, common css, ...)
	 ├── components: 리유저블 컴포넌트 관리
	 ├── routes
	 	  ├── index.ts : core function, navigation guard 설정
	 	  └── routes.ts : routing 관련 설정
	 ├── types : 객체 타입 관리
	 ├── utils : 공용 순수 함수 관리
	 ├── views : 도메인 관련 컴포넌트 관리
	 ├── App.vue : Base layout 설정
	 └── main.ts : Library, import 관린 설정
└── other setting files...
```

