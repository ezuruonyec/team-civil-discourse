import urllib3 # for making requests
import sys # for command line arguments
import config # local file that holds keys 
from datetime import date
import json 
import pymongo 
# import requests 

def main():
    for country in sys.argv[1:]:
        pop = get_population(country)
        print(country) 
        print(pop)
        insert_into_mongo(pop, country)

def request(request_url):
    http = urllib3.PoolManager()
    api_request = http.request('GET', request_url)
    api_request = api_request.read().decode('ASCII') 
    api_request = json.loads(api_request) 
    return api_request

def get_population(country:str):
    year = str(date.today().year)
    url = 'api.census.gov/data/timeseries/idb/1year?get=POP&GENC=' + country + '&YR=' + year + '&key=' + config.censusAPI_key
    data = request(url) 
    
    print(data.data)

    first_column = True
    population = 0

def insert_into_mongo(pop : int, country : str):
    database = pymongo.MongoClient(config.mongo_uri)  

main() 
