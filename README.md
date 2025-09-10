שם הפרוייקט:
  - " Linkodkod "

מהות הפרוייקט:
  - הפרוייקט מדמה אפליקציה חברותיתי בה ניתן לצפות בפוסטים שמשתמשי האפליקציה העלו, וכן ליצור פוסטים.
  האפליקציה מותנת ברישום ו/או כניסה עם סיסמא.

לינק לגיטאהב:  https://github.com/israelr9897/Linkodkod.git

פקודות התקנת הספריות:
  - npm install

פקודות הרצה:
  - צד שרת:
    - npm run start
  צד לקוח:
    - npm run dev

הכלים העיקריים שנעשו בהם שימוש בפרויקט:
  צד שרת:
    - express ליצירת שרת
    - jsonwebtoken ליצירת טוקן
    - bcrypt להצפנת הסיסמא

  צד לקוח:
  - react לבנית דף HTML
  - react-router לניתוב בין דפים
  - css לעיצוב הדפים

מבנה התיקיות:

- Linkodkod 
  - Front
    - SRC
    - index.html
    - App.tsx
    - Main.tsx
      - api
         - postsApi
         - authApi
      - assets
        - images
          - images files...
        - styles
           - styles files...
      - components
        - auth
          - Auth.tsx
          - SignIn.tsx
          - SignUp.tsx
        - layout
          - Header.tsx
          - Layout.tsx
          - posts
            - Post.tsx
            - Posts.tsx
            - AddPost.tsx
      - pages
          - AddPost.tsx
          - AuthPage.tsx
          - HomePage.tsx
          - PostPage.tsx
      - useContext
          - postsContext.tsx
          - userContext.tsx

  - Backend
    - App.js
    - CTRL
        - postsCtrl.js
        - authCtrl.js
    - public
      - images
        - images files...
    - routs
      - AuthRout.js
      - postsRout.js
      - configRout.js
    - services
        - AuthService.js
        - postsService.js
    - db
        - postsDB.txt
        - postsDB.txt
        - userDal.js
        - postsDal.js
    - middelware
        - checkParams.js
        - postsDal.js

  
          

