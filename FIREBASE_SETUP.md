# Firebase Setup

## 1) Firebase проект түзүңүз
1. Firebase Console ачып жаңы проект түзүңүз.
2. `Authentication -> Sign-in method` ичинде `Google` кошуңуз.
3. `Firestore Database` түзүңүз.
4. `Project settings -> Web App` түзүп, конфигди алыңыз.

## 2) app-config.js толтуруңуз
`app-config.js` ичиндеги `firebase` объектисине Firebase config коюңуз.

Мисал:

```js
window.APP_CONFIG = {
  firebase: {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  },
  adminUids: ["YOUR_UID"],
  localAdminPassword: "1234"
};
```

`YOUR_UID` алуу үчүн:
1. Сайтта админ менен Google login кылыңыз.
2. Browser console'до `firebase.auth().currentUser.uid` аткарыңыз.
3. Ошол UID'ди `adminUids` тизмесине киргизиңиз.

## 3) Firestore Rules
Төмөнкү rules'ту коюңуз:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null &&
        request.auth.uid in ['YOUR_UID'];
    }

    match /approved_members/{docId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /pending_members/{docId} {
      allow read, update, delete: if isAdmin();
      allow create: if true;
    }
  }
}
```

Эскертүү: `YOUR_UID` жерине реалдуу UID коюңуз.

## 4) Биринчи seed маалымат
1. Сайтты local иштетип админ менен кириңиз.
2. Эгер Firestore'до `approved_members` бош болсо, керек болсо кол менен импорт кылыңыз же console аркылуу push кылыңыз.

## 5) Hosting
Vercel, Netlify же Firebase Hosting'ге статикалык файл катары чыгарасыз:
- `index.html`
- `style.css`
- `script.js`
- `app-config.js`
- `assets/background.png`
