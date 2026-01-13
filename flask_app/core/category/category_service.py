from flask import request, jsonify
from .models import Category, category_dict
from core import db

class CategoryService:
    @staticmethod
    def create_category(data):
        name = data.get('name')
        description = data.get('description')

        if Category.query.filter_by(name=name).first():
            return jsonify({"message": "Category name already exists"}), 400

        new_category = Category(name=name, description=description)
        db.session.add(new_category)
        db.session.commit()

        return jsonify(category_dict(new_category)), 201

    @staticmethod
    def get_all_categories():
        categories = Category.query.all()
        return jsonify([category_dict(cat) for cat in categories]), 200
    @staticmethod
    def get_category_by_id(id):
        category = Category.query.filter_by(id=id).first()
        if not category:
            return jsonify({"message": "Category not found"}), 404
        return jsonify(category_dict(category)), 200
    @staticmethod
    def update_category(category_id, data):
        category = Category.query.filter_by(id=category_id).first()
        if not category:
            return jsonify({"message": "Category not found"}), 404

        name = data.get('name')
        description = data.get('description')

        if name:
            category.name = name
        if description:
            category.description = description

        db.session.commit()
        return category_dict(category), 200
    @staticmethod
    def delete_category(id):
        category = Category.query.filter_by(id=id).first()
        if not category:
            return jsonify({"message": "Category not found"}), 404

        db.session.delete(category)
        db.session.commit()
        return jsonify({"message": "Category deleted successfully"}), 200