from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient

load_dotenv(find_dotenv())

password = os.environ.get("MONGODB_PWD")


connection_string = f"mongodb+srv://estradeson:{password}@hakaton-db.ndxmx.mongodb.net/?retryWrites=true&w=majority&appName=hakaton-db"

client = MongoClient(connection_string)