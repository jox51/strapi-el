module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "5D4MfdmVi8tp2IYON2CLXA"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "F9mEalY5nEQfMXILVRXfBA"),
  },
});
