import requests
import json
import sys
import config 

def news():
    print('Starting Program') 
    # keywords = ['fake news', 'misinformation', 'civil discourse', 'freedom of speech'] # keywords to search for with news articles
    keywords = 'fake news OR misinformation OR civil discourse OR freedom of speech'
    domains = 'washingtonpost.com,nytimes.com'
    for country in sys.argv[1:]: # countries should be passed via command line?
        print(country)
        request_url = 'https://newsapi.org/v2/everything?q=' + keywords + '&domains=' + domains +'&pageSize=5&apiKey=' + config.newsAPI_key
        news_request = requests.get(request_url)
        print(news_request)
        f = open('return.json', 'w')
        f.write(news_request.text)
        f.close()

def main():
    news()


if __name__ == "__main__":
    news()
    
