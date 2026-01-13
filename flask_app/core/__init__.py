from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt

import os
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///myDatabase.db' 
app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(__file__), '..', 'uploads')
app.config['SECRET_KEY'] = '48acc0b5273209690ee832e5'
app.config['JWT_SECRET_KEY'] = '48acc0b5273209690ee832e5'
db=SQLAlchemy(app)
migrate = Migrate(app,db)
jwt = JWTManager(app)
bcrypt =Bcrypt(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])
from .user.models import *
from .user.user_routers import *

from .category.models import *
from .category.category_routers import *

from .city.models import *
from .city.city_routers import *

from .socialmedia.models import *
from .socialmedia.socialmedia_routers import *

from .post.models import *
from .post.post_routers import *

from .skill.models import *
from .skill.skill_routers import *
