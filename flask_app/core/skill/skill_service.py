from core import db
from .models import Skill, skill_dict

class SkillService:

    @staticmethod
    def create_skill(data):
        name = data.get('name')

        if Skill.query.filter_by(name=name).first():
            return {"message": "Skill name already exists"}, 400

        new_skill = Skill(name=name)
        db.session.add(new_skill)
        db.session.commit()

        return skill_dict(new_skill), 201

    @staticmethod
    def get_all_skills():
        skills = Skill.query.all()
        skill_list = [skill_dict(skill) for skill in skills]
        return skill_list, 200

    @staticmethod
    def get_skill_by_id(id):
        skill = Skill.query.filter_by(id=id).first()
        if not skill:
            return {"message": "Skill not found"}, 404
        return skill_dict(skill), 200

    @staticmethod
    def update_skill(id, data):
        skill = Skill.query.filter_by(id=id).first()
        if not skill:
            return {"message": "Skill not found"}, 404

        name = data.get('name')
        if name and name != skill.name:
            if Skill.query.filter_by(name=name).first():
                return {"message": "Skill name already exists"}, 400
            skill.name = name

        db.session.commit()
        return skill_dict(skill), 200

    @staticmethod
    def delete_skill(id):
        skill = Skill.query.filter_by(id=id).first()
        if not skill:
            return {"message": "Skill not found"}, 404

        db.session.delete(skill)
        db.session.commit()
        return {"message": "Skill deleted successfully"}, 200
