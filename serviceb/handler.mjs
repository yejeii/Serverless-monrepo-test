"use strict";

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello change!",
        input: event,
      },
      null,
      2
    ),
  };
};
