from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import sqlalchemy as sa
import sqlalchemy.orm as so

app = Flask(__name__)
import os
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL", "sqlite:///users.db")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)
migrate = Migrate(app, db)


class Post(db.Model):
    id: so.Mapped[int] = so.mapped_column(sa.Integer, primary_key=True)
    title: so.Mapped[str] = so.mapped_column(sa.String(100), unique=True)
    summary: so.Mapped[str] = so.mapped_column(sa.String(1000), unique=True)

    def __repr__(self):
        return f"({self.id}, {self.title}/ {self.summary})"


@app.route("/databasestore", methods=["POST"])
def databasestore():
    data = request.get_json()
    post = Post(title=data["title"], summary=data["summary"])
    db.session.add(post)
    db.session.commit()
    return "Success baby!"