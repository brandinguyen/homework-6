from flask import Flask, request

app = Flask(__name__)

@app.route("/name", methods=['POST'])
def name():
    input_json = request.get_json(force=True)
    firstName = input_json['input']
    if(firstName=="Brandi"):
        return {"name": "Nguyen"}
    else:
        return {"name": "User Not Found"}

if __name__ == "__main__":
    app.run(debug=True)