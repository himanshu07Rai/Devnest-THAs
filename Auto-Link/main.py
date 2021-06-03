from selenium.webdriver.firefox.options import Options
import time
import os
from selenium import webdriver
from env import user,pas
from selenium.webdriver.support import expected_conditions as expCon
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By


options = Options()
# options.add_argument('--headless')
options.add_argument('--no-sandbox')
# add path for chromedriver.exe
options.binary_location = ("/usr/bin/firefox-developer-edition")
# This is the location where you have installed Firefox on your machine
driver = webdriver.Firefox(options=options, executable_path="/home/napster/selenium/geckodriver")

if __name__=="__main__":
    # Open Linkedin
    driver.get("https://www.linkedin.com/login")

    driver.find_element_by_id("username").send_keys(user)
    driver.find_element_by_id("password").send_keys(pas)

    driver.find_element_by_css_selector(".btn__primary--large").click()

    driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")

    # WebDriverWait(driver, 100).until(
    #             expCon.presence_of_all_elements_located((By.CLASS_NAME, "invitation-card artdeco-list__item ember-view")))

    btns,lists = [],[]

    while len(lists) == 0:
        lists = driver.find_elements_by_class_name("artdeco-list__item")
    # print(lists)

    for each in lists:
        btns.append(each.find_element_by_class_name("artdeco-button--secondary"))
    # print(btns)

    # while len(btns)==0:
    #     btns = driver.find_elements_by_xpath("//button[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")

    #click the buttons
    for btn in btns:
        btn.click()
        time.sleep(15)