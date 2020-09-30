# expressjs-mongodb-restful-api

Erstellen Sie eine erholsame API mit mongoDB und Express.js

Beschreibung
Stellen Sie sicher, dass Sie mongoDb auf Ihrem Computer installiert haben.

1. läuft auf Port 3000
2. Datenbankname: 'exmo'

#Konfiguration

1. Klonen Sie dieses Repository
2. Öffnen Sie das Terminal und gehen Sie zum Verzeichnis `expressjs-mongodb-restful-api`
3. `npm install` wenn err es mit 'sudo npm install' versuchen
4. `npm start`

API-Dokumente

1. Holen Sie sich alle Benutzerdaten `/ Benutzer`
2. GET user by id `/ user /: id` erfordert id als Parameter
3. POST-Benutzerdaten `/ users` mit dem Text` {email: 'someemail @ gmail.com', Passwort: 'somepassword'}`
4. PUT-Benutzerdaten `/ users /: id` erfordern ID als Paramer und Body` {email: 'someemail @ gmail.com', Passwort: 'somepassword'} `
5. LÖSCHEN Benutzerdaten `/ users /: id` erfordern ID als Parameter

