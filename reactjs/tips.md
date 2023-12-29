### 1. Prettier simple config

- Go to: https://prettier.io/playground/
- Adjust the fields on the left screen.
- After that, Click `copy config JSON`
- Go to source code, in root path create file `.prettierrc`, paste config in it, then, `save`
- Done

### 2. Using eslint in React App

- yarn global add eslint
- In project, can install `yarn add --dev eslint`
- Run `npx eslint --init`
- Then, choose options which appropriate with your project (install plugin work with react js `eslint-plugin-react`)
- After that, file `.eslintsrc.json` will be created. You can add some coding rules if you want, or can ignore by adding `.eslintignore` file
- Add script into `package.json` file; example: `"lint": "eslint './\*_/_.js?(x)'"` and check eslint when run dev: `"dev": "yarn lint & next dev"`
- Yeah done.
- You can test by running the command: `yarn lint` or `yarn dev`

Example rules:

```json
"rules": {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
```


- Define dynamic type:
```ts
/* eslint-disable @typescript-eslint/no-unused-vars */

type BaseResponse<T = void> = T extends void
  ? {
      message?: string;
      code?: string;
    }
  : {
      data?: T;
      message?: string;
      code?: string;
    };

export type APIResponse<T = void, K = void> = K extends void
  ? BaseResponse<T>
  : BaseResponse<T> & K;

// example

interface User {
  name: string;
  username: string;
}

// case 1: Response include key Data
const userA: APIResponse<User> = {
  data: {
    username: '',
    name: '',
  },
  message: '',
  code: '',
};

// case 2: Response include key Data with Optional properties
const userB: APIResponse<Partial<User>> = {
  data: {},
  message: '',
  code: '',
};

// case 3: No key data
const userC: APIResponse = {
  message: '',
  code: '',
};

// case 4: No key data, but data is in level 1
const userD: APIResponse<void, User> = {
  message: '',
  code: '',
  username: '',
  name: '',
};

// case 5: No key data, but data is in level 1 with Optional properties
const userE: APIResponse<void, Partial<User>> = {
  message: '',
  code: '',
  username: '',
};

```