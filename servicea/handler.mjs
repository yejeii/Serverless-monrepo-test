"use strict";

import bcrypt from "bcryptjs";
import fetch from "node-fetch";

// Lambda 함수 핸들러
// event: Lambda 함수에 전달할 이벤트 데이터
// context: Lambda 실행 환경과 관련된 정보를 담고 있는 객체
export const hello = async (event, context) => {
  console.log("Random change");

  // serverlessSdk.span : Serverless Framework에서 제공하는 성능 추적 도구
  // "another changes" 이름으로 해당 블록의 실행 시간 추적
  await context.serverlessSdk.span("another changes", async () => {
    return new Promise((resolve, reject) => {
      bcrypt.hash("More Another change again!!!", 10, () => {
        resolve();
      });
    });
  });

  // fetch 사용하여 해당 API 엥 GET 요청 보냄 -> 랜덤함 개와 관련된 사실 반환
  await context.serverlessSdk.span("Dog Facts", async () => {
    return fetch("https://some-random-api.ml/facts/dog");
  });

  // Lambda 함수가 성공적으로 실행된 후 반환할 HTTP 응답 형식
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Service a change",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
