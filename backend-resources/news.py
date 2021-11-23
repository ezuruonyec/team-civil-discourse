import json
import urllib3
import boto3 
import sys

#This is the current news file that works on the backend.

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
    
def request(request_url):
    http = urllib3.PoolManager()
    article = http.request('GET', request_url)
    return article 
    
# Gets the new of a given country
def news(country):
    
    if country == 'United States':
        sources='washingtonpost.com,nytimes.com'
    elif country == 'United Kingdom':
        sources = 'the-guardian.co.uk,reuters.com,bbc.co.uk'
    elif country == 'Canada':
        sources = 'the-theglobeandmail.com,thestar.com,nationalpost.com,torontosun.com'
    elif country == 'Australia':
        sources = 'abc.net.au,9news.com.au,dailytelegraph.com.au,news.com.au,smh.com.au'
    elif country == 'New Zealand':
        sources = 'nzherald.co.nz'
    elif country == 'South Africa':
        sources = 'news24.com'
    news_api_key = ''
    keywords = ('"fake news" OR misinformation OR  "freedom of speech" OR "free speech" OR journalism OR "freedom of press" OR "free press" OR journalist OR "human rights"')
    request_url = ('https://newsapi.org/v2/everything?q= ' + keywords + '&domains=' + sources + '&pageSize=5&apiKey=' + news_api_key)
    response = request(request_url)
    print(response)
    if response:
        #s3_client = boto3.client('s3')
#        bucket = record['s3']['cis-467-civildiscoursemap']['news-api-articles']
        #tempFile = open(country + ".json", "w")
        #tempFile.write(response.body)
        # tempFile.close()
        #s3_client.put_object(country + ".json", "dev-civildiscoursemap", "news")
        s3 = boto3.resource("s3")
        s3.Bucket("prod-civildiscoursemap").put_object(Body=response.data, Key="news/" + country + ".json")
    #return response

    
