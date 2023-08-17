// const headers = {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
// };

const getRequest = (body = null, method = "GET") => {
  const request = {
    method,
  };
  if (body && method === "POST") request.body = JSON.stringify(body);
  return request;
};
export default getRequest;
