// utils/base64.js
export function encodeBase64(obj) {
  return Buffer.from(JSON.stringify(obj)).toString("base64");
}