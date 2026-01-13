from core import db
from datetime import datetime
from uuid import uuid4

def generate_uuid():
    return uuid4().hex
class City(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.Column(db.String(100), unique=True, nullable=False)
    post = db.relationship('Post', backref='city', lazy=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
def city_dict(city):
    return {
        "id": city.id,
        "name": city.name,
        "created_at": city.created_at.isoformat()
    }