# -*- coding: utf-8 -*-
from pymongo import MongoClient

client = MongoClient('localhost', 27017 , username="root", password="example")
#client = MongoClient('localhost', 27017)
db = client.test_database
collection = db.test_collection
post = {"auth": "mk", "text":"my nae"}
posts = db.posts
post_id = posts.insert_one(post).inserted_id
print(post_id)
