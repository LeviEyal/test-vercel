export default function handler(request, response) {
    response.status(200).json({
      body: request.body,
      query: "blah blah",
      cookies: request.cookies,
    });
  }
  