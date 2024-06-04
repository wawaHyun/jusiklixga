FROM python:3.11.7
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./app /code/app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]

FROM openjdk:17-alpine
RUN mkdir /app
COPY --from=builder /gradle/build/libs/*.jar /app/app.jar
ARG PROFILE
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]