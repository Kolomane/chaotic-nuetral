import requests, json, re

def main():
    print(f"!!! START")
    thing = requests.request("GET", 'https://www.hellofresh.com/recipes/when-steak-met-potatoes-5857fcd16121bb11c124f383')
    some_match = re.search('\"recipeIngredient\":\[(.*?)\]',str(thing.content))
    print(f"!!! END\n{some_match[0]}")
main()

# https://www.hellofresh.com/recipes/when-steak-met-potatoes-5857fcd16121bb11c124f383