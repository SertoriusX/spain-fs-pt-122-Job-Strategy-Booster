from core import db

profile_skills = db.Table(
    'profile_skills',
    db.Column('profile_id', db.String(36), db.ForeignKey('profile.id'), primary_key=True),
    db.Column('skill_id', db.String(36), db.ForeignKey('skill.id'), primary_key=True)
)

post_skills = db.Table(
    'post_skills',
    db.Column('post_id', db.String(36), db.ForeignKey('post.id'), primary_key=True),
    db.Column('skill_id', db.String(36), db.ForeignKey('skill.id'), primary_key=True)
)
