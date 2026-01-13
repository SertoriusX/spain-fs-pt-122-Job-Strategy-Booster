from core import db
from flask import request, jsonify
from .models import Post, post_dict
from ..skill.models import Skill
from ..socialmedia.models import SocialMedia
from ..user.models import Profile

class PostService:
    @staticmethod
    def my_post_count(user):
        count = Post.query.filter_by(author_id=user.id).count()
        return jsonify({"count":count})




    @staticmethod
    def create_post(user, data):
        skill_ids = data.get('skill_id', [])

        new_post = Post(
            name_work=data.get('name_work'),
            expirience_required=data.get('expirience_required'),
            salary=data.get('salary'),
            candidates_applied=data.get('candidates_applied', 0),
            completed_interview=data.get('completed_interview', False),
            socialmedia_id=data.get('socialmedia_id'),
            city_id=data.get('city_id'),
            author_id=user.id,
            category_id=data.get('category_id'),
        )

      
        post_skill_ids = set()

        for skill_id in skill_ids:
            skill = Skill.query.get(skill_id)
            if skill:
                new_post.skills.append(skill)
                post_skill_ids.add(skill.id)

   
        profile = Profile.query.filter_by(user_id=user.id).first()
        profile_skill_ids = set(skill.id for skill in profile.skills) if profile else set()

     
        matched_count = len(post_skill_ids & profile_skill_ids)

        if post_skill_ids:
            matched_percentage = (matched_count / len(post_skill_ids)) * 100
        else:
            matched_percentage = 0

        new_post.matched_percentage = round(matched_percentage, 2)

        db.session.add(new_post)
        db.session.commit()

        return jsonify(post_dict(new_post)), 201


    @staticmethod
    def get_all_posts():
        posts = Post.query.order_by(Post.id.asc()).all() 
        return jsonify([post_dict(post) for post in posts]), 200

    @staticmethod
    def get_post_by_id(id):
        post = Post.query.filter_by(id=id).first()
        if not post:
            return {"message": "Post not found"}, 404
        return jsonify(post_dict(post)), 200

    @staticmethod
    def update_post(user, data):
        name_work =data.get("name_work")
        expirience_required =data.get("expirience_required")
        candidates_applied =data.get("candidates_applied")
        completed_interview =data.get("completed_interview",False)
        socialmedia_id =data.get("socialmedia_id")
        city_id =data.get("city_id")
        category_id=data.get("category_id")
        post = Post.query.get(id)
        skill_ids = data.get('skill_id', [])

        if not post:
            return {"message": "Post not found"}, 404

        if post.author_id != user.id:
            return {"message": "Unauthorized"}, 403
        if name_work:
            post.name_work=name_work
        if expirience_required:
            post.expirience_required=expirience_required
        if candidates_applied:
            post.candidates_applied=candidates_applied
        if completed_interview:
            post.completed_interview=completed_interview
        if socialmedia_id:
            post.socialmedia_id=socialmedia_id
        if city_id:
            post.city_id=city_id
        if category_id:
            post.category_id=category_id

        if skill_ids is not None:
            post.skills.clear()
            post_skill_ids = set()

            for skill_id in skill_ids:
                skill = Skill.query.get(skill_id)
                if skill:
                    post.skills.append(skill)
                    post_skill_ids.add(skill.id)

            profile = Profile.query.filter_by(user_id=user.id).first()
            profile_skill_ids = set(s.id for s in profile.skills) if profile else set()

            matched_count = len(post_skill_ids & profile_skill_ids)
            matched_percentage = (matched_count / len(post_skill_ids) * 100) if post_skill_ids else 0
            post.matched_percentage = round(matched_percentage, 2)

        db.session.commit()      


    @staticmethod
    def delete_post(user, id):

        post = Post.query.get(id)
        if not post:
            return jsonify({"message": "Post not found"}), 404

        if post.author_id != user.id:
            return jsonify({"message": "Unauthorized"}), 403

        db.session.delete(post)
        db.session.commit()
        return jsonify({"message": "Post deleted successfully"}), 200
    
    @staticmethod
    def get_linked():
        linked = SocialMedia.query.filter_by(platform_name="Linked").first()
        if not linked:
            return []  

        posts = Post.query.filter_by(socialmedia_id=linked.id).order_by(Post.id.asc()).all()
        list_post = [post_dict(post) for post in posts]
        return list_post
    @staticmethod
    def get_indead():
        indead = SocialMedia.query.filter_by(platform_name="indeed").first()
        if not indead:
            return []  

        posts = Post.query.filter_by(socialmedia_id=indead.id).order_by(Post.id.asc()).all()
        list_post = [post_dict(post) for post in posts]
        return list_post