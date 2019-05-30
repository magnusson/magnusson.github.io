---
title: 'Klunsa ✊✋✌'
date: '2019-05-23'
tag: 'Code'
---

I've been coding a rock paper scissor game and wanted to write a bit about the development of it.

## Firebase

I decided to make a game to be able to make good use of the real-time database from [Firebase](https://firebase.google.com/).
It was surprisingly easy to set up and use. Using the firebase package all I needed to do was entering my application keys and I was up and running.

```js
import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
})

export default firebaseApp
```

With the firebase connection set up all I had to do to get the data from the database is to set a up a ref to the data.
This creates an ref to the players object in a lobby with a `gameId`.

```js
const playersRef = firebaseApp.database().ref(`${gameId}/players`)
```

With the ref available I use two functions `.once()` and `.on()`.
`.once()` is used to fetch the data from the database if there already is someone in the lobby and updates the state with the current players.
Using `.on()` works like a listener for changes on the reference. When a player joins the lobby we update the state and can start the game.

I started using <a href="https://github.com/tylermcginnis/re-base" target="_blank" rel="noreferrer">re-base</a> but decided against it because I wanted to try using only the Firebase API.
Using re-base you could simplify the code quite a bit using <a href="https://github.com/tylermcginnis/re-base#syncstateendpoint-options" target="_blank" rel="noreferrer">`syncState`</a>.
This is what I probably will use if I decide to refactor this some day.

## React Hooks

Another reason for this project was to get used to using the somewhat new Hooks API.
When I first started using Hooks I was really impressed with how much cleaned the code looks. I think this <a href="https://twitter.com/threepointone/status/1056594421079261185" target="_blank" rel="noreferrer">tweet</a> really shows how big of a difference it makes.
There are a few gotchas when moving away from the life cycle methods in classes and instead using `useEffect` to get the same effect.

One thing I had issues with using hooks is that when I tried to write test using <a href="https://github.com/airbnb/enzyme" target="_blank" rel="noreferrer">enzyme</a> it does not yet have full support for it. So I've had to put that on hold until a later date.

## Try it out

The game is currently hosted on Netlify which is also the first time I've used it and I really enjoy the simplicity of setting up a site in no time. I think it was about three click to get the site up and running from my GitHub repo.
You can try it out at <a href="https://klunsa.magnusson.dev/" target="_blank" rel="noreferrer">klunsa.magnusson.dev</a>.<br />
Just send the link to a friend or open it in a new tab to play against yourself.
There is still much to be done about the design of the game but since it is in a working state I wanted to get it up and write a bit about the process so far.

The name Klunsa is a swedish slang for rock–paper–scissors.
