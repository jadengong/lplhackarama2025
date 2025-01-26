'''
    DEPLOYED IN AWS
    lambda_function used by API gateway. Called when our application, SmartShopper enters two urls for comparison of two items.
    
    Basic: scrapes the website for specific information. Only works for nike and amazon, but in the future should expand to many different websites.
    
    Don't webscrape illegally.
'''

import json
import requests
from bs4 import BeautifulSoup

# Scrape Nike product data
def scrape_nike(product_url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive"
    }

    # Send GET request to the Nike product page
    response = requests.get(product_url, headers=headers)
    
    if response.status_code != 200:
        return None

    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract Nike product details
    product_name = soup.find('h1', {'id': 'pdp_product_title'}).get_text(strip=True)
    product_price = soup.find('span', {'data-testid': 'currentPrice-container'}).get_text(strip=True)
    description = soup.find('p', {'data-testid': 'product-description'}).get_text(strip=True)
    image_tag = soup.find('img', {'data-testid': 'HeroImg', 'class': 'css-8vcjdz'})
    image_url = image_tag['src'] if image_tag else None

    return {
        'name': product_name,
        'price': product_price,
        'description': description,
        'imageUrl': image_url
    }

# Scrape Amazon product data
def scrape_amazon(product_url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive"
    }

    # Send GET request to the Amazon product page
    response = requests.get(product_url, headers=headers)
    
    if response.status_code != 200:
        return None

    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract Amazon product details
    product_name = soup.find('span', {'id': 'productTitle'}).get_text(strip=True)
    price_whole = soup.find('span', {'class': 'a-price-whole'}).get_text(strip=True)
    price_fraction = soup.find('span', {'class': 'a-price-fraction'}).get_text(strip=True)
    price = f"{price_whole}{price_fraction}"
    
    description_list = soup.find('ul', {'class': 'a-unordered-list a-vertical a-spacing-small'})
    description_items = description_list.find_all('li')
    description = [item.get_text(strip=True) for item in description_items]
    description_text = "\n".join(description)

    image_tag = soup.find('img', {'id': 'landingImage'})
    image_url = image_tag['src'] if image_tag else None

    return {
        'name': product_name,
        'price': price,
        'description': description_text,
        'imageUrl': image_url
    }

# Lambda function handler
def lambda_handler(event, context):
    # Get two product URLs from event (API Gateway call from frontend)
    url1 = event.get('queryStringParameters', {}).get('url1', None)
    url2 = event.get('queryStringParameters', {}).get('url2', None)

    if not url1 or not url2:
        return {
            "statusCode": 400,
            "body": "Both Product URLs (url1 and url2) are required."
        }

    # Scrape data for both products
    if 'nike.com' in url1:
        product1_data = scrape_nike(url1)
    elif 'amazon.com' in url1:
        product1_data = scrape_amazon(url1)
    else:
        return {
            "statusCode": 400,
            "body": json.dumps({'error': 'Unsupported site for URL 1'})
        }

    if 'nike.com' in url2:
        product2_data = scrape_nike(url2)
    elif 'amazon.com' in url2:
        product2_data = scrape_amazon(url2)
    else:
        return {
            "statusCode": 400,
            "body": json.dumps({'error': 'Unsupported site for URL 2'})
        }

    if not product1_data or not product2_data:
        return {
            "statusCode": 400,
            "body": json.dumps({'error': 'Failed to retrieve data for one or both products'})
        }

    # Return the data for both products
    return {
        'statusCode': 200,
        'body': json.dumps({
            'product1': product1_data,
            'product2': product2_data
        })
    }