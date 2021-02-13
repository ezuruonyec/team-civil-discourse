import requests
import json
import sys
import config 
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
            request_url = ('https://newsapi.org/v2/everything?q=' + keywords  
            + '&domains=' + domains +'&pageSize=15&apiKey=' + config.newsAPI_key)
            news_request = requests.get(request_url)
            print(news_request)
        # TODO: send to cache instead of writing to file on local system
            f = open('return.json', 'w')
            f.write(news_request.text)
            f.close()

def main():
    news()


if __name__ == "__main__":
    news()
    
