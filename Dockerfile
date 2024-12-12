FROM java:8-jdk-alpine

RUN apk add --no-cache tini

COPY target/scala-2.12/akka-http-quickstart-1.0.jar /app.jar

ENTRYPOINT ["/sbin/tini", "--", "java", "-jar", "/app.jar"]