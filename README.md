＃expressjs-mongodb-restful-api

mongoDBとExpress.jsを使用してRESTfulAPIを構築します

説明
マシンにmongoDbがインストールされていることを確認してください。

1.ポート3000で実行
2.データベース名： 'exmo'

＃セットアップ

1.このリポジトリのクローンを作成します
2.ターミナルを開き、 `expressjs-mongodb-restful-api`ディレクトリに移動します
3. `npm install` if err try with'sudo npm install '
4. `npm start`

APIドキュメント

1.すべてのユーザーデータ `/ users`を取得します
2. ID `/ user /：id`でユーザーを取得するにはパラメータとしてIDが必要です
3.本文が `{email： 'someemail @ gmail.com'、password： 'somepassword'}`のユーザーデータ `/ users`をPOSTします。
4.PUTユーザーデータ `/ users /：id`には、パラメーターと本文としてIDが必要です` {email： 'someemail @ gmail.com'、password： 'somepassword'} `
5.ユーザーデータの削除 `/ users /：id`にはパラメータとしてIDが必要です