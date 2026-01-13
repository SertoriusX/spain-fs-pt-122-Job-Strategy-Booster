from core import app
from flask import request, jsonify
from .post_service import PostService
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..user.models import User


@app.route('/posts', methods=['POST'])
@jwt_required()
def create_post():
    data = request.get_json()
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    result, status = PostService.create_post(user, data)
    return result, status


@app.route('/posts', methods=['GET'])
def get_all_posts():
    service = PostService()
    return service.get_all_posts()

@app.route('/posts/<string:id>', methods=['GET'])
def get_post_by_id(id):
    service = PostService()
    post = service.get_post_by_id(id)
    return post

@app.route('/posts/<string:id>', methods=['PUT'])
@jwt_required()
def update_post(id):
    data = request.get_json()
    service =PostService()
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    posts = service.update_post(user, id, data)
    return posts


@app.route('/posts/<string:id>', methods=['DELETE'])
@jwt_required()
def delete_post(id):
    service=PostService()
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    post = service.delete_post(user, id)
    return post

@app.route('/posts/Linked' ,methods=["GET"])
def get_by_linked():
    service = PostService()
    post_linked = service.get_linked()
    return post_linked
@app.route('/posts/indead' ,methods=["GET"])
def get_by_indead():
    service = PostService()
    post_linked = service.get_indead()
    return post_linked

@app.route("/posts/my-post-count", methods=["GET"])
@jwt_required()
def count_post():
    current_user=get_jwt_identity()
    user=User.query.get(current_user)
    service=PostService()
    post_count= service.my_post_count(user)
    return post_count
