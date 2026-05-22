import urllib.request
from bs4 import BeautifulSoup

url = "https://abhilashbs.dev/products/unisex-pullover-hoodie-2"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
    
    soup = BeautifulSoup(html, 'html.parser')
    pdp = soup.find(class_='pdp')
    if pdp:
        print("Found .pdp section!")
        print("Attributes:", pdp.attrs)
        # Check visible text or layout components
        title = pdp.find(class_='pdp-title')
        print("Title text:", title.text.strip() if title else "None")
        
        gallery = pdp.find(class_='pdp-gallery')
        print("Gallery present:", gallery is not None)
        
        info = pdp.find(class_='pdp-info')
        print("Info panel present:", info is not None)
    else:
        print("No .pdp section found!")
        
except Exception as e:
    print("Error:", e)
