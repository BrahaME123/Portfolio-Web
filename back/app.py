from flask import Flask, rend
from routes.messages import messages_bp
app = Flask(__name__)


@app.route("/")
def home():
    return index.html

#connect blueprint
app.register_blueprint(messages_bp)
if __name__ == "__main__":
    app.run(debug=True)