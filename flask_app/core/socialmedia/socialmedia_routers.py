from core import app, db, bcrypt
from flask import request, jsonify
from .social_service import SocialMediaService
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/socialmedia', methods=['POST'])
def create_social_media():
    data = request.get_json()
    service= SocialMediaService()
    result, status = service.create_social_media(data)
    return result, status
@app.route('/socialmedia', methods=['GET'])
def get_all_social_medias():
    service = SocialMediaService()
    result, status = service.get_all_social_medias()
    return result, status
@app.route('/socialmedia/<string:id>', methods=['GET'])
def get_social_media_by_id(id):
    service = SocialMediaService()
    result, status = service.get_social_media_by_id(id)
    return jsonify(result), status
@app.route('/socialmedia/<string:id>', methods=['PUT'])
def update_social_media(id):
    data = request.get_json()
    service = SocialMediaService()
    result, status = service.update_social_media(id, data)
    return result, status
@app.route('/socialmedia/<string:id>', methods=['DELETE'])
def delete_social_media(id):
    service = SocialMediaService()
    result, status = service.delete_social_media(id)
    return result, status