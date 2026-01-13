from core import db
from datetime import datetime
from uuid import uuid4
def generate_uuid():
    return uuid4().hex
class Category(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(80), unique=True, nullable=False)
    post = db.relationship('Post', backref='category', lazy=True)
    description = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
def category_dict(category):
    return {
        "id": category.id,
        "name": category.name,
        "description": category.description,
        "created_at": category.created_at.isoformat()
    }