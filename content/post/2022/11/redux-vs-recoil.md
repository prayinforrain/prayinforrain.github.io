---
title: "Redux vs Recoil"
date: 2022-11-18T16:42:55+09:00
lastmod: 2022-11-18T16:42:55+09:00
draft: false
categories: ["moheyum", "React"]
tags: ["moheyum", "recoil", "redux"]
---

# ๐คท TL;DR

- Redux๋ ์์ ์ ์ด์ง๋ง, ์ ์ธ๊ณผ ์ฌ์ฉ์ด ๋ณต์กํ๋ค.
- Recoil์ ์ฌ์ฉ์ด ๋งค์ฐ ์ฝ์ง๋ง ์ ์ ๋ฒ์ ์ด ์๋ค.
- ํ๋ก์ ํธ ๊ท๋ชจ์ ๋ฐ๋ผ ๋ง์์ ๋๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ ํํ์

# ๐ช ์๋ก 

์ฐ๋ฆฌ๋ React๋ฅผ ์ฌ์ฉํ  ๋ ๋ณดํต `useState`๋ฅผ ํตํด ์ํ๋ฅผ ๊ด๋ฆฌํฉ๋๋ค. `useState`๋ ์ ๋ง ์น์ํ์ง๋ง, ํ ๊ฐ์ง ๋๋ฌด ํฐ ๋จ์ ์ด ์์ต๋๋ค. ๋ฐ๋ก ์ปดํฌ๋ํธ๋ผ๋ฆฌ ๋ฐ์ดํฐ๋ฅผ ์ฃผ๊ณ ๋ฐ๋ ๋ฐ ์ฌ์ฉํ๊ธฐ๊ฐ ํ๋ค๋ค๋ ์ ์๋๋ค. ๊ทธ ์ผ์ ํ๊ธฐ ์ํด ๋ฑ์ฅํ ๊ฒ์ด ๋ฐ๋ก **์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ**์๋๋ค. ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ํ์์ฑ์ ๋ํด ๊ณต๊ฐํ์ง ๋ชปํ๋ ๋ถ๋ค์ ์ํด ์งง์ ํ ๋ง๊ธ์ ๋ง๋ จํด ๋ณด์์ต๋๋ค.

## โ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ์ ์ฌ์ฉํ๋์?

์ ์ ๊ฐ ๋ก๊ทธ์ธํด ์๋ ์ ๋ณด๋ฅผ ๋ด์ state๊ฐ ์๋ค๊ณ  ๊ฐ์ ํ๋ฉด Root ์ปดํฌ๋ํธ๋ฅผ ์๋์ ๊ฐ์ด ์์ฑํ  ์ ์์ต๋๋ค.

```jsx
export default function App() {
  const [userInfo, setUserInfo] = useState("not logged in");
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
```

์ฌ๊ธฐ๊น์ง ๊ทธ๋ ๊ฒ ์ด๋ ต์ง ์๋ค์. ๋จ์ํ ๋ก๊ทธ์ธ ํ์ด์ง์ setState ํจ์๋ฅผ ๋น๋ ค์ค์ userInfo๋ฅผ ๊ฐฑ์ ํ  ์ ์๊ฒ ํ๋ฉด ๋๋๊น์.

ํ์ง๋ง ๋ก๊ทธ์ธ ํ์ด์ง๊ฐ ์ฌ๋ฌ ์ปดํฌ๋ํธ๋ก ๋ถ๋ฆฌ๋๋ค๋ฉด ์ด๋จ๊น์? ์ด๋ฅผํ๋ฉด, ๋ก๊ทธ์ธ ํ๋ฉด์์ ๋ด ์๋น์ค์ ๋ํ ๊ด๊ณ  ์นดํผ์ ์งง์ ์์๊ฐ์ ๋ฏธ๋์ด๋ฅผ ์ฒจ๋ถํ **์์ฃผ** **์ด์** **๋ก๊ทธ์ธ ํ์ด์ง**๋ฅผ ๋ง๋ค๊ณ  ์ถ์ต๋๋ค. ๊ทธ๋ผ ๊ด์ฌ์ฌ ๋ถ๋ฆฌ๋ฅผ ์ํด ์ค์  ๋ก๊ทธ์ธ์ ๊ธฐ๋ฅ์ ํ๋ ๋ถ๋ถ์ ๋ณ๋์ ํ์ ์ปดํฌ๋ํธ๋ก ๋ถ๋ฆฌํด์ผ ํ  ๊ฒ ๊ฐ์ต๋๋ค.

```jsx
export default function Login({
  setUserInfo,
}: {
  setUserInfo: React.Dispatch<React.SetStateAction<string>>,
}) {
  return (
    <div>
      <div>์ฐ๋ฆฌ ์๋น์ค ๋ฆฌ์ผ๊ตฟ ๋น์ฅ๋ฐ๋ก์ง๊ธ ๋ก๊ทธ์ธ ๋ผ์ํธ์ฐ~!~!</div>
      <LoginForm setUserInfo={setUserInfo} />
    </div>
  );
}
```

๋ฐ์ `setUserInfo`๋ฅผ `LoginForm` ์ปดํฌ๋ํธ์ ํ๋ฒ ๋ ๋ด๋ ค์ฃผ์์ต๋๋ค. ์.. ์์ง๊น์ง๋ ์ฐธ์ ๋ง ํ๋ค์. ํ์ง๋ง ๋ ํฐ ๋ฌธ์ ๊ฐ ๊ธฐ๋ค๋ฆฌ๊ณ  ์์ต๋๋ค. ์ด์  ๋ก๊ทธ์ธํ ์ ๋ณด๋ฅผ **๋ชจ๋  ์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๋ค๊ณ  ํ๋ฉด** ์ด๋ป๊ฒ ๋ ๊น์? ๋ชจ๋  ๋ผ์ฐํฐ์ ๋ํด ๋ฃจํธ ์ปดํฌ๋ํธ๊ฐ ๊ฐ์ง `userInfo`๋ฅผ ์ ๋ฌํด ์ฃผ๊ฒ ์ต๋๋ค.

```jsx
export default function App() {
  const [userInfo, setUserInfo] = useState("not logged in");
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/service1" element={<Service1 userInfo={userInfo} />} />
          <Route path="/service2" element={<Service2 userInfo={userInfo} />} />
          <Route path="/service3" element={<Service3 userInfo={userInfo} />} />
          <Route path="/service4" element={<Service4 userInfo={userInfo} />} />
          <Route path="/service5" element={<Service5 userInfo={userInfo} />} />
          <Route path="/service6" element={<Service6 userInfo={userInfo} />} />
          <Route path="/service7" element={<Service7 userInfo={userInfo} />} />
          <Route path="/service8" element={<Service8 userInfo={userInfo} />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
```

๋ผ์ฐํฐ๋๊น ์ด์ ๋ ๋๋ฌ์์ ๊ด์ฐฎ์ ๊ฒ ๊ฐ๋ค๊ตฌ์? ๊ทธ๋ ๋ค๋ฉด **์ฌ๋ฌ ์ปดํฌ๋ํธ์์ ํ์๋ก ํ๋ ์ ๋ณด๊ฐ ๋ก๊ทธ์ธ ์ ๋ณด๋ง์ด ์๋๋ผ๋ฉด**์? **`newInfo`๋ฅผ ๋ถํน์  ๋ค์์ ์ปดํฌ๋ํธ๊ฐ ์ฐธ์กฐํ๋ค๋ฉด**์?

```jsx
export default function App() {
  const [userInfo, setUserInfo] = useState("not logged in");
  const [newInfo, setNewInfo] = useState(0);
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/service1" element={<Service1 userInfo={userInfo} />} />
          <Route
            path="/service2"
            element={<Service2 userInfo={userInfo} newInfo={newInfo} />}
          />
          <Route path="/service3" element={<Service3 userInfo={userInfo} />} />
          <Route path="/service4" element={<Service4 userInfo={userInfo} />} />
          <Route
            path="/service5"
            element={<Service5 userInfo={userInfo} newInfo={newInfo} />}
          />
          <Route path="/service6" element={<Service6 userInfo={userInfo} />} />
          <Route
            path="/service7"
            element={<Service7 userInfo={userInfo} newInfo={newInfo} />}
          />
          <Route path="/service8" element={<Service8 userInfo={userInfo} />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
```

์์ง๋ ๋ฒํธ ๋ง ํ์ ๊ฐ์? ๊ทธ๋ผ ๋ง์ง๋ง์ผ๋ก `**Service3`์ ํ์ ์ปดํฌ๋ํธ์ธ `ChildComponent1`์์ ๋ณ๊ฒฝํ ๋ฐ์ดํฐ ๊ฐ์ `Service1`์ ํ์ ์ปดํฌ๋ํธ์ธ `ChildComponent2`๋ก ์ ๋ฌํด ์ฃผ๋ ค๋ฉด ์ด๋ป๊ฒ ํด์ผ ํ ๊น์?\*\*

๊ทธ๋์ ์ฐ๋ฆฌ ํ์ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด๋ค ๊ฒ์ ์ฌ์ฉํ ์ง ๊ณ ๋ฏผํ์ต๋๋ค. ๋น์ฅ ํ์์์ ๊ฑฐ๋ก ๋์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ Redux, Recoil, Context API, Mobx ์ ๋๊ฐ ์๋๋ฐ์, ์ค๋์ ๊ทธ ์ค์ Redux์ Recoil์ ๋ํด ๊ฐ๋ณ๊ฒ ์์๋ณด๊ณ  ๋น๊ตํด ๋ณด๋ ์๊ฐ์ ๊ฐ์ก์ต๋๋ค. ์ด ๊ธ์์๋ ์๋ ์๋ฆฌ๋ณด๋ค๋ ์ฌ์ฉ์์ ์ฅ๋จ์ ์ ์ค์ฌ์ผ๋ก ์ ๋ฆฌํด๋ณด๊ฒ ์ต๋๋ค.

# ๐ฌ Redux

## Redux์ ๋ํด.araboja

![Untitled](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_01.png)

Redux๋ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์์๋ ๊ฐ์ฅ ๋์ค์ ์ธ ์น๊ตฌ์๋๋ค. ์๋ง recoil์ฒ๋ผ ๋ฆฌ์กํธ์ ์ข์์ ์ด์ง๋ ์๊ณ , mobx๋ณด๋ค ์ค๋๋์๊ธฐ ๋๋ฌธ์ด ์๋๊น์? ์๋ฌดํผ npm trends์์ ํ์ธํ  ์ ์๋ ๊ฒ์ฒ๋ผ ์๋์ ์ธ ์ปค๋ฎค๋ํฐ ํฌ๊ธฐ๋ฅผ ์๋ํฉ๋๋ค. ๋ ํผ๋ฐ์ค๊ฐ ๋ฌด์ฒ ๋ง๊ณ , ์.. ๋ ํผ๋ฐ์ค๊ฐ ๋ฌด์ฒ ๋ง์ต๋๋ค. ํ๊ธ๋ก ๊ฒ์ํด๋ ๋น์ฅ ์ด ๊ธ์ ์ธ ์ด์ ๊ฐ ์๋ ์ถ์ ์ ๋๋ก ์ง๋์น๊ฒ ๋ง์ ์ ๋ฆฌ๊ธ์ด ๋์ค๋ค์.

![Untitled](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_02.png)

Redux๋ Flux ์ํคํ์ณ๋ฅผ ๊ฐ์ ํ ๊ตฌ์กฐ๋ก ์ํ๋ฅผ ๊ด๋ฆฌํฉ๋๋ค. **1) ์ฝ๊ธฐ ์ ์ฉ์ธ ์ํ๋ฅผ 2) ํ๋์ store๊ฐ 3) ์์ํจ์๋ฅผ ์ด์ฉํด ๊ฐฑ์ ํ๋ค**๋ ์ธ ๊ฐ์ง ๋ฉ์ธ ์ปจ์์ด ์๋ค๊ณ  ํ๋ค์. ๋ ์์ธํ ์ค๋ช์ [์ ์ฌ์ง์ ์ถ์ฒ ๋งํฌ](https://labs.tadigital.com/index.php/2020/04/20/getting-started-with-redux/)์ ์ ์ค๋ช์ด ๋์ด ์์ต๋๋ค.

## ์ฌ์ฉํด ๋ด์๋ค

```powershell
npm i redux react-redux @reduxjs/toolkit
```

์ฐ์  ์ธ ๊ฐ์ง ํจํค์ง๋ฅผ ์ค์นํ๊ฒ ์ต๋๋ค. `@reduxjs/toolkit` ์ด๋ผ๋ ํจํค์ง๋ redux๋ฅผ ์กฐ๊ธ ๋ ํธํ๊ฒ ์ฌ์ฉํ  ์ ์๋๋ก ๋์์ฃผ๋ ๋๊ตฌ์ธ๋ฐ์, ๊ฐ์ธ์ ์ผ๋ก RTK ์์ด ๋ฆฌ๋์ค๋ฅผ ์ฒ์ ์์ํ๊ธฐ๊ฐ ๊ต์ฅํ ์ด๋ ค์ ๊ธฐ ๋๋ฌธ์ ์ฌ์ฉํ๋ ์ชฝ์ผ๋ก ๊ธธ์ ํ์์ต๋๋ค.

```tsx
// count.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  // State์ interface ์ ์ธ
  value: number;
  amount: number;
}

const initialState: CounterState = {
  // ์ด๊ธฐ๊ฐ ์ ์ธ
  value: 0,
  amount: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += state.amount;
    },
    decrease: (state) => {
      state.value -= state.amount;
    },
    init: (state, action: PayloadAction<number>) => {
      // value๊ฐ์ ์ง์  ์ค์ ํ๋ action
      state.value = action.payload;
    },
  },
});

export const { increase, decrease, init } = counterSlice.actions;

export default counterSlice.reducer;
```

์ ์ญ ์ํ๋ง๋ค ์์ ๊ฐ์ด reducer๋ฅผ ์ ์ธํด์ฃผ๋ฉด ๋ฉ๋๋ค. ๋๋ถ๋ถ์ ๊ฒฝ์ฐ์๋ `init` action์ฒ๋ผ `setState`์ ์ญํ ์ ํ๋ ๋์๋ง ์ ์ธํด ์ฃผ๋ฉด ๋ฌธ์  ์์ด ์ฌ์ฉํ  ์ ์์ ๊ฒ์ผ๋ก ๋ณด์ด๋ค์. ๊ทธ๋ผ์๋ ์ฌ๋ฌ ๊ฐ์ action์ ์ ์ธํ  ์ ์๋ค๋ ๋ถ๋ถ์ ๋งค๋ ฅ์ ์ผ๋ก ๋ณด์๋๋ค. ๋ง์ฝ ์ ์ญ ์ํ๊ฐ Object์ฒ๋ผ ๋ณต์กํ ํ์์ผ๋ก ๋์ด ์๋ค๋ฉด ๊ด๋ฆฌํ๋ ๋ก์ง์ action์ ์ ์ธํด ๋๊ณ  ์ฌ์ฌ์ฉํ๋ฉด ๋๋๊น์.

> ๐ก **ESLint airbnb rule๊ณผ์ ์ถฉ๋**

createSlice๋ก ๋ฆฌ๋์๋ฅผ ๋ง๋ค๋ค ๋ณด๋ฉด ์๋ ์ฌ์ง๊ณผ ๊ฐ์ด ํจ๋ฌ๋ฏธํฐ๋ก ๋ค์ด์จ state๊ฐ ๊ฐ์ง ๊ฐ์ ์กฐ์ํด์  ์๋๋ค๋ ๊ฒฝ๊ณ  ๋ฉ์์ง๋ฅผ ๋ง์ฃผ์น๊ฒ ๋ฉ๋๋ค. airbnb ๋ฃฐ์ ํฌํจ๋์ด ์๋ ๊ท์น์ธ๋ฐ, [redux-toolkit Issue #521](https://github.com/reduxjs/redux-toolkit/issues/521)์์ ์ด์ ๋ํ ์ค๋ช์ ํ์ธํ  ์ ์์์ต๋๋ค. ์ฌ๊ธฐ ์ฌ๋๋ค์ airbnb ๋ฃฐ์ ๊ทธ๋ฅ ์ข์ํ์ง ์๋๊ตฐ์!

> ![Untitled](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_03.png)
>
> ํด๋น Rule์ ๋นํ์ฑํ ํ๋ ๊ฒ ์ธ์ ์ฝ๊ฐ์ ์์ธ ์ฒ๋ฆฌ๋ฅผ ํด์ฃผ๋ ๋ฐฉ๋ฒ๋ ์๋๋ฐ์, [์ด ๋งํฌ](https://stackoverflow.com/questions/61570021/typescript-and-redux-tool-kit-createslice-assignment-to-property-of-function)๋ฅผ ์ฐธ๊ณ ํ์๋ฉด ๋๊ฒ ์ต๋๋ค.

```tsx
// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

๋ง๋  reducer๋ค์ ๊ด๋ฆฌํ๋ `store`๋ฅผ ์ ์ธํฉ๋๋ค. ํํ ์๊ณ  ๊ณ์๋ store์ ๊ฐ๋๊ณผ ๊ฐ์ผ๋ฉฐ, ์ ์ญ ์ํ๊ฐ ๋ ํ์ํ  ๋ ๋ง๋ค ๋ง๋  reducer๋ค์ `configureStore` ์์ ์ถ๊ฐํด์ฃผ๋ฉด ๋๊ฒ ์ต๋๋ค. ์ฌ์ฉํ  ์ ์ญ ์ํ ์๋งํผ importํด์ ์ฌ์ฉํ๋ค๋ ์๊ฐ์ผ๋ก ์์ฑํ๋ฉด ๋  ๊ฒ ๊ฐ์ต๋๋ค.

```tsx
// App.tsx
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./Login";
import { store } from "./redux/store";
import Test from "./Test";

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}
```

์ด์  ๋ง๋  store๋ฅผ `Provider`๋ฅผ ํตํด ์ฐ๊ฒฐํด ์ค๋๋ค. `Router`์ ๋น์ทํ๊ฒ ์ฌ์ฉํ  ์ ์๋๋ฐ, `Provider`๋ก ๋ฌถ์ฌ ์๋ ์ปดํฌ๋ํธ๋ค์ ๋ชจ๋ store์ ์ํ๋ค์ ์ฐธ์กฐํ๊ณ  ์ฌ์ฉํ  ์ ์๊ฒ ๋ฉ๋๋ค. ์ํ๋ฅผ ์ฌ์ฉํ  ์ ์๋ scope๋ฅผ ์ง์ ํ๋ ๋๋์ผ๋ก ์ดํดํ๋ฉด ๋๊ฒ ๋ค์.

```tsx
// Test.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, init } from './redux/count';
import { RootState } from './redux/store';

export default function Test() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
	return (
	...
	<button type="button"
	onClick={() => {
		dispatch(decrease());
	}}
	>-</button>
	...
	);
}
```

์ค์  ์ฌ์ฉ์ ์์ ๊ฐ์ด ํฉ๋๋ค. ์ฐธ์กฐํ  ์ํ๋ `useSelector`๋ก, action์ `useDispatch`๋ฅผ ์ด์ฉํด ๋ฐ์์ํต๋๋ค. ๊ฐ์ธ์ ์ผ๋ก๋ action ๋ฉ์๋๋ฅผ importํด์๋๋ฐ ๊ทธ๊ฑธ ๋ฐ๋ก ์ฌ์ฉํ์ง ๋ชปํ๊ณ  `useDispatch`๋ฅผ ํตํด ์ฌ์ฉํด์ผ ํ๋ค๋ ์ ์ด ์กฐ๊ธ ์ด์ํ๊ฒ ๋๊ปด์ก์ต๋๋ค. ๋ ํ์ ์ค๋ฅ๊ฐ ์์๋๋ฐ, ์ด๋ฅผ ์ํด `RootState`๋ผ๋ ๋ฐํ ํ์์ ์ ์ธํด์ ์ฌ์ฉํด์ผ ํฉ๋๋ค. `store.ts` ์ฝ๋์ ๋ณด์ด๋ ๊ฒ์ฒ๋ผ ์๋ฌด๋ฐ๋ ์ฌ์ฉํด๋ ๋  ๋งํผ ์ถ์ํ๊ฐ ๋์ด์๋ ํ์์ธ๋ฐ ๊ธฐ๋ณธ์ผ๋ก ์ง์ํด์ฃผ์ง ์๋ ๊ฒ์ ์กฐ๊ธ ์์ฝ์ต๋๋ค.

![๋ฆฌ๋์ค.gif](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_04.gif)

์์ฃผ ๋ฌด์ฉ๊ธด ์ปดํฌ๋ํธ๋ฅผ ํตํด ์ ๋๋ก ์๋ํจ์ ํ์ธํ  ์ ์์์ต๋๋ค.

## ๊ทธ๋์ Redux ์ฐ๋์?

### ์ฅ์ 

- ๋ ํผ๋ฐ์ค๊ฐ ๋งค์ฐ ๋ง์ต๋๋ค.
- ๊ธ์๋ ์ธ๊ธํ์ง ์์์ง๋ง Redux Devtools๋ฅผ ํตํด ๋๋ฒ๊น์ ์ง์ํด ์ค๋ค๊ณ  ํฉ๋๋ค.
- (Recoil๊ณผ ๋น๊ตํด์) ์์ ์ ์ด๊ณ , ๋ฏฟ์ ์ ์์ต๋๋ค. ์ ๋ง ์ ์ฌ์ฉํ๋ค๋ฉด์.

### ๋จ์ 

- reducer, store, type ๋ฑ๋ฑ ์ํ ํ๋๋ฅผ ์ถ๊ฐํ๊ธฐ ์ํ ์ฝ๋๊ฐ ์ ๋ง ๊น๋๋ค.
- ๋ ํผ๋ฐ์ค๊ฐ **๋๋ฌด** ๋ง์ต๋๋ค.
- ์์ ๋ ๋ฌธ์ ์ ์ผ๋ก ์ธํด ์ง์์ฅ๋ฒฝ์ด ๊ต์ฅํ ๋์์ต๋๋ค.

Redux์ ๋ํ ์ฒซ ์ธ์์ ๊ต์ฅํ ๋ถ์น์ ํ์ต๋๋ค. ์ปค๋ฎค๋ํฐ๊ฐ ํฐ ๊ฒ์ ์ข์๋ฐ, ์ง์ง ๋๋ฌด ๋๋ฐ ํฌ๋ค๋ณด๋ ๋ ํผ๋ฐ์ค๋ค์ด ์๋ก ๋ฐ๋ ๋ฐฉํฅ์ผ๋ก ์ ๋ฅผ ์ด๋๋ ๊ฒฝ์ฐ๊ฐ ๊ฝค ๋ง์์ต๋๋ค. ์ค์ ๋ก ์ ๋ ๋ํ๊ต ํ๋ก์ ํธ๋ฅผ ํ๋ฉด์ ์ด๋ฐ ์  ๋๋ฌธ์ Redux๋ฅผ ํฌ๊ธฐํ๊ณ  props๋ฅผ ๋ง๊ตฌ ๋ด๋ ธ๋ค ์ฌ๋ ธ๋ค ํ๋ ์์์ ์ธ ๋ฐฉ๋ฒ์ ์ ํํ๊ธฐ๋ ํ๊ตฌ์.

๊ทธ๋ผ์๋ ๋ถ๊ตฌํ๊ณ  Redux๋ฅผ ์ฌ์ฉํ  ์ค ์๋ ๊ฒ์ ์ค์ํฉ๋๋ค. ์ปค๋ฎค๋ํฐ๊ฐ ํฌ๋๊น์. ๊ธฐํ๊ฐ ๋  ๋๋ง๋ค ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๋ํ ์ง๋ฌธ์ ํด ๋ณด๋ฉด, ํฐ ํ๋ก์ ํธ์์๋ ์์ง Redux๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๊ฐ ๋ง๋ค๋ ๋ต๋ณ์ ๋ฃ๊ณค ํฉ๋๋ค. ๋ ์ฃผ๋ณ์ Redux๋งจ๋ค์๊ฒ ๋ฌผ์ด๋ณด๋ฉด ๋ช ๋ฒ ๊ฒช์ด๋ณด๋ฉด ๊ธ๋ฐฉ ์ต์ํด์ง๋ค๊ณ  ํ๋, ์ฒซ ๊ณ ๋น๋ฅผ ๋๊ธฐ๊ณ  ๋๋ฉด ์ ์ฌ์ฉํ  ์ ์์ง ์์๊น.. ๊ทธ๋ฐ ๊ธฐ๋๋ฅผ ํด ๋ด๋๋ค.

# ๐ Recoil

## ๋ฆฌ-ํ(๋ฆฌ์ฝ์ผ ํ์ด๋ผ๋ ๋ป)

์ด๋ฒ์ Recoil์ ์ฒดํํด ๋ณผ ์ฐจ๋ก์๋๋ค. Recoil๋ก ๋งํ  ๊ฒ ๊ฐ์ผ๋ฉด ๋ฆฌ์กํธ๋ฅผ ๋ง๋  ํ์ด์ค๋ถ์ด ์ง์  ๊ณต๊ฐํ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.

์ฐ๋ฆฌ ๋ชจ๋๊ฐ React๊ฐ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋์ํ๋ค๋ ๊ฒ์ ์๊ณ  ์์ง๋ง, ๋ฆฌ์กํธ์ ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ์กฐ๊ธ ๋ค๋ฅธ ์ธ๊ณ์ฒ๋ผ ๋๊ปด์ง๋ ๋ถ๋ค์ด ์์ ๊ฒ์๋๋ค. ์ด๋ฅผํ๋ฉด, React๋ฅผ ์ํด ๋ง๋ค์ด์ง ํจํค์ง๋ React์์ ์ฌ์ฉํ๊ณ , VanilaJS๋ฅผ ์ํด ๋ง๋ค์ด์ง ํจํค์ง๋ VanilaJS์์๋ฐ์ ์ธ ์ ์๋ ๊ฒ์ฒ๋ผ ์๊ฐํ๋ ๋ถ๋ค์ด ์์ฃ .

![Untitled](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_05.png)

์ด๋ฐ ๊ฑฐ๋ฆฌ๊ฐ๋๋ฌธ์ ๋ง์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ง์  **โReact์ค๋ฌ์ดโ** ๋ฐฉ์์ผ๋ก ์ฌ์ฉํ  ์ ์๋๋ก ์ง์ํ๊ธฐ๋ ํฉ๋๋ค. ์ ์ฌ์ง์ ์ ๋ฒ ํ๋ก์ ํธ์์ ์ฌ์ฉํ๋ ์บ๋ฒ์ค ๋ผ์ด๋ธ๋ฌ๋ฆฌ `konva`์ ๋ฆฌ์กํธ ๋ฒ์ , `react-konva` ์ฝ๋ ์ผ๋ถ์๋๋ค.

์ ๊ฐ ์ด ์ด์ผ๊ธฐ๋ฅผ ์ ํ๋ ๊ฒ์ผ๊น์? `Recoil`์, ์ค์ง **React๋ง์ ์ํด ๋ง๋ค์ด์ง React ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ**์ด๊ธฐ ๋๋ฌธ์๋๋ค. ์ด ์ ์ ๊ฐ์ฅ ํฐ ํน์ง์ผ๋ก ๋ง์๋๋ฆด ์ ์๊ฒ ๋ค์. ๊ทธ ์ธ์๋ atom ๊ตฌ์กฐ๋ฅผ ํตํด์ ์ํ๋ฅผ ๊ด๋ฆฌ ์ด์ฉ๊ตฌ.. ํ๋ ์๋ ๋ฐฉ์์ ๋ํ ๋ด์ฉ์ด ์์ต๋๋ค. ์ด ๊ธ์์ ํ์ง ์๊ธฐ๋ก ํ ์ด์ผ๊ธฐ๋ค์.

## ์ฌ์ฉํด ๋ด์๋ค

```tsx
npm i recoil
```

์ค์นํด ์ค๋๋ค. redux์ ๋น๊ตํ์ ๋ ๋ณ๋ค๋ฅธ ์ค์น๋ฅผ ์๊ตฌํ์ง ์๊ธด ํ๋ฐ, ํ .. ๋ณ ์๊ฐ์ ๋ค์ง ์์ต๋๋ค.

```tsx
// atom.ts
import { atom } from "recoil";

const counterState = atom({
  key: "count",
  default: 0,
});

export default counterState;
```

redux์ reducer์ ๋น์ทํ ์ญํ ์ ํ๋ `atom`์ ์ ์ธํด ์ค๋๋ค. reducer๋ ์ด๊ธฐ ๊ฐ๊ณผ action๊น์ง ๋ชจ๋ ์ ์ํ์ง๋ง, `atom`์ `key`์ `default value`๋ง ์ง์ ํด์ exportํด์ฃผ๋ฉด ๋ฉ๋๋ค.

```tsx
// App.tsx
...
export default function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}
```

redux์ Provider์ฒ๋ผ ์ญ์ `RecoilRoot`๋ฅผ ํตํด atom์ ์ฌ์ฉํ  ์์ญ์ ๋ฌถ์ด ์ค๋๋ค. ๋ณ๋ค๋ฅธ store๋ฅผ ์ง์ ํ์ง ์๋๋ก ๋์ด ์๋๋ฐ, ๊ฐ๊ฐ์ `RecoilRoot`๋ ๋ชจ๋  atom์ ์ฌ์ฉํ  ์ ์๋ ๋ชจ์์๋๋ค. ํ์ง๋ง ์ฌ๋ฌ `RecoilRoot`๋ ์๋ก atom ๊ฐ์ ๊ณต์ ํ์ง ์๊ธฐ ๋๋ฌธ์, ์ฌ๋ฌ ๊ฐ๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ ํด๋น ์ปดํฌ๋ํธ๊ฐ ์ด๋ ์์ญ์ ์๋์ง๋ฅผ ์ ์ฒดํฌํ  ํ์๊ฐ ์๊ฒ ๋ค์. ๊ผญ ๋ฉํฐ๋ฒ์ค..๊ฐ์ต๋๋ค.

```tsx
// TestRecoil.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import counterState from './recoil/atom';

export default function Test() {
  const [count, setCount] = useRecoilState(counterState);
	return (
	...
	<button type="button"
	onClick={() => {
		setCount(count - 1);
	}}
	>-</button>
	...
	);
}
```

Recoil์ `useState` ํ๊ณผ ๊ฐ์ ์ฌ์ฉ๋ฒ์ ๊ฐ์ต๋๋ค. import๋ง ์ ํด์คฌ๋ค๋ฉด, `useRecoilState`๋ฅผ ํตํด atom์ ์ฌ์ฉํ๊ฒ ๋ค ์ ์ธํ๊ณ  ๋ฐ๋ก ์ฌ์ฉํ  ์ ์์ต๋๋ค. Recoil์ ๊ฐ์ ์ด ๋๋ฌ๋๋ ๋ถ๋ถ์ด๋ค์. ์ฐธ์กฐ๋ง ํ๋ ๊ฒฝ์ฐ์๋ `useRecoilValue`, ํ ๋น๋ง ํ๋ ๊ฒฝ์ฐ์๋ `useSetRecoilState` ๋ฅผ ํตํด ํ ์ชฝ๋ง ์ฌ์ฉํ  ์๋ ์์ต๋๋ค.

![๋ฆฌ์ฝ์ผ.gif](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_06.gif)

๊ฒฐ๊ณผ๋ฌผ์ Redux์ ๋๊ฐ์ด ๋์ํฉ๋๋ค.

## ๊ทธ๋์ Recoil ์ฐ๋์?

### ์ฅ์ 

- React์ค๋ฌ์
- atom์ ์ ์ธ์ด ๊ฐ๋จํ๋ค

### ๋จ์ 

- ์์ง ์คํ์  ๊ธฐ๋ฅ(experimental feature)์ด๋ค
- ๋ฉ๋ชจ๋ฆฌ ๋์ ๋ฌธ์ 
- React์ ์ข์์ ์ด๋ค.

๊ทธ๋ ์ต๋๋ค. ์์ฝ๋ง ๋ด๋ ๋๊ปด์ง์ง๋ง Recoil์ ๊ทธ๋ ๊ฒ **์์ ์ ์ธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ์๋๋๋ค.** ์ฐ์  ๋ ํฌ์งํ ๋ฆฌ ์์ฒด๊ฐ facebookexperimental์ ์๊ณ , [issue์ ๊ฒ์](https://github.com/facebookexperimental/Recoil/issues?q=is%3Aissue+is%3Aopen+memory)ํด๋ณด๋ฉด ๋ฉ๋ชจ๋ฆฌ ๋์์ ๋ํ ๋ ํฌํธ๊ฐ ๊ฝค ๋ง์ต๋๋ค. ์ด๋ฐ ๋ฌธ์  ๋๋ฌธ์ Recoil์ ์์ง๊น์ง๋ โ๋ฆฌ์กํธ์ค๋ฝ๋คโ๋ ์๋์ ์ธ ๊ฐ์ ์ ๊ฐ์ง๊ณ ๋ ๊ทธ๋ ๊ฒ ์ข์ ์ฑ์ ์ ๋ด์ง ๋ชปํ๊ณ  ์์ต๋๋ค. ์ค์  ์๋น์ค๋ฅผ ๊ตฌํํ๋๋ฐ โ์คํ์  ๊ธฐ๋ฅโ์ ์ํ ๊ด๋ฆฌ๋ฅผ ๋ฏฟ๊ณ  ๋งก๊ธธ ์ ์์๊น์? React๋ฅผ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ค ๋ณด๋ React ์ํ๊ณ์์ ๋ฒ์ด๋๋ค๋ฉด ๋ ๋ค๋ฅธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๊ณต๋ถํด์ผ ํ๋ค๋ ์ ๋ ๋ฌธ์ ๊ฐ ๋  ๊ฒ ๊ฐ๋ค์. ๋ฉ๋ชจ๋ฆฌ ๋์ ๋ฌธ์ ์ ๋ํด ๋ ์์ธํ ์๊ณ  ์ถ์ผ์๋ฉด [์ด ๋งํฌ](https://medium.com/@altoo/recoil%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%AC%B8%EC%A0%9C-fb709973acf2)๋ฅผ ์ฐธ๊ณ ํ์ธ์.

ํ์ง๋ง Recoil์ ๋ถ๋ช ๋งค๋ ฅ์ ์๋๋ค. ํนํ React๋ฅผ ํตํด ๊ตฌํํ๋ค๋ฉด Recoil์ ๋งค๋ ฅ์ ๋ฟ๋ฆฌ์น๊ธฐ๋ ์ฝ์ง ์์ต๋๋ค. ์๋๋ฉด Recoil์ **React์ค๋ฌ์ฐ๋๊น์.** useState๋ฅผ ์ฐ๋ ๊ฒ๊ณผ ์์  ๋๊ฐ์ด ์ ์ญ ์ํ๋ฅผ ๊ด๋ฆฌํ๋ค๋, ์ด ํน์ฑ ํ๋๋ง์ผ๋ก๋ ์ ํํ  ์ด์ ๋ ์ถฉ๋ถํด ๋ณด์๋๋ค.

# โ ๊ทธ๋์ ๋ญ ์ฐ๋์?

![Untitled](/image/post/2022/11/redux-vs-recoil/redux_vs_recoil_07.png)

Redux์ Recoil์ ๋ํด ์์๋ดค์ต๋๋ค. ์ฌ์ค ์ฐ๋ฆฌ ํ๋ก์ ํธ์ ์ ์ฉํ  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ ํํ๊ธฐ ์ํด ๊ณต๋ถํ๋๋ฐ, ๊ณต๋ถํ๊ณ  ๋๋ ๋ ๋ณต์กํด์ง๋ค์. ํ์ง๋ง ์ด๋ ํ ์ชฝ์ด โ์ข๋คโ๊ณ  ๊ฒฐ๋ก ์ง์ ์ ์๋ ๋ฌธ์ ๋ ์๋๊ณ  ํฅ๋ถ์ ๋จน์์ง ์๋ถ์ ๋จน์์ง, ๊ทธ ๋ ์ ๊ธฐ๋ถ์ ๋ฐ๋ผ ๋ฌ๋ผ์ง๋ ๊ทธ๋ฐ ์ ํ์ผ ๊ฒ ๊ฐ์ต๋๋ค. ์ฐธ๊ณ ๋ก ์ ๋ ํฅ์ ์ซ์ดํฉ๋๋ค.

์์ผ๋ก์ ํ๋ก์ ํธ์์ ์ ๊ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๊ณ ๋ฅธ๋ค๋ฉด ์ด๋ค ๊ธฐ์ค์ผ๋ก ์ ํ  ์ ์์๊น์? ์ ๋ ํ๋ก์ ํธ์ ๊ท๋ชจ๋ฅผ ๊ธฐ์ค์ผ๋ก ๊ฒฐ์ ํ  ๊ฒ ๊ฐ์ต๋๋ค. ์ฌ์ค Redux๋ ์์ ์ ์ด์ง๋ง ํ ์ด ํ๋ก์ ํธ์ ์ ์ฉํ๊ธฐ์๋ ๋๋ฌด ๋ง์ ๋ฐ์์์ ํ์๋ก ํ๊ฑฐ๋ ์. ๋ฐ๋ฉด ์ปค๋ค๋ ํ๋ก์ ํธ๋ฅผ ํด์ผ ํ๋ค๋ฉด Redux๋ฅผ ์ฌ์ฉํด์ผ ํ  ๋ ์ด ์ฌ ์๋ ์๊ฒ ์ฃ . ๋ง๋ถ์ด์๋ฉด ์ปดํผ๋๋ฐ์ด ๋ ์ด๋ค ๊ธฐ์์์๋ Redux์ Recoil์ ํจ๊ป ์ฌ์ฉํ๋ค๋ ๋ต๋ณ์ ์ฃผ์๊ธฐ๋ ํ์ต๋๋ค.

# ๐ Refs.

[TypeScript and redux tool kit , createSlice: Assignment to property of function parameter 'state'](https://stackoverflow.com/questions/61570021/typescript-and-redux-tool-kit-createslice-assignment-to-property-of-function)  
[Getting Started with Redux](https://labs.tadigital.com/index.php/2020/04/20/getting-started-with-redux/)  
[๋งค๊ฐ๋ณ์ ์ฌํ ๋น์ ์ง์ํ์(no-param-reassign)](https://mong-blog.tistory.com/entry/%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98-%EC%9E%AC%ED%95%A0%EB%8B%B9%EC%9D%84-%EC%A7%80%EC%96%91%ED%95%98%EC%9E%90no-param-reassign)  
[Redux Toolkit with Typescript: How to Get Started](https://bluelight.co/blog/redux-toolkit-with-typescript)  
[RecoilRoot | Recoil](https://recoiljs.org/docs/api-reference/core/RecoilRoot/)  
[React์ค๋ฌ์ด ์ํ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ, Recoil์ ์์๋ณด์](https://leego.tistory.com/entry/React-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%EC%9D%98-%EB%AF%B8%EB%9E%98-Recoil%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)  
[Recoil์ ๋ฉ๋ชจ๋ฆฌ ๋์ ๋ฌธ์ ](https://medium.com/@altoo/recoil%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%AC%B8%EC%A0%9C-fb709973acf2)  
๊ทธ๋ฆฌ๊ณ  ๋ถ์คํธ์บ ํ ์ปจํผ๋ฐ์ค๋ฅผ ํตํด Recoil์ ๋ํด ์ค๋ชํด ์ฃผ์  **J039 ๊น์ฑ์** ์บ ํผ๋๊ป ๊ฐ์ฌ์ ์ธ์ฌ๋ฅผ ์ฌ๋ฆฝ๋๋ค. ๐
