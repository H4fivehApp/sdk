import "dotenv/config";

export const env = {
  port: process.env.PORT || 3000,
  token: process.env.TOKEN_NAME || "H45H",
  founder: process.env.FOUNDER || "Lucas"
};
