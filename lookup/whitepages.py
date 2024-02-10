import requests, json, re
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# https://www.whitepages.com/name/James-Feil/WI?fs=1&searchedName=James%20Feil&searchedLocation=Wisconsin
# SEARCH in Whitepages
# WITH each HIT, you need to take the NAME AS SHOWN, SPACES TREATED AS -, NO PUNCTUATION
# 	/name/James-L-Pfeil/Oshkosh-WI/PkypkXXGg79
# https://www.whitepages.com/name/George-Feil/Gleason-WI/PX3v2Q0DRL3
# https://hcaptcha.com/checksiteconfig?v=096d3a6&host=epieos.com&sitekey=7331f5ad-c4dd-40dd-8aaf-a818d77897b6&sc=1&swa=1&spst=0

def main():
    print(f"!!! Start")
    # get_name = input(f"Name: ")
    # get_state = input(f"State Abbreviation: ")
    # first_get = requests.request("GET", f"https://www.whitepages.com/name/{get_name.replace(' ','-')}/{get_state}")
    # print(f"first_get = {first_get.content}")

    driver = webdriver.Firefox()
    driver.get("http://www.python.org")
    assert "Python" in driver.title
    elem = driver.find_element(By.NAME, "q")
    elem.clear()
    elem.send_keys("pycon")
    elem.send_keys(Keys.RETURN)
    assert "No results found." not in driver.page_source
    driver.close()
    print(f"!!! End")
main()