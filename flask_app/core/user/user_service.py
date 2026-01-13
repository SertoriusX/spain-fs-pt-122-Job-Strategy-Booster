from flask import jsonify
from core import db, bcrypt
from .models import User, user_dict, Profile, profile_dict
from ..skill.models import Skill
from flask_jwt_extended import create_access_token

class UserService:
    @staticmethod
    def register_user(data):
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if User.query.filter_by(username=username).first():
            return jsonify({"message": "Username already exists"}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({"message": "Email already exists"}), 400

        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

        new_user = User(
            username=username,
            email=email,
            password_hash=password_hash
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "message": "User registered successfully",
            "user": user_dict(new_user)
        }), 201

class LoginService:
    @staticmethod
    def login_user(data):
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user or not bcrypt.check_password_hash(user.password_hash, password):
            return jsonify({"message": "Invalid credentials"}), 401

        access_token = create_access_token(identity=user.id)

        return jsonify({
            "access_token": access_token,
            "user": user_dict(user)
        }), 200

class ProfileService:
    @staticmethod
    def post_profile(user_id, data):
        user = User.query.get(user_id)
        if not user:
            return {"message": "User not found"}, 404

        bio = data.get('bio')
        avatar_url = data.get('avatar_url')

        profile = Profile(
            bio=bio,
            avatar_url=avatar_url,
            user_id=user.id,
        )

        skill_ids = data.get('skill_id', []) 

        for skill_id in skill_ids:
            skill = Skill.query.get(skill_id)
            if skill:
                profile.skills.append(skill)

        db.session.add(profile)
        db.session.commit()

        return {
            "message": "Profile created successfully",
            "profile": profile_dict(profile)
        }, 201


    @staticmethod
    def get_profile(user):
        profile = Profile.query.filter_by(user_id=user.id).first()
        if not profile:
            return jsonify({"message": "Profile not found"}), 404

        return jsonify(profile_dict(profile)), 200

    @staticmethod
    def update_profile(user, data):
        profile = Profile.query.filter_by(user_id=user.id).first()
        if not profile:
            return jsonify({"message": "Profile not found"}), 404

        bio = data.get('bio')
        avatar_url = data.get('avatar_url')
        skill_ids = data.get('skill_id', [])

        if bio is not None:
            profile.bio = bio
        if avatar_url is not None:
            profile.avatar_url = avatar_url

        if skill_ids:
            profile.skills.clear()  
            for skill_id in skill_ids:
                skill = Skill.query.get(skill_id)
                if skill:
                    profile.skills.append(skill)

        db.session.commit()

        return jsonify({"message": "Profile updated"}), 200


    