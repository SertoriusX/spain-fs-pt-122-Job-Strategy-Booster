from core import  db, bcrypt
from flask import request, jsonify
from .models import SocialMedia, socialmedia_dict

class SocialMediaService:
    @staticmethod
    def create_social_media(data):
        platform_name = data.get('platform_name')
        img_url = data.get('img_url')

      

        new_social_media = SocialMedia(platform_name=platform_name, img_url=img_url)
        db.session.add(new_social_media)
        db.session.commit()

        return jsonify(socialmedia_dict(new_social_media)), 201

    @staticmethod
    def get_all_social_medias():
        social_medias = SocialMedia.query.all()
        return jsonify([socialmedia_dict(sm) for sm in social_medias]), 200

    @staticmethod
    def get_social_media_by_id(id):
        social_media = SocialMedia.query.filter_by(id=id).first()
        if not social_media:
            return jsonify({"message": "Social media profile not found"}), 404
        return jsonify(socialmedia_dict(social_media)), 200

    @staticmethod
    def update_social_media(social_media_id, data):
        social_media = SocialMedia.query.filter_by(id=social_media_id).first()
        if not social_media:
            return jsonify({"message": "Social media profile not found"}), 404

        platform = data.get('platform')
        username = data.get('username')
        profile_url = data.get('profile_url')

        if platform:
            social_media.platform = platform
        if username:
            social_media.username = username
        if profile_url:
            social_media.profile_url = profile_url

        db.session.commit()
        return jsonify(socialmedia_dict(social_media)), 200

    @staticmethod
    def delete_social_media(id):
        social_media = SocialMedia.query.filter_by(id=id).first()
        if not social_media:
            return jsonify({"message": "Social media profile not found"}), 404

        db.session.delete(social_media)
        db.session.commit()
        return jsonify({"message": "Social media profile deleted successfully"}), 200