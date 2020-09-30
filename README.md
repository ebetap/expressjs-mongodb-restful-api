# expressjs-mongodb-restful-api

mongoDB 및 Express.js를 사용하여 편안한 API 빌드

기술
컴퓨터에 mongoDb를 설치했는지 확인하십시오.

1. 포트 3000에서 실행
2. 데이터베이스 이름 : 'exmo'

#설정

1.이 저장소 복제
2. 터미널을 열고`expressjs-mongodb-restful-api` 디렉토리로 이동합니다.
3. 'sudo npm install'로 오류를 시도하면`npm install '
4.`npm 시작`

API 문서

1. 모든 사용자 데이터`/ users` 가져 오기
2. ID`/ user / : id`로 사용자 가져 오기 매개 변수로 ID 필요
3. 본문`{email : 'someemail @ gmail.com', password : 'somepassword'}`가있는 사용자 데이터`/ users` POST
4. PUT 사용자 데이터`/ users / : id`에는 매개 변수로 id와 본문`{email : 'someemail @ gmail.com', password : 'somepassword'}`가 필요합니다.
5. 사용자 데이터 삭제`/ users / : id`는 매개 변수로 ID가 필요합니다.