from flask import jsonify
from models import Deal

# Define `deals` as an empty list
deals = []

def get_deals():
    return jsonify([deal.to_dict() for deal in deals])

def add_deal(new_deal):
    deals.append(new_deal)
    return jsonify(new_deal), 201

def update_deal(deal_id, updated_deal):
    if deal_id < len(deals):
        deals[deal_id] = updated_deal
        return jsonify(deals[deal_id])
    return jsonify({"error": "Deal not found"}), 404