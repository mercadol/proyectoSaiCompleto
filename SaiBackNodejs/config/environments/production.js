module.export ={
  PORT: process.env.PORT,
  DB:{
    user:"postgres",
    password:"mysecretpassword",
    database: "school_prod",
    host: "localhost",
    dialect: "postgres"
  }
};
