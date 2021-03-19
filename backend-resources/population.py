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
    api_request_return = api_request.data.decode('ASCII')
    api_request_json = json.loads(api_request_return)
    return api_request_json

def get_population(country:str):
    year = str(date.today().year)
    url = 'api.census.gov/data/timeseries/idb/1year?get=POP&GENC=' + country + '&YR=' + '2020' + '&AREA_KM2&SEX=0' + '&key=' + config.censusAPI_key
    data = request(url)

    print(data)
    total_pop = 0
    first_column = True
    for region_pop in data:
        if first_column:
            first_column = False
            continue
        region_pop_int = int(region_pop[0])
        total_pop += region_pop_int
    return total_pop

def insert_into_mongo(pop:int, country:str):
    #config.MONGO_HOST = ''
    #config.MONGO_DB = ''
    #config.MONGO_USER =
    mongo_client = pymongo.MongoClient(config.mongo_uri)
    print("connected to mongodb")
    database = mongo_client.map.countries
    result = database.update_one({'two_digit': country}, {'$set': {'population': pop}})
    print(result.matched_count)
main()
