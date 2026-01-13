from core import app, db, bcrypt
from flask import request,jsonify
from .user_service import UserService, LoginService, ProfileService
from .models import Profile,User
from flask_jwt_extended import jwt_required, get_jwt_identity

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    return UserService.register_user(data)  

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    return LoginService.login_user(data)    

@app.route('/profile', methods=['POST'])
@jwt_required()
def create_profile():
    user_id = get_jwt_identity()
    data = request.get_json()
    return ProfileService.post_profile(user_id, data)  

@app.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return ProfileService.get_profile(user)        

@app.route('/profile/<string:id>', methods=['PUT'])
@jwt_required()
def update_profile(id):
    current_user_id = get_jwt_identity()
    print(f"Current user id from JWT: {current_user_id}")
    print(f"ID from URL param: {id}")

    user = User.query.get(current_user_id)
   

    data = request.get_json()
    return ProfileService.update_profile(user, data)