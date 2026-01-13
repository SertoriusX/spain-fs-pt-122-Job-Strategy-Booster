from flask import request, jsonify
from core import db
from datetime import datetime
from ..skill.models import skill_dict
from ..models.associations import post_skills
from uuid import uuid4
def generate_uuid():
    return uuid4().hex

class Post(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name_work = db.Column(db.String(150), nullable=False)
    expirience_required = db.Column(db.String(100), nullable=True)
    salary = db.Column(db.String(5000), nullable=True)
    candidates_applied = db.Column(db.String(100), default=0)
    completed_interview = db.Column(db.Boolean, default=False)
    skills = db.relationship('Skill', secondary=post_skills, back_populates='posts')
    socialmedia_id = db.Column(db.String(36), db.ForeignKey('socialmedia.id'), nullable=False)
    city_id = db.Column(db.String(36), db.ForeignKey('city.id'), nullable=False)
    matched_percentage = db.Column(db.Float, nullable=True, default=0.0)

    author_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)
    category_id = db.Column(db.String(36), db.ForeignKey('category.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
def post_dict(post):
    return {
        "id": post.id,
        "name_work": post.name_work,
        "expirience_required": post.expirience_required,
        "salary": post.salary,
        "candidates_applied": post.candidates_applied,
        "completed_interview": post.completed_interview,
        "matched_percentage":post.matched_percentage,
        "skills": [
            {
                "id": skill.id,
                "name": skill.name
            }
            for skill in post.skills
        ],
        "socialmedia_id": post.socialmedia_id,
        "city_id": post.city_id,
        "city_name": post.city.name if post.city else "Unknown",
        "category_name": post.category.name if post.category else None, 
        "social_media":post.socialmedia.platform_name,
        "author_id": post.author_id,
        "category_id": post.category_id,
        "created_at": post.created_at.isoformat(),
        "updated_at": post.updated_at.isoformat()
    }

