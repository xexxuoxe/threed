# 프로젝트 구조 설명서 (THREED)

이 문서는 `THREED` 프로젝트의 기본 폴더 구조 및 주요 파일의 역할에 대해 설명합니다.

---

## 📁 루트 디렉터리 구조
THREED/
├── .next/ # Next.js에서 자동 생성되는 빌드 결과물
├── node_modules/ # 설치된 NPM 패키지
├── public/ # 정적 파일 (이미지, 폰트 등)
├── src/ # 실제 프로젝트 소스 코드 폴더
├── .gitignore
├── next-env.d.ts # TypeScript용 Next.js 환경 타입 선언
├── eslint.config.mjs # 린트 설정
├── tsconfig.json # TypeScript 설정


---

## 📁 `public/`

- `images/` — 프로젝트에서 사용하는 정적 이미지 리소스
- `fonts/` — 웹폰트가 있을 경우 이곳에 저장

> 이 경로의 파일은 브라우저에서 `/images/파일명`으로 접근 가능

---

## 📁 `src/`

### ✅ `app/`

- Next.js 13 이상 App Router 기능을 사용하며, `page.tsx` 기반의 라우팅
- `/login`, `/post` 등의 폴더가 각각의 페이지 라우트

예:
/login/page.tsx => 도메인.com/login
/post/page.tsx => 도메인.com/post


### ✅ `components/`

- 공통 컴포넌트들을 모아두는 곳
- `page/home/components`처럼 특정 페이지에 종속적인 컴포넌트는 해당 위치에 작성

### ✅ `styles/`

- `abstracts/`: SCSS 변수, 믹스인 등 공통 스타일 유틸
- `base/`: 리셋, 글로벌 스타일 등
- `common.scss`: 전역에서 import되는 공통 스타일

### ✅ `hooks/`

- 커스텀 훅(`useLoader.ts` 등)을 정의하는 공간

### ✅ `components/page/home/`

- 홈 페이지 관련 컴포넌트와 스타일
- `home.component.tsx`: 홈 페이지의 핵심 UI
- `home.module.scss`: 홈 컴포넌트의 모듈 스타일

---

## 📄 주요 파일 설명

- `layout.tsx`: App Router 기반의 공통 레이아웃 (헤더, 푸터 등 포함 가능)
- `globals.scss`: 전체 프로젝트 공통 스타일 파일 (여기서 SCSS 모듈을 import 가능)
- `favicon.ico`: 브라우저 탭 아이콘
- `tsconfig.json`: 타입스크립트 관련 설정
- `.gitignore`: Git에서 추적하지 않을 파일 목록

---

## 🔧 작업 시 주의사항

- SCSS는 모듈 방식(`.module.scss`)을 기본으로 사용합니다.
- 컴포넌트는 **기능 단위**, **페이지 단위**로 나누어 관리합니다.
- 커스텀 훅은 `hooks/` 또는 컴포넌트 하위 폴더에 작성할 수 있습니다.
- 이미지는 `public/images/` 경로에 두고, import 없이 URL로 접근합니다.

---

## ✏️ 기타 팁

- `@/components/...`, `@/styles/...` 등 경로 alias 설정이 되어 있다면 import 시 편리하게 사용 가능합니다.
- 코드 정리 시 `eslint`, `prettier`를 적용하는 것을 권장합니다.

## ⚙️ 개발 환경 설정

### 📦 필요한 도구

- Node.js (권장: 18 이상)
- npm

### 📥 패키지 설치

```bash
npm install
```

### 🚀 개발 서버 실행
``` bash

npm run dev
기본 실행 주소: http://localhost:3000
```

### 🏗️ 프로젝트 빌드
``` bash

npm run build
빌드 결과물은 .next/ 디렉터리에 생성됩니다.
```

### 🧪 빌드 후 실행 (프로덕션 모드)
``` bash

npm run start
```

### 🧹 코드 정리 및 검사
``` bash
npm run lint
```