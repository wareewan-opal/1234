## Horoscope Project Sec2 Group 6
Project นี้เป็นส่วนหนึ่งของรายวิชา INT203 อาจารย์ผู้สอน : ผศ.ดร อุมาพร สุภสิทธิเมธี

## Members
| No. | Name              | Student ID   |
|:---:|-------------------|--------------|
|  1  | นางสาว นภัสวรรณ บุตรวัตร      | 63130500064  |
|  2  | นาย นิธิศ ลำพาย   | 63130500072  |
|  3  | นางสาว ปิยะมน สุดดี   | 63130500082 |
|  4  | นาย พิชญะ ไพรินทร์   | 63130500086 |
|  5  | นางสาว วารีวัล พงศ์พันธ์ชัยกุล   | 63130500105 |

## What about Project?

โปรเจคของพวกเรากลุ่มที่ 6 เป็นโปรเจคเกี่ยวการมูเตลู หรือว่าเรื่องของความเชื่อ เป็นการทำนายดูดวงแบบออนไลน์ เนื่องจากสถานการณ์โควิดในปัจจุบัน ทำให้บางคนนั้นไม่สามารถเดินทางออกไปหาพ่อหมอหรือแม่หมอตามต้องการได้ เราจึงสร้าง Platform นี้ขึ้นมาเพื่อตอบสนองผู้ใช้งานที่อยากจะดูดวงแต่ไม่สามารถไปได้ด้วยตนเองได้

## What about Firstpage?

![Imgur](https://imgur.com/i9GHoYD.jpg)

หน้าแรกของโปรเจคพวกเราเป็นการให้ผู้ใช้งานนั้นเลือกหมวดคำทำนายที่ผู้ใช้งานนั้นสนใจ โดยประกอบไปด้วย
- LOVE HOROSCOPE คือ ด้านความรัก
- STUDY HOROSCOPE คือ ด้านการเรียน
- HEALTH HOROSCOPE คือ ด้านสุขภาพ
- FINANCE HOROSCOPE คือ ด้านการเงิน
โดยหน้าการ์ดในแต่ละด้านก็จะแตกต่างกันออกไปตามหมวคำทำนาย ผู้ใช้งานสามารถกดที่หน้าไพ่ หรือว่า ที่ตัวอักษร เพื่อไปยังหน้าเลือกไพ่คำทำนายของด้านนั้น ๆ 
![Imgur](https://imgur.com/Z1IpJxx.jpg)

## What about card?
ไพ่ที่พวกเรานำมาใช้นั้นเป็นชุดที่มีชื่อว่า Major Arcana โดยพวกเรามีการสุ่มการ์ดก่อนที่จะให้ผู้ใช้งานนั้นเลือกไพ่เพื่อไม่ให้เป็นการ lock ผลคำทำนายของแต่ละหมวดหมู่ พวกเราเก็บข้อมูลของไพ่ไว้ในไฟล์ data/db.json ในส่วนของ Array ที่มีชื่อว่า major-arcana 

![Imgur](https://imgur.com/wnHnpKc.jpg)

### Step Horoscope :
Step 1 : เมื่อผู้ใช้งานเข้ามายังหน้าเลือกไพ่แล้ว ผู้ใช้งานสามารถเลือกไพ่เพื่อทำนายดวงชะตาได้ 3 ใบเท่านั้น เพื่อความแม่นและความเป็นมงคล 
Step 2 : เมื่อผู้ใช้งานเลือกไพ่ครบ 3 ใบเรียบร้อยแล้วจะมี popup ยืนยันว่า ผู้ใช้งานได้เลือกไพ่ครบ 3 ใบเรียบร้อยแล้ว 
Step 3 : ให้ผู้ใช้งานนั้นกดที่ปุ่ม OK เพื่อไปหน้าคำทำนายได้เลย

### Exmaple Result Popup:
![Imgur](https://imgur.com/ceIc7iJ.jpg)
### Exmaple Horoscope Result :
![Imgur](https://imgur.com/hqLG8Fu.jpg)

## Any Function (Sun Wish)
พวกเราได้จัดทำพื้นที่ที่ให้ผู้ใช้งานสามารถเขียนคำขอหรือคำอธิฐานจากดวงอาทิตย์ได้ ผู้ใช้งานสามารถอ่านคำอธิฐานของตัวเองได้ใต้ที่เขียนคำขอหรือคำอธิฐาน ถ้าผู้ใช้งานรู้สึกอยากแก้ไขก็สามารถแก้ไขได้โดยกดที่ปุ่ม edit หรือถ้าผู้ใช้งานรู้สึกไม่อยากอธิฐานหรือขออะไรแล้วก็สามารถลบคำขอได้ โดยกดปุ่ม delete โดยคำขอหรือคำอธิฐานของผู้ใช้งงานจะมีการถูกเก็บลง data/db.json ในส่วนของ Array ที่มีชื่อว่า requesttosun

### Step Sun Wish :
- Step 1 : ผู้ใช้งานกดไปที่รูปดวงอาทิตย์ในหน้า HOME
- Step 2 : สามารถกรอกคำขอหรือคำอธิฐานในช่องกรอกข้อความ
- Step 3 : ถ้าผู้ใช้งานรู้สึกอยากแก้ไขคำขอหรือคำอธิฐาน สามารถแก้ไขได้โดยกดปุ่ม edit หรือ ถ้าผู้ใช้งานรู้สึกไม่อยากอธิฐานหรือขออะไรแล้ว สามารถลบคำขอได้โดยกดปุ่ม delete

