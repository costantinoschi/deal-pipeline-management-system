from flask import Flask, jsonify, request, render_template
from models import Deal

app = Flask(__name__)

# Example in-memory data store
deals = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/deals", methods=["GET"])
def get_deals():
    return jsonify(deals)

@app.route("/api/deals", methods=["POST"])
def add_deal():
    new_deal = request.json
    deals.append(new_deal)
    return jsonify(new_deal), 201

@app.route("/api/deals/<int:deal_id>", methods=["PUT"])
def update_deal(deal_id):
    if deal_id < len(deals):
        deals[deal_id] = request.json
        return jsonify(deals[deal_id])
    return jsonify({"error": "Deal not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)