from core import db
from datetime import datetime
from uuid import uuid4
def generate_uuid():
    return uuid4().hex

class SocialMedia(db.Model):
    __tablename__ = 'socialmedia'  # must match FK string 'socialmedia.id'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid())
    platform_name = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String(888885), nullable=False)
    post = db.relationship('Post', backref='socialmedia', lazy=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
def socialmedia_dict(socialmedia):
    return {
        "id": socialmedia.id,
        "platform_name": socialmedia.platform_name,
        "img_url": socialmedia.img_url,
        "created_at": socialmedia.created_at.isoformat(),
        "updated_at": socialmedia.updated_at.isoformat()
    }