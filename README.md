## API

**/guest"** สำหรับบุคลทั่วไป สามารถอ่นโพสต์ได้
- **/guest** < method : **GET** > 
สำหรับ **guest** เข้ามาอ่านทุกโพสต์ 
```json
body : {}
headers : {}
```
---

- **/guest/:id** < method : **GET** > 
สำหรับ **guest** เข้ามาอ่านโพสต์ 
```json
body : {}
headers : {}
```
---

- **/guest** < method : **POST** >
สำหรับ **admin** เพิ่มโพสต์ 
```json
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---

- **/guest** < method : **PUT** >
สำหรับ **admin** แก้ไขโพสต์
```json
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---

- **/guest** < method : **DELETE** >
สำหรับ **admin** ลบโพสต์
```json
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---
---

**/blog** สำหรับสมาชิกเท่านั้นที่อ่านได้
- **/blog** < method : **GET** > 
สำหรับ **member** เข้ามาอ่านทุกโพสต์ 
```json
body : {}
headers : {}
```
---

- **/blog/:id** < method : **GET** > 
สำหรับ **member** เข้ามาอ่านโพสต์ 
```json
body : {}
headers : {}
```
---

- **/blog** < method : **POST** >
สำหรับ **admin** เพิ่มโพสต์ 
```json
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---

- **/blog** < method : **PUT** >
สำหรับ **admin** แก้ไขโพสต์
```json
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---

- **/blog** < method : **DELETE** >
สำหรับ **admin** ลบโพสต์
```json
body : { author, title, cover, tag, content }
headers : {access-token : < admin token >}
```
---
---

**/member"** สำหรับลงทะเบียนและลงชื่อเข้าใช้
- **/member/register** 
สำหรับลงทะเบียน **member** ใหม่
```json
body : {userName, email, password}
```
- **/member/login** 
สำหรับลงชื่อเข้าสู่ระบบ
```json
body : {email, password}
```
 ---

**/admin"** สำหรับเพิ่มแอดมิน
- **/admin/register** 
สำหรับลงทะเบียน **admin** ใหม่
```json
body : {admin, password}
headers : {access-token : < admin token >}
```
- **/admin/login** 
สำหรับลงชื่อเข้าสู่ระบบ
```json
body : {admin, password}
```
---
