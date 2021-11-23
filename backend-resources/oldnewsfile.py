import json
import urllib3
import boto3 
import sys

# This is the old file we used in AWS Lambda to get news articles.

def lambda_handler(event, context):
    # events should be countries?
    
    # Sets up our HTTP requests manager
    # http = urllib3.PoolManager()
    # exampleRequest = http.request('GET', requestUrl)
    # exampleRequest = http.request('PUT', requestUrl)
    # exampleRequest = http.request('POST', requestUrl)
    article = news(event['country'])
    #return {
    #    'status': article.status,
    #    'body': article.data
    #}
    
def request(request_url, country):
    querystring = {"q":"fake news OR misinformation OR  freedom of speech OR free speech OR journalism OR freedom of press OR free press OR journalist OR human rights",
    "lang":"en","sort_by":"relevancy","page":"1","media":"True"}

    headers = {
    'x-rapidapi-key': "9acd56b7e9mshdf710506eb6cdb6p1a6f14jsn54463c41f74d",
    'x-rapidapi-host': "newscatcher.p.rapidapi.com"
    }
    http = urllib3.PoolManager()
    article = http.request('GET', request_url, headers=headers)
    return article 
    
# Gets the new of a given country
def news(country):
    
    if country == 'United States':
        sources='thewashingtonpost.com,nytimes.com,axios.com,apnews.com'
        code = 'us'
    elif country == 'United Kingdom':
        sources='the-guardian.co.uk,reauters.com,bbc.co.uk'
        code = 'gb'
    newscatcher_key = '9acd56b7e9mshdf710506eb6cdb6p1a6f14jsn54463c41f74d'
    keywords = ('fake news OR misinformation OR  freedom of '
    + 'speech OR free speech OR journalism OR freedom of press OR free press OR journalist OR human rights')
    news_catcher_url = 'https://newscatcher.p.rapidapi.com/v1/search?q=' + keywords + '&sort_by=relevancy&sources=' + sources
    response = request(news_catcher_url, code)
    print(response)
    if response:
        #s3_client = boto3.client('s3')
#        bucket = record['s3']['cis-467-civildiscoursemap']['news-api-articles']
        #tempFile = open(country + ".json", "w")
        #tempFile.write(response.body)
        # tempFile.close()
        #s3_client.put_object(country + ".json", "dev-civildiscoursemap", "news")
        s3 = boto3.resource("s3")
        s3.Bucket("dev-civildiscoursemap").put_object(Body=response.data, Key="news/" + country + ".json")
    #return response

    