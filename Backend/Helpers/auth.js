const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require("axios");
const qs = require("querystring");

exports.generateToken = (user, type, expiresIn) => {
  return jwt.sign({ _id: user._id, type }, process.env.JWT_SECRET, {
    expiresIn,
  });
};

exports.validDate = (date) => {
  const current = new Date();
  const enteredDate = new Date(date);
  if (enteredDate.setHours(0, 0, 0, 0) > current.setHours(0, 0, 0, 0)) {
    return true;
  } else {
    return false;
  }
}

exports.hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
};

exports.comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendVerificationEmail = async (user, token) => {
  const uri = `${process.env.FRONTEND_URL}/verify/${token}`;
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: user.email,
    subject: "Email Verification",
    html: `<h1>Verify Your Email</h1>
        <p>Click on the link below to verify your email</p>
        <a href=${uri}>Verify Email</a>
        `,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Error sending email", err);
  }
};

exports.sendResetEmail = async (user, token) => {
  const uri = `${process.env.FRONTEND_URL}/forgot-password/${token}`;
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: user.email,
    subject: "Password Reset",
    html: `<h1>Reset Your Password</h1>
        <p>Click on the link below to change your password</p>
        <a href=${uri}>Change Password</a>
        `,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Error sending email", err);
  }
};

exports.oauth = async (code) => {
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URL,
    grant_type: "authorization_code",
  };
  try {
    const res = await axios.post(url, qs.stringify(values), {
      "Content-Type": "application/x-www-form-urlencoded",
    });
    return res.data;
  } catch (err) {
    console.error(err.response, "Failed");
  }
};

exports.getGoogleUser = async (id_token, access_token) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err, "Error fethcing user");
  }
};
