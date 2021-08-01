### 1. Tổ chức API trong ReactJS project

**1.1. API là gì?**

- Là chuẩn giao tiếp giữa Client và Server

**1.2. XHR (XMLHTTPRequest)** --> cách làm cũ
```js
const xhr = new XMLHttpRequest();
const url = 'https://js-post-api.herokuapp.com/api/products?
_limit=10&_page=1'
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
if (xhr.status != 200) { // analyze HTTP status of the response
alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not
Found
} else { // show the result
console.log(xhr.response)
}
};
```
**1.3. Fetch**
- Có sẵn trong trình duyệtyệt
- Dùng cho project nhỏ, đơn giản
```js
try {
  const url =
    "https://js-post-api.herokuapp.com/api/products?_limit=10&_page=1";
  const response = await fetch(url);
  const responseJSON = await response.json();
  console.log(responseJSON);
} catch (error) {
  console.log("Failed to fetch products: ", error);
}
```

**1.4. Axios (Recommend)**

- Sử dụng được cả trên browser và node.js
- Inteceptors.
- Cancelrequests.
- Auto transform JSON data.

```js
# Install axios package
npm install --save axios
```

```js
try {
  const url =
    "https://js-post-api.herokuapp.com/api/products?_limit=10&_page=1";
  const response = await axios.get(url);
  console.log(response);
} catch (error) {
  console.log("Failed to fetch products: ", error);
}
```
**1.5. Tổ chức API như thế nào?**
- Thiết lập một http client và đảm bảo tất cả các http requests đều phải đi qua nó, nhằm mục đích xử lý những tác vụ chung như:
    - Thêm common headers: content-type, ...
    - Attach thêm token và xử lý expired token.
    - Xử lý lỗi chung.
- Khuyến khích sử dụng axios trong project thực tế.


```
src
|__ api
| |__ axiosClient.js : http client for our website
| |__ productApi.js : all apis of product resources
| |__ categoryApi.js
| |__ userApi.js
| |__ ...
|
|__ components
|__ features
|__ ...
|__ App.js
```
 
**Setup axiosClient.js**
```js
// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
```

**Setup productApi.js**

```js
// api/productApi.js
class ProductApi {
  getAll = (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;
```

**Sử dụng productApi trong ReactJS component**

```js
function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll(params);
        console.log("Fetch products successfully: ", response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  return <ProductList productList={productList} />;
}
```





