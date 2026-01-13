from core import db
from datetime import datetime
from uuid import uuid4
from ..models.associations import profile_skills

def generate_uuid():
    return uuid4().hex

class User(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    profile = db.relationship('Profile', backref='user', uselist=False)
    post = db.relationship('Post', backref='author', lazy=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


def user_dict(user):
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "profile": profile_dict(user.profile) if user.profile else None,
        "created_at": user.created_at.isoformat()
    }


class Profile(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    bio = db.Column(db.Text, nullable=True)
    skills = db.relationship('Skill', secondary=profile_skills, back_populates='profiles')
    avatar_url = db.Column(db.String(500), nullable=True)
    user_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)

def profile_dict(profile):
    return {
        "id": profile.id,
        "bio": profile.bio,
        "avatar_url": profile.avatar_url,
        "user_id": profile.user_id,
        "user_username":profile.user.username,
        "skills": [
            {
                "id": skill.id,
                "name": skill.name
            }
            for skill in profile.skills
        ]
    }