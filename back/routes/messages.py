from flask import Blueprint, request, jsonify
from db import get_connection

messages_bp = Blueprint('messages', __name__)


@messages_bp.route('/messages', methods=['POST'])
def create_message():
    data = request.form
    name = data.get('name')
    message = data.get('message')
    
    if not message:
        return  jsonify({"error": "Message is required"}), 400
    
    conn = get_connection()
    cursor = conn.cursor()
    
    sql = "INSERT INTO mensajes (name, message) VALUES (%s, %s)"
    values = (name, message)
    
    cursor.execute(sql,values)
    conn.commit()
    
    cursor.close()
    conn.close()
        
    return jsonify({
        "status":"ok",
        "message":"Message sent."
    }), 201
    