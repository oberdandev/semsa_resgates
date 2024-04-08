import pool from "./server.js";

const main = async () => {
  try{
    const server = await pool.connect();
    console.log("server running");
  }
  catch(err){
    console.log("server error: " + err);
    }
}

main()