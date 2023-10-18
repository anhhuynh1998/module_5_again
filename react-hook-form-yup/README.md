# Từ useState đến useReducer
như ta đã biết useState có thể quản lý những trạng thái và thay đổi nó và các chức năng khác của react(lifecycle,side effect,...)
### 1 ví dụ nhỏ về useState
```javascript
import React, {useState} from 'react'

function Example() {
    const [state, setState] = useState(0);
    
    return (
        <div> 
            <button onClick = {() => setState(state + 1)}> 
                Click me : {state} 
            </button>
        </div>
    )
}
```
##### Như các bạn đã thấy ở ví dụ trên { useState }  hook khởi tạo initialState là tham số truyền vào, trả về cặp state value là { state } và 1 hàm dùng để update state đó { setState } 
### Vậy nếu logic state của component trên trở nên lớn và phức tạp hơn và khó quản lý hơn thì sao ?
###### Chẳng sao cả các bạn vẫn sử dụng useState làm việc chúng bình thường như chưa hề có cuộc chia ly !! (Ahihi !!). Chỉ là nó khiến bạn khó quản lý hơn và khi các bạn muốn nâng cấp hay bảo trì nó khó hơn chút mà thôi . Nhưng hôm nay tôi muốn giới thiệu các bạn về 1 hook mà ở đó có thể giúp bạn quản lý tốt việc đó.
###### Ở trong React Hook có 1 hook là useReducer được sinh ra để có dễ quản lý và tổ chức state tốt hơn. 
##### Vậy useReducer là gì mà nó có thể quản lý và tổ chức state tốt hơn useState ??
### Vậy thì sau đây mình xin giới thiệu đôi chút về useReducer !
# useReducer 
- useReducer là gì ?
- 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
