import mysql.connector
from config import DB_HOST,DB_USER,DB_NAME,DB_PASSWORD,DB_PORT

def get_connection():
    try:
            
       conn = mysql.connector.connect(
            host = DB_HOST,
            user = DB_USER,
            password = DB_PASSWORD,
            database = DB_NAME,
            port = DB_PORT 
        )
       return conn
    except mysql.connector.Error as err:
        print(f"Error al conectar a la base de datos: {err}")
        return None
