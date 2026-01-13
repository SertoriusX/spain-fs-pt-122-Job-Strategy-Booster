from flask import jsonify,request
from .models import City, city_dict
from core import db

class CityService:
    @staticmethod
    def create_city(data):
        name = data.get('name')

        if City.query.filter_by(name=name).first():
            return jsonify({"message": "City name already exists"}), 400

        new_city = City(name=name)
        db.session.add(new_city)
        db.session.commit()

        return jsonify(city_dict(new_city)), 201

    @staticmethod
    def get_all_cities():
        cities = City.query.all()
        city_list = [city_dict(city) for city in cities]
        return jsonify(city_list),200

    @staticmethod
    def get_city_by_id(id):
        city = City.query.filter_by(id=id).first()
        if not city:
            return jsonify({"message": "City not found"}), 404
        return jsonify(city_dict(city)), 200

    @staticmethod
    def update_city(city_id, data):
        city = City.query.filter_by(id=city_id).first()
        if not city:
            return jsonify({"message": "City not found"}), 404
        name = data.get('name')

        if name:
            city.name = name

        db.session.commit()
        return jsonify(city_dict(city)), 200
    @staticmethod
    def delete_city(id):
        city = City.query.filter_by(id=id).first()
        if not city:
            return jsonify({"message": "City not found"}), 404

        db.session.delete(city)
        db.session.commit()
        return jsonify({"message": "City deleted successfully"}), 200
