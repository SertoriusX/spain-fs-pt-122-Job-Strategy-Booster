from core import app, db, bcrypt
from flask import request, jsonify
from .city_service import CityService
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/city', methods=['GET'])
def get_all_cities():
    service = CityService()
    result, status = service.get_all_cities()
    return result, status
@app.route('/city/<string:id>', methods=['GET'])
def get_city_by_id(id):
    service = CityService()
    result, status = service.get_city_by_id(id)
    return result, status
@app.route('/city', methods=['POST'])
def create_city():
    data = request.get_json()
    service = CityService()
    result, status = service.create_city(data)
    return result, status
@app.route('/city/<string:id>', methods=['PUT'])
def update_city(id):
    data = request.get_json()
    service = CityService()
    result, status = service.update_city(id, data)
    return result, status
@app.route('/city/<string:id>', methods=['DELETE'])
def delete_city(id):
    service = CityService()
    result, status = service.delete_city(id)
    return result, status