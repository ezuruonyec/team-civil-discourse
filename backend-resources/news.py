import requests # for API requests
import json # for parsing JSON data if needed
import sys # for parsing command line arguments
import config  # seperate file for holding keys 
import boto3 # for accessing S3 (and lambda functions?

# TODO implement lambda functions 
def news():
    print('Starting Program') 
    # keywords = ['fake news', 'misinformation', 'civil discourse', 'freedom of speech'] # keywords to search for with news articles
    keywords = 'fake news OR misinformation OR civil discourse OR freedom of speech OR journalism'
    domains = 'washingtonpost.com,nytimes.com'
    for country in sys.argv[1:]: # countries should be passed via command line? 
        # TODO figure out how countries should be inputted? Should they all be seperate scripts? if statements?
        print(country)
        if country == 'United-States':
            domains ='washingtonpost.com,nytimes.com'
            request_url = ('https://newsapi.org/v2/everything?qInTitle=' + keywords  
            + '&domains=' + domains +'&pageSize=5&apiKey=' + config.newsAPI_key)
            news_request = requests.get(request_url)
            print(news_request)
        # TODO: send to cache instead of writing to file on local system
        elif country == 'United-Kingdom':
            country_code = 'uk'
            domains = 'washingtonpost.com,bbc.com'
            request_url = ('https://newsapi.org/v2/everything?q=' + keywords  
             +'&domains=' + domains +'&pageSize=5&apiKey=' + config.newsAPI_key)
            news_request = requests.get(request_url) 
            # do stuff here
        elif country == 'Canada':
            domains = 'washingtonpost.com'
        f = open(country + '_return.json', 'w')
        f.write(news_request.text)
        f.close()
            # s3_client = boto3.client('s3')
            # try:
            #    response = s3_client.upload_file(country + '_return.json', bucket, news_request.text) 
            # catch: 
            # do some stuff here 

def main():
    news()


if __name__ == "__main__":
    news()
    
