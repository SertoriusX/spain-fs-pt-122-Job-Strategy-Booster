from core import db 
from datetime import datetime
from uuid import uuid4
from ..models.associations import profile_skills, post_skills
def generate_uuid():
    return uuid4().hex

class Skill(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(100), unique=True, nullable=False)
    posts = db.relationship('Post', secondary=post_skills, back_populates='skills')
    profiles = db.relationship('Profile', secondary=profile_skills, back_populates='skills')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
def skill_dict(skill):
    return {
        "id": skill.id,
        "name": skill.name,
        "created_at": skill.created_at.isoformat()
    }