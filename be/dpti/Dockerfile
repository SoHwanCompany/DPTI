# 도커 이미지의 base로 사용할 이미지
FROM openjdk:11-jdk-slim

# 로컬에 있는 jar 파일을 컨테이너 내부의 app.jar로 복사
COPY build/libs/dpti-0.0.1-SNAPSHOT.jar app.jar

# 컨테이너 내부에서 8080번 포트를 사용
EXPOSE 8080

# 컨테이너가 시작될 때 app.jar 파일을 실행
ENTRYPOINT ["java", "-jar", "-Duser.timezone=Asia/Seoul", "/app.jar"]