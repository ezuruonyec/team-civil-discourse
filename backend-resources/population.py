import urllib3 # for making requests
import sys # for command line arguments
import config # local file that holds keys 
from datetime import date
import json 

def main():
    for country in sys.argv[1:]:
        pop = get_population(country)
        print(pop)

def request(request_url):
    http = urllib3.PoolManager()
    api_request = http.request('GET', request_url)
    return api_request

def get_population(country:str):
    year = str(date.today().year)
    url = 'api.census.gov/data/timeseries/idb/1year?get=POP&GENC=' + country + '&YR=' + year + '&key=' + config.censusAPI_key
    data = request(url) 
    
    print(data.data)

    first_column = True
    population = 0
main() 
