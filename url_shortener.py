from flask import Flask, request, render_template
import http.client
from urllib.parse import quote_plus

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/shorten', methods=['GET'])
def shorten_url():
    long_url = request.args.get('url')
    
    if not long_url:
        return "Error: No URL provided", 400
    
    conn = http.client.HTTPSConnection("is.gd")
    long_url_encoded = quote_plus(long_url)
    conn.request("GET", f"/create.php?format=simple&url={long_url_encoded}")
    
    response = conn.getresponse()
    data = response.read().decode("utf-8")
    
    if response.status == 200:
        return data.strip()
    else:
        return "Error: Could not shorten the URL", 500

if __name__ == '__main__':
    app.run(debug=True)
