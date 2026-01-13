from core import app, db, bcrypt
from flask import request, jsonify
from .category_service import  CategoryService
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/categories', methods=['POST'])
def create_category():
    data = request.get_json()
    result, status = CategoryService.create_category(data)
    return result, status
@app.route('/categories', methods=['GET'])
def get_all_categories():
    result, status = CategoryService.get_all_categories()
    return result, status
@app.route('/categories/<string:id>', methods=['GET'])
def get_category_by_id(id):
    result, status = CategoryService.get_category_by_id(id)
    return result, status
@app.route('/categories/<string:id>', methods=['PUT'])
def update_category(id):
    data = request.get_json()
    result, status = CategoryService.update_category(id, data)
    return result, status
@app.route('/categories/<string:id>', methods=['DELETE'])
def delete_category(id):
    result, status = CategoryService.delete_category(id)
    return result, status