## API

*setting project*
**.env file**
```js
PORT = < server port >
MONGO = < mongoDB url >
TOKEN_MAIN = < token key up to you for admin >
TOKEN_KEY = < token key up to you for member >
exp_token = < token expire date 1m 1h 1d 1w 1m up to you >
```
---
**dependencies**
```json
"bcrypt": "^5.1.0",
"cors": "^2.8.5",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"jsonwebtoken": "^9.0.1",
"mongoose": "^7.4.0"
```
---
**/guest** สำหรับบุคลทั่วไป สามารถอ่นโพสต์ได้
- **/guest** < method : **GET** > 
สำหรับ **guest** เข้ามาอ่านทุกโพสต์ 
```js
body : {}
headers : {}
```


- **/guest/:id** < method : **GET** > 
สำหรับ **guest** เข้ามาอ่านโพสต์ 
```js
body : {}
headers : {}
```


- **/guest** < method : **POST** >
สำหรับ **admin** เพิ่มโพสต์ 
```js
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```


- **/guest** < method : **PUT** >
สำหรับ **admin** แก้ไขโพสต์
```js
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```


- **/guest** < method : **DELETE** >
สำหรับ **admin** ลบโพสต์
```js
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---
---

**/blog** สำหรับสมาชิกเท่านั้นที่อ่านได้
- **/blog** < method : **GET** > 
สำหรับ **member** เข้ามาอ่านทุกโพสต์ 
```js
body : {}
headers : {}
```


- **/blog/:id** < method : **GET** > 
สำหรับ **member** เข้ามาอ่านโพสต์ 
```js
body : {}
headers : {}
```


- **/blog** < method : **POST** >
สำหรับ **admin** เพิ่มโพสต์ 
```js
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```


- **/blog** < method : **PUT** >
สำหรับ **admin** แก้ไขโพสต์
```js
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```


- **/blog** < method : **DELETE** >
สำหรับ **admin** ลบโพสต์
```js
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---
---

**/member** สำหรับลงทะเบียนและลงชื่อเข้าใช้
- **/member/register** 
สำหรับลงทะเบียน **member** ใหม่
```js
body : {userName, email, password}
```
- **/member/login** 
สำหรับลงชื่อเข้าสู่ระบบ
```js
body : {email, password}
```
 ---
 ---

**/admin** สำหรับเพิ่มแอดมิน
- **/admin/register** 
สำหรับลงทะเบียน **admin** ใหม่
```js
body : {admin, password}
headers : {access-token : < admin token >}
```
- **/admin/login** 
สำหรับลงชื่อเข้าสู่ระบบ
```js
body : {admin, password}
```
---
