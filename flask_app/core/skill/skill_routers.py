from flask import jsonify, request
from core import app, db
from .skill_service import SkillService
from flask_jwt_extended import jwt_required, get_jwt_identity


@app.route('/skills', methods=['GET'])
def get_all_skills():
    service = SkillService()
    result, status = service.get_all_skills()
    return jsonify(result), status
@app.route('/skills/<string:id>', methods=['GET'])
def get_skill_by_id(id):
    service = SkillService()
    result, status = service.get_skill_by_id(id)
    return jsonify(result), status
@app.route('/skills', methods=['POST'])
def create_skill():
    data = request.get_json()
    service = SkillService()
    result, status = service.create_skill(data)
    return jsonify(result), status
@app.route('/skills/<string:id>', methods=['PUT'])
def update_skill(id):
    data = request.get_json()
    service = SkillService()
    result, status = service.update_skill(id, data)
    return jsonify(result), status
@app.route('/skills/<string:id>', methods=['DELETE'])
def delete_skill(id):
    service = SkillService()
    result, status = service.delete_skill(id)
    return jsonify(result), status