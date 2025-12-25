const email = "apple.pie@example.com";

function maskEmail (email) {
  let endSlice = email.indexOf("@");
  let slicedText = email.slice(1, endSlice - 1);
  let masked = email.replace(slicedText, "*".repeat(slicedText.length));

  return masked;
}

console.log(maskEmail(email));